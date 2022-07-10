import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Lesson')
export class LessonDTO extends BaseDTO {

  @FilterableField()
  description: string;
}
