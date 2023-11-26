import { PartialType } from '@nestjs/mapped-types';
import { CreatePomodoDto } from './create-pomodo.dto';

export class UpdatePomodoDto extends PartialType(CreatePomodoDto) {
  pomodoro_num?: number;
  short_break_num?: number;
  long_break_num?: number;
  cycle_num?: number;
}
