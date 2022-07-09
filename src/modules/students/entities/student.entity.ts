import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Student {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  name: string;

  @Column()
  key: string;
  
}
