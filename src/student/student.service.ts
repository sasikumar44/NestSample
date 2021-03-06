import { Injectable, Post } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentResponesDto,
  StudentResponesDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { Teacher } from '../teacher/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    // @InjectRepository(Teacher)
    private readonly studentRepository: Repository<Student>,
    // private readonly teacherRepository: Repository<Teacher>,
  ) {}

  students = students;
  async getStudents() {
    return await this.studentRepository.find();
  }

  async getStudentById(studentId: string) {
    const student = await this.studentRepository.findOne(studentId);
    return student;
  }

  async createStudent(payload: CreateStudentDto) {
    const student = this.studentRepository.create(payload);
    return await this.studentRepository.save(student);
  }

  async updateStudent(studentId: string, payload: UpdateStudentDto) {
    const student = await this.getStudentById(studentId);
    const editedStudent = Object.assign(student, payload);
    return await this.studentRepository.save(editedStudent);
  }

  async deleteStudent(studentId: string) {
    const student = await this.getStudentById(studentId);
    return await this.studentRepository.remove(student);
  }

  async getStudentByTeacherId(teacherId: string) {
    const student = await this.studentRepository.find();

    const query = this.studentRepository
      .createQueryBuilder('students')
      .where('students.teacher = :id', { id: teacherId })
      .getMany();
    return query;
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponesDto {
    let updatedStudent: StudentResponesDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
