import { Interceptor, NestInterceptor, ExecutionContext, HttpStatus } from '@nestjs/common';
import { ResponseException } from '../exception/response.exception';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { isArray } from 'util';
import { BaseEntity } from '../../domains/base.entity';

@Interceptor()
export class JsonapiTransformInterceptor implements NestInterceptor {
  intercept(dataOrRequest, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    return stream$.map((data) => {
      var dataResponse, count: number=1, total: number=1;
      
      const buildData = (vdata) => {
        var tipe, id, attributes;

        if (!vdata) {
          return [];
        }
        
        tipe = Boolean(vdata) ? `${vdata.constructor.name.toLowerCase()}s` : 'unknown';
        id = vdata.id ? vdata.id : '';
        attributes = vdata;
        delete attributes.id;
        return {
          type: tipe,
          id: id,
          attributes: attributes
        }
      };
      
      dataResponse = data || [];
      
      if ( dataResponse.constructor.prototype instanceof Error ) {
        throw new ResponseException(data.message, data.name, HttpStatus.NOT_FOUND);
      }

      dataResponse = isArray(data) ? data.map(item => buildData(item)) : buildData(data);
      if ( isArray(dataResponse) ) {
        count = dataResponse.length;
        total = dataResponse.length;
      }
      return {
        meta: {
          count: count,
          total: total,
        },
        data: dataResponse,
        links: {}
      }
    });
  }
}