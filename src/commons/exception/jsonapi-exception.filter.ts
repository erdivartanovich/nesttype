
import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { isObject, isArray } from 'util';

@Catch(HttpException)
export class JsonapiExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, response) {
    const status = exception.getStatus();
    var errResponse = exception.getResponse();

    var errorObj = errResponse["errors"];
    var errorTitle = errResponse["title"];
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