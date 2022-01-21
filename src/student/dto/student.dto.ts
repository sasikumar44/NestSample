export class FindStudentResponesDto {
  id: string;
  name: string;
  teacher: string;
}
export class StudentResponesDto {
  id: string;
  name: string;
  teacher: string;
}
export class CreateStudentDto {
  name: string;
  teacher: string;
  grade: string;
  address: string;
}

export class UpdateStudentDto {
  name: string;
}
