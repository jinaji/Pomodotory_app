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

  @Post(':name')
  create(@Param() name: string) {
    console.log(name);
    return this.pomodosService.create(name);
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
  update(@Param('string') string: string, @Body() name: string) {
    console.log(string, name);
    return this.pomodosService.update({ string, name });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pomodosService.remove(+id);
  }
}
