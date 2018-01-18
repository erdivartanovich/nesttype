import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../commons/database.module';
import { potProviders } from './pot.providers';
import { PotService } from './pot.service';
import { PotController } from './pot.controller';

@Module({
  imports: [DatabaseModule],
  components: [
    ...potProviders,
    PotService
  ],
  controllers: [PotController],
})
export class PotModule {}
