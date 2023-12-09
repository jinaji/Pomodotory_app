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

  async update(createdAt: number, updateTodoDto: UpdateTodoDto) {
    const todoToUpdate = await this.todosRepository.findOne({
      where: { createdAt },
    });

    if (todoToUpdate) {
      if (todoToUpdate.complete === undefined) {
        todoToUpdate.complete = true;
      } else if (todoToUpdate.complete === true) {
        todoToUpdate.complete = false;
      } else if (todoToUpdate.complete === false) {
        todoToUpdate.complete = true;
      }
      await this.todosRepository.update({ createdAt }, todoToUpdate);
      console.log(todoToUpdate);
    } else {
      console.log(`TodoEntity with createdAt ${createdAt} not found.`);
    }
  }

  remove(createdAt: number) {
    console.log(this.todosRepository.findOne({ where: { createdAt } }));
    this.todosRepository.delete({ createdAt });
  }
}
