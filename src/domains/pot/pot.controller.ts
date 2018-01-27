import { Get, Post, Patch, Body, Param, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { PotService } from './pot.service';
import { PotDto } from './contracts/pot.dto';
import { PotInterface } from './contracts/pot.interface';

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
	findAll(): Promise<PotInterface[]> {
        return this.potService.repository.find();
    }

    @Get(':id')
	find(@Param() params): Promise<PotInterface> {
        var id = params.id;
        return this.potService.repository.findOne(id);
    }

     @Post()
     create(@Body() createPotDto: PotDto): Promise<PotInterface>|Object {
        return this.potService.create(createPotDto);
     }

     @Patch(':id')
     update(@Param() params, @Body() updatePotDto: PotDto): Promise<PotInterface>|Object {
        var id = params.id;
        return this.potService.update(id, updatePotDto);
     }

}
