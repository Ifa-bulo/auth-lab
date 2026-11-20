import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, MinLength,MaxLength,} from 'class-validator';


export class RegisterDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'Password123!',
    minLength: 8,
    maxLength: 64,
    description: 'The password of the user',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  password!: string;
}