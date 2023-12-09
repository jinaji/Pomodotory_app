import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pomodos' })
export class PomodoEntity {
  @PrimaryColumn()
  id: number;

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
