import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../commons/database/database.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  components: [
    ...userProviders,
    UserService
  ],
  exports: [...userProviders],
  controllers: [UserController],
})
export class UserModule {}
