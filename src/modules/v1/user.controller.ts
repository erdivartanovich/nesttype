import { Get, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';

/**
 * User controller
 * the prefix is defined in domain constant
 */
const domain = 'users';
const baseURL = v1BaseUrl(domain);

@Controller(baseURL)
export class UserController {
	@Get()
	getList(): string {
        return 'user index';
    }
}
