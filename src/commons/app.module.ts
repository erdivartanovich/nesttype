import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../domains/user/user.module';
import { PotModule } from '../domains/pot/pot.module';
import { ContainerModule } from '../domains/container/container.module';

/**
 * Application IOC container
 * Register All working Controller in Controller key
 * Register All components (services/ repository, factory etc in Components key)
 */
@Module({
  modules: [
    UserModule, 
    ContainerModule,
    PotModule,
  ],
})
export class ApplicationModule {}
