import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  complete: boolean;
}
