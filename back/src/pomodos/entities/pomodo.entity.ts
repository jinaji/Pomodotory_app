import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pomodos' })
export class PomodoEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pomodoro_num?: number;

  @Column()
  short_break_num?: number;

  @Column()
  long_break_num?: number;

  @Column()
  cycle_num?: number;
}
