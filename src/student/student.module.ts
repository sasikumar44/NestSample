import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/common/middleWare/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule  {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ValidStudentMiddleware).forRoutes({
  //     path: 'students/:studentId',
  //     method: RequestMethod.GET,
  //   });
  //   consumer.apply(ValidStudentMiddleware).forRoutes({
  //     path: 'students/:studentId',
  //     method: RequestMethod.PUT,
  //   });
  // }
}
