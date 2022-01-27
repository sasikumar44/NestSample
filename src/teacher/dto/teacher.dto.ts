import { ApiProperty } from "@nestjs/swagger";

export class FindTeacherResponseDto {
  id: string;
  name: string;
}
export class CreateTeacherDto {
  @ApiProperty()
  name:string;
}
