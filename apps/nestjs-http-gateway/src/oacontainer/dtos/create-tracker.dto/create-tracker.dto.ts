// create-tracker.dto.ts
import { IsString } from 'class-validator';

export class CreateTrackerDto {
  @IsString()
  tracking_type: string;

  @IsString()
  carrier: string;

  @IsString()
  status: string;
}
