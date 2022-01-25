import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../teacher/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

 async getTeachers() {
  return await this.teacherRepository.find();
}

async  getTeacherById(teacherId: string) {
  const teacher = await this.teacherRepository.findOne(teacherId);
  return teacher;
}

async createTeacher(payload: CreateTeacherDto) {
  const student = this.teacherRepository.create(payload);
  return await this.teacherRepository.save(student);
}
}