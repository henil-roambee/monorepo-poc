import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../user.interface';

export class CreateUserResponseDto {
  @ApiProperty({ example: 'user_create_success' })
  message: string;
  @ApiProperty({ example: 'abc@xyz.com' })
  email: string;
}
