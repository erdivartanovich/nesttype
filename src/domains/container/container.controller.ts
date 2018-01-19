import { Get, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { ContainerService } from './container.service';
import { Container } from './container.entity';

/**
 * Container controller
 * the prefix is defined in domain constant
 */
const domain = 'containers';
const baseURL = v1BaseUrl(domain);

@Controller(baseURL)
export class ContainerController {
    constructor(private readonly containerService: ContainerService) {}
	@Get()
	findAll(): Promise<Container[]> {
        return this.containerService.findAll();
    }
}
