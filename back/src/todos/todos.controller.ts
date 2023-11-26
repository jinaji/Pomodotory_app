import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto[]) {
    console.log('createTodoDto', createTodoDto);
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Patch(':createdAt')
  update(
    @Param('createdAt') createdAt: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todosService.update(+createdAt, updateTodoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.todosService.remove(+id);

  @Delete(':createdAt')
  remove(@Param('createdAt') createdAt: string) {
    return this.todosService.remove(+createdAt);
  }
}
