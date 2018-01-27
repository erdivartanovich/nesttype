
import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { isObject, isArray } from 'util';

@Catch(HttpException)
export class JsonApiExceptionTransformer implements ExceptionFilter {
  catch(exception: HttpException, response) {
    const status = exception.getStatus();
    var errResponse = exception.getResponse();

    console.log(errResponse)
    
    var errorObj = errResponse["errors"] || errResponse["error"];
    var errorTitle = errResponse["title"] || errResponse["message"];
    var errorArr = isArray(errorObj) ? errorObj : [errorObj];
    var errors = errorArr.map(e => {
      return {
        status: status,
        title: errorTitle,
        detail: e
      }
    })

    response.status(status).json({
      errors: errors
    });
  }
}