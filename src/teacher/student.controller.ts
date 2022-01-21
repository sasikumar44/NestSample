import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import {
  FindStudentResponesDto,
  StudentResponesDto,
  UpdateStudentDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents(@Param('teacherId') teacherId: string) {
    return this.studentService.getStudentByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentteacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponesDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
