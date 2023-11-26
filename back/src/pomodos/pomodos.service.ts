import { Injectable } from '@nestjs/common';
import { CreatePomodoDto } from './dto/create-pomodo.dto';
import { UpdatePomodoDto } from './dto/update-pomodo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PomodoEntity } from './entities/pomodo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PomodosService {
  constructor(
    @InjectRepository(PomodoEntity)
    private pomodosRepository: Repository<PomodoEntity>,
  ) {}

  create(createPomodoDto: CreatePomodoDto[]) {
    const newPomodo = this.pomodosRepository.create(createPomodoDto);
    this.pomodosRepository.save(newPomodo);
    console.log(newPomodo);
    return 'This action adds a new pomodo';
  }

  findAll() {
    return `This action returns all pomodos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pomodo`;
  }

  update(name: string, string: string, updatePomodoDto: UpdatePomodoDto) {
    if (string === 'pomodoro') {
      updatePomodoDto.pomodoro_num++;
    } else if (string === 'short') {
      updatePomodoDto.short_break_num++;
    } else if (string === 'long') {
      updatePomodoDto.long_break_num++;
    }

    // if (
    //   updatePomodoDto.pomodoro_num ===
    //   this.pomodosRepository.findOne({ name: string }).short_break_num
    // ) {
    //   updatePomodoDto.cycle_num++;
    // }

    this.pomodosRepository.update({ name: string }, updatePomodoDto);

    return `This action updates a #${name} pomodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pomodo`;
  }
}
