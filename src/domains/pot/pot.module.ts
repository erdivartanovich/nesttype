import { Module } from '@nestjs/common';
import { PotService } from './pot.service';
import { PotController } from './pot.controller';

@Module({
  components: [PotService],
  controllers: [PotController],
})
export class PotModule {}
