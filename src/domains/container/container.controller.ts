import { Get, Post, Patch, Body, Param, Controller, Query } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { BaseEntityInterface } from '../base/contracts/base-entity.interface';
import { ContainerDto } from './contracts/container.dto';
import { ContainerService } from './container.service';
import { queryParams } from '../../commons/transformer/query.parameter';

/**
 * Container controller
 * the prefix is defined in domain constant
 */
const domain = 'containers';
const baseURL = v1BaseUrl(domain);

@Controller(baseURL)
export class ContainerController  {
    constructor(readonly service: ContainerService) {}

	@Get()
	findAll(@Query() query): Promise<BaseEntityInterface[]> {
        const options = queryParams(query);
        return this.service.find(options);
    }

    @Get(':id')
	find(@Param() params, @Query() query): Promise<BaseEntityInterface> {
        const id = params.id;
        const options = queryParams(query);
        return this.service.findOne(id, options);
    }

    @Post()
     create(@Body() containerDto: ContainerDto): Promise<BaseEntityInterface>{
        return this.service.create(containerDto)
    }

}
