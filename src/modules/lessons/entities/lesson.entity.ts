import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @Column()
  description: string;
}
