import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getAllTeachers() {
    const data = await this.teacherService.getTeachers();
    return data;
  }

  @Post()
  async createTeacher(@Body() body: CreateTeacherDto) {
    const data = await this.teacherService.createTeacher(body);
    return { message: 'Post created !!', data };
  }

  @Get('/:teacherId')
  async getTeacherById(@Param('teacherId') teacherId: string) {
    const data = await this.teacherService.getTeacherById(teacherId);
    return data;
  }
}
