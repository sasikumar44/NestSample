import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FindStudentResponesDto {
  id: string;
  name: string;
  teacher: string;
}
export class StudentResponesDto {
  id: string;
  name: string;
  teacher: string;
}
export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  teacher: string;

  @ApiProperty()
  @IsNumber()
  grade: Number;

  @ApiProperty()
  @IsString()
  address: string;
}

export class UpdateStudentDto {
  name: string;
}
