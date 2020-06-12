import { Module } from '@nestjs/common';
import { VaubanModule } from './vauban/vauban.module';

@Module({
  imports: [VaubanModule],
})
export class AppModule {}
