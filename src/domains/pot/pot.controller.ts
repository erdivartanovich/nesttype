import { Get, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { PotService } from './pot.service';
import { Pot } from './pot.entity';

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
}
