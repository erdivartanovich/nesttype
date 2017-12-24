import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

/**
 * Application IOC container
 * Register All working Controller in Controller key
 * Register All components (services/ repository, factory etc in Components key)
 */
@Module({
  modules: [TypeOrmModule.forRoot([User]), UserModule],
})
export class ApplicationModule {}
