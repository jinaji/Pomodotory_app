import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pomodos' })
export class PomodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, collation: 'utf8mb4_unicode_ci' })
  name?: string;

  @Column()
  pomodoro_num?: number;

  @Column()
  short_break_num?: number;

  @Column()
  long_break_num?: number;

  @Column()
  cycle_num?: number;
}

// 25분 공부 -> 5분 휴식 * 4번 반복 -> 30분 휴식
