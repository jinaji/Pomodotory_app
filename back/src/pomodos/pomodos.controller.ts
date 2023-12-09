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
  create(@Body() createPomodoDto: CreatePomodoDto[]) {
    console.log('createPomodoDto', createPomodoDto);
    return this.pomodosService.create(createPomodoDto);
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
  update(
    @Param('string') string: string,
    @Body() updatePomodoDto: UpdatePomodoDto,
  ) {
    return this.pomodosService.update(string, updatePomodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pomodosService.remove(+id);
  }
}
