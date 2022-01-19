import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentModule],
  controllers: [StudentController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
