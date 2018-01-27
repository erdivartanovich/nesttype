import { Get, Post, Patch, Body, Param, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { PotDto } from './contracts/pot.dto';
import { BaseEntityInterface } from '../base/contracts/base-entity.interface';
import { PotService } from './pot.service';

/**
 * Pot controller
 * the prefix is defined in domain constant
 */
const domain = 'pots';
const baseURL = v1BaseUrl(domain);

@Controller(baseURL)
export class PotController {
    constructor(private readonly potService: PotService) {}

	@Get()
	findAll(): Promise<BaseEntityInterface[]> {
        return this.potService.repository.find();
    }

    @Get(':id')
	find(@Param() params): Promise<BaseEntityInterface> {
        var id = params.id;
        return  this.potService.repository.findOne(id);
    }

     @Post()
     create(@Body() createPotDto: PotDto): Promise<BaseEntityInterface>{
        return this.potService.create(createPotDto);
     }

     @Patch(':id')
     update(@Param() params, @Body() updatePotDto: PotDto): Promise<BaseEntityInterface>{
        var id = params.id;
        return this.potService.update(id, updatePotDto);
     }

}
