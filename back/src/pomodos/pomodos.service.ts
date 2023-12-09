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

  async create(name: string) {
    if (this.pomodosRepository.findOne({ where: { name: name } }) == null) {
      const newPomodo = this.pomodosRepository.create({
        name: name,
        pomodoro_num: 0,
        short_break_num: 0,
        long_break_num: 0,
        cycle_num: 0,
      });
      await this.pomodosRepository.save(newPomodo);
    } else {
      console.log(name + ' 은 이미 존재합니다.');
    }
    return 'This action adds a new pomodo';
  }

  findAll() {
    return `This action returns all pomodos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pomodo`;
  }

  async update(string: string, name: string) {
    const pomodoToUpdate = await this.pomodosRepository.findOne({
      where: { name: name },
    });
    if (string === 'pomo') {
      pomodoToUpdate.pomodoro_num++;
    } else if (string === 'short') {
      pomodoToUpdate.short_break_num++;
    } else if (string === 'long') {
      pomodoToUpdate.long_break_num++;
    }

    await this.pomodosRepository.update(string, pomodoToUpdate);

    return `This action updates a #${name} pomodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pomodo`;
  }
}
