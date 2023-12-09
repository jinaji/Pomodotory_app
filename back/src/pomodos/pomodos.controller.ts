import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PomodosService } from './pomodos.service';
import { CreatePomodoDto } from './dto/create-pomodo.dto';
import { UpdatePomodoDto } from './dto/update-pomodo.dto';

@Controller('pomodos')
export class PomodosController {
  constructor(private readonly pomodosService: PomodosService) {}

  @Post()
  create(@Param() name: string, @Body() createPomodoDto: CreatePomodoDto[]) {
    console.log('createPomodoDto', createPomodoDto);
    return this.pomodosService.create(name, createPomodoDto);
  }

  @Get()
  findAll() {
    return this.pomodosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pomodosService.findOne(+id);
  }

  @Patch(':string')
  update(@Param('string') string: string, @Param() name: string) {
    return this.pomodosService.update(name, string);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pomodosService.remove(+id);
  }
}
