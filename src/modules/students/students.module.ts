import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ Student ])],
      resolvers: [{ 
          DTOClass: StudentDTO, 
          EntityClass: Student,
          CreateDTOClass: CreateStudentInput,
          UpdateDTOClass: UpdateStudentInput,
          enableTotalCount: true,
        }],
    }),
  ],
  providers: [],
})
export class StudentsModule {}
