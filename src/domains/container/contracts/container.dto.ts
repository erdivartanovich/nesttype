import { IsString, IsNumber, IsInt, IsNotEmpty, IsDefined, IsEmail, IsMobilePhone } from 'class-validator';
import { ContainerInterface } from './container.interface';
import { BaseDto } from '../../base/contracts/base.dto';

export class ContainerDto extends BaseDto implements ContainerInterface {
}