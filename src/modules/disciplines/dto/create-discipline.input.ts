import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDisciplineInput {
  name: number;
}
