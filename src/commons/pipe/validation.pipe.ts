import { PipeTransform, Pipe, ArgumentMetadata, HttpStatus } from '@nestjs/common';
import { ResponseException } from '../exception/response.exception';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata) {
      var payload;
      const { metatype } = metadata;
      if (!metatype || !this.toValidate(metatype)) {
          return value;
      }
      try {
        payload = value['data']['attributes'];
      } catch (error) {
        throw new ResponseException("payload invalid", "validation error", HttpStatus.BAD_REQUEST);
      }
      if (!payload) {
        throw new ResponseException("payload invalid", "validation error", HttpStatus.BAD_REQUEST);
      }

      const object = plainToClass(metatype, payload);
      const errors = await validate(object, { skipMissingProperties: true });
      const constraints = errors.map(e => {
        return e.constraints
      });
      
      if (errors.length > 0) {
        throw new ResponseException(constraints, "validation error", HttpStatus.BAD_REQUEST);
      }

      return payload;
    }

    private toValidate(metatype): boolean {
      const types = [String, Boolean, Number, Array, Object];
      return !types.find((type) => metatype === type);
    }
}