import { Get, Controller } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { UserService } from './user.service';
import { User } from './user.entity';

/**
 * User controller
 * the prefix is defined in domain constant
 */
const domain = 'users';
const baseURL = v1BaseUrl(domain);

@Controller(baseURL)
export class UserController {
    constructor(private readonly userService: UserService) {}
	@Get()
	findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
