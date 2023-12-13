import { Module } from '@nestjs/common';
import { TrackerController } from './tracker/tracker.controller';
import { TrackerService } from './tracker/tracker.service';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService]
})
export class OacontainerModule {}
