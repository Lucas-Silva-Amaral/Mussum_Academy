import { FilterableField } from "@nestjs-query/query-graphql";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentDTO {
  @Field()
  id: String;

  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
  
}
