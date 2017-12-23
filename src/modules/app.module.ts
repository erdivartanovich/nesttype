import { Module } from '@nestjs/common';
import { UserController } from './v1/user.controller';

/**
 * Application IOC container
 * Register All working Controller in Controller key
 * Register All components (services/ repository, factory etc in Components key)
 */
@Module({
  modules: [],
  controllers: [UserController],
  components: [],
})
export class ApplicationModule {}
