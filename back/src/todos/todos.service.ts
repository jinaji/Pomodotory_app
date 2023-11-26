import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
  ) {}

  create(createTodoDto: CreateTodoDto[]) {
    const newTodo = this.todosRepository.create(createTodoDto);
    this.todosRepository.save(newTodo);
    console.log(newTodo);
    return 'This action adds a new todo';
  }

  findAll() {
    return this.todosRepository.find();
  }

  findOne(id: number) {
    this.todosRepository.findOne({ where: { id } });
  }

  update(createdAt: number, updateTodoDto: UpdateTodoDto) {
    if (updateTodoDto.complete === false) {
      updateTodoDto.complete = true;
    } else updateTodoDto.complete = false;
    this.todosRepository.update({ createdAt }, updateTodoDto);
    console.log(this.todosRepository.findOne({ where: { createdAt } }));
  }

  remove(createdAt: number) {
    console.log(this.todosRepository.findOne({ where: { createdAt } }));
    this.todosRepository.delete({ createdAt });
  }
}
