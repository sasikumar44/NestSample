import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from 'src/student/student.controller';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentModule, TypeOrmModule.forFeature([Teacher])],
  controllers: [StudentController, StudentTeacherController, TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
