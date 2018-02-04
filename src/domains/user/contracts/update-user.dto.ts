import { IsString, IsNumber, IsInt, IsNotEmpty, IsDefined, IsEmail, IsMobilePhone } from 'class-validator';
import { UserInterface } from './user.interface';
import { BaseDto } from '../../base/contracts/base.dto';

export class updateUserDto extends BaseDto implements UserInterface {

    @IsString()
    readonly first_name: string;

    @IsString()
    readonly last_name: string;

    @IsString()
    @IsEmail()
    readonly primary_email: string;

    @IsString()
    readonly primary_phone: string;

    @IsString()
    readonly user_name: string;

    @IsString()
    readonly status: string;

    @IsString()
    readonly birth_date: number;

    @IsString()
    readonly gender: string;

    @IsString()
    readonly profile_photo: string;

    @IsInt()
    readonly auth_type: number;

    readonly relations: Object;

}