import { BaseServiceInterface } from './contracts/base-service.interface';
import { BaseRepositoryInterface } from './contracts/base-repository.interface';
import { ResponseException } from '../../commons/exception/response.exception';
import { HttpStatus } from '@nestjs/common';

export class BaseService implements BaseServiceInterface {

    public repository: BaseRepositoryInterface;

    async create(dto: Object) {
        const entity = this.repository.create();
        for (const key in dto) {
            entity[key] = dto[key];
        }
        return await this.repository.save(entity);
    }

    async update(id: string, dto: Object) {
        return await this.repository.findOneOrFail(id)
        .then(entity => {
            for (const key in dto) {
                if (entity.hasOwnProperty(key)) {
                    entity[key] = dto[key];
                }
            }
            return this.repository.save(entity);
        })
        .catch(error => {
            throw new ResponseException(error.message, error.name, HttpStatus.BAD_REQUEST);
        });
    }
}