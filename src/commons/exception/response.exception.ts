import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

export class ResponseException extends HttpException {
  constructor(errors: string | object, title: string, status: number) {
    super({errors: errors, title: title}, status);
  }
}