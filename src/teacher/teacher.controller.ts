import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getAllTeachers() {
    const data = await this.teacherService.getTeachers();
    return data;
  }
  @Get('/:teacherId')
  async getTeacherById(@Param('teacherId') teacherId: string) {
    const data = await this.teacherService.getTeacherById(teacherId);
    return data;
  }
}
