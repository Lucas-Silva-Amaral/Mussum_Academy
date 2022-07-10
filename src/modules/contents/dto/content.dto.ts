import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';


@ObjectType('Content')
export class ContentDTO extends BaseDTO {
  @FilterableField()
  description: string;

  @FilterableField()
  linkContent: string;
}
