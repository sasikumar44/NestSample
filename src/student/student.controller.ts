import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  async getStudents() {
    const data = await this.studentService.getStudents();
    return data;
  }

  @Get('/:studentId')
  async getStudentById(@Param('studentId') studentId: string) {
    const data = await this.studentService.getStudentById(studentId);
    return data;
  }

  @Post()
  async createStudent(@Body() body: CreateStudentDto) {
    const data = await this.studentService.createStudent(body);
    return { message: 'Post created !!', data };
  }

  @Put('/:studentId')
  async updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    let data = await this.studentService.updateStudent(studentId, body);
    return { message: 'updated student data', data };
  }

  @Delete('/:studentId')
  async deleteStudent(@Param('studentId') studentId: string) {
    const data = await this.studentService.deleteStudent(studentId);
    return { message: 'Student Removed', data };
  }
}
