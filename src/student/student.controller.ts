import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponesDto,
  StudentResponesDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponesDto[] {
    return this.studentService.getStudents();
  }
  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studnetID: string,
  ): FindStudentResponesDto {
    return this.studentService.getStudentById(studnetID);
  }
  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponesDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponesDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
