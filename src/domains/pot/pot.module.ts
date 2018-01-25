import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../commons/database/database.module';
import { ContainerModule } from '../container/container.module';
import { potProviders } from './pot.providers';
// import { containerProviders } from '../container/container.providers';
import { PotService } from './pot.service';
import { PotController } from './pot.controller';

@Module({
  imports: [DatabaseModule, ContainerModule],
  components: [
    ...potProviders,
    PotService
  ],
  controllers: [PotController],
})
export class PotModule {}
