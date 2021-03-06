import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';
import config from 'ormconfig';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [AuthModule, StudentModule, TeacherModule, UsersModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
 