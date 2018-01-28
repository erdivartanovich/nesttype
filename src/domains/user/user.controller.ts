import { Get, Post, Patch, Body, Param, Controller, Query } from '@nestjs/common';
import { v1BaseUrl } from '../../config/app.';
import { BaseEntityInterface } from '../base/contracts/base-entity.interface';
import { UserService } from './user.service';
import { createUserDto } from './contracts/create-user.dto';
import { updateUserDto } from './contracts/update-user.dto';
import { queryParams } from '../base/contracts/query.options';
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
	findAll(@Query() query): Promise<BaseEntityInterface[]> {
        const options = queryParams(query);
        return this.userService.find(options);
    }

    @Get(':id')
	find(@Param() params): Promise<BaseEntityInterface> {
        var id = params.id;
        return this.userService.repository.findOne(id);
    }

    @Post()
     create(@Body() userDto: createUserDto): Promise<BaseEntityInterface>{
        return this.userService.create(userDto)
     }

     @Patch(':id')
     update(@Param() params, @Body() userDto: updateUserDto): Promise<BaseEntityInterface>{
        var id = params.id;
        return this.userService.update(id, userDto);
     }
}
