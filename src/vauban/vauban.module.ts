import { Module } from '@nestjs/common';
import { VaubanController } from './vauban.controller';
import { VaubanService } from './vauban.service';

@Module({
  controllers: [VaubanController],
  providers: [VaubanService]
})
export class VaubanModule {}
