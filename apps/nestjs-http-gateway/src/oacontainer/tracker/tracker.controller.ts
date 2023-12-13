import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateTrackerDto } from '../dtos/create-tracker.dto/create-tracker.dto';

@Controller('tracker')
export class TrackerController {
  private trackerData: any[] = []; // Example: Array to store dummy tracker data

  @Get()
  getTrackerData(): any[] {
    return this.trackerData;
  }

  @Post()
  addTrackerData(@Body(new ValidationPipe()) newData: CreateTrackerDto): string {
    // Example: Assuming newData is an instance of CreateTrackerDto
    this.trackerData.push(newData);
    return 'Tracker data added successfully.';
  }
}
