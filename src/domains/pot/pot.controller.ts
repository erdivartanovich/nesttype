import { Get, Post, Patch, Body, Param, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { PotService } from './pot.service';
import { Pot } from './pot.entity';
import { PotDto } from './dto/pot.dto';

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
	findAll(): Promise<Pot[]> {
        return this.potService.findAll();
    }

    @Get(':id')
	find(@Param() params): Promise<Pot> {
        var id = params.id;
        return this.potService.find(id);
    }

     @Post()
     create(@Body() createPotDto: PotDto): Promise<Pot>|Object {
        return this.potService.create(createPotDto);
     }

     @Patch(':id')
     update(@Param() params, @Body() updatePotDto: PotDto): Promise<Pot>|Object {
         var id = params.id;
        return this.potService.update(id, updatePotDto);
     }

}
