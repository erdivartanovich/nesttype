import { IsString, IsNumber, IsInt, IsNotEmpty, IsDefined, IsEmail, IsMobilePhone } from 'class-validator';
import { UserInterface } from './user.interface';
import { BaseDto } from '../../base/contracts/base.dto';

export class createUserDto extends BaseDto implements UserInterface {

    @IsString()
    @IsNotEmpty()
    readonly first_name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    readonly last_name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @IsEmail()
    readonly primary_email: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    readonly primary_phone: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
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