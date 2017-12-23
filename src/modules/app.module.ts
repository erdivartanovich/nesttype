import { Module } from '@nestjs/common';
import { UserController } from './v1/user.controller';

@Module({
  modules: [],
  controllers: [UserController],
  components: [],
})
export class ApplicationModule {}
