import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, MinLength,} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'Password123!',
    minLength: 8,
    description: 'The password of the user',
  })
  @IsString()
  @MinLength(8)
  password!: string;
}