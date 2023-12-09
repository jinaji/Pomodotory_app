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

  async create(data: { name: string } | any) {
    const name = typeof data === 'string' ? data : data?.name;

    if ((await this.pomodosRepository.findOne({ where: { name } })) === null) {
      const newPomodo = this.pomodosRepository.create({
        name,
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

  async update(data: { string: string; name: string } | any) {
    const name = typeof data === 'string' ? data : data?.name;

    console.log(name);

    const pomodoToUpdate = await this.pomodosRepository.findOne({
      where: { name: name },
    });

    console.log(pomodoToUpdate);

    if (data.string === 'pomo') {
      pomodoToUpdate.pomodoro_num++;
    } else if (data.string === 'short') {
      pomodoToUpdate.short_break_num++;
    } else if (data.string === 'long') {
      pomodoToUpdate.long_break_num++;
    }

    await this.pomodosRepository.update(data.string, pomodoToUpdate);

    return `This action updates a #${name} pomodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pomodo`;
  }
}
