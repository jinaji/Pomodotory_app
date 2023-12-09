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

  async create(name: string, createPomodoDto: CreatePomodoDto[]) {
    const newPomodos = createPomodoDto.map((dto) => {
      const pomodo = this.pomodosRepository.create(dto);
      pomodo.name = name;
      return pomodo;
    });

    const savedPomodos = await this.pomodosRepository.save(newPomodos);
    console.log(savedPomodos);

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
