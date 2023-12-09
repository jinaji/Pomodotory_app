import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  text: string;

  @Column()
  complete: boolean;

  @Column()
  createdAt: number;
}
