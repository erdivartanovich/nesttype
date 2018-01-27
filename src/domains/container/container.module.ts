import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../commons/database/database.module';
import { containerProviders } from './container.providers';
import { ContainerService } from './container.service';
import { ContainerController } from './container.controller';

@Module({
  imports: [DatabaseModule],
  components: [
    ...containerProviders,
    ContainerService
  ],
  controllers: [ContainerController],
})
export class ContainerModule {}
