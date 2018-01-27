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
  controllers: [UserController],
})
export class UserModule {}
