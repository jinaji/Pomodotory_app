import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NumberOfCompletionsService } from './number_of_completions.service';
import { CreateNumberOfCompletionDto } from './dto/create-number_of_completion.dto';
import { UpdateNumberOfCompletionDto } from './dto/update-number_of_completion.dto';

@Controller('number-of-completions')
export class NumberOfCompletionsController {
  constructor(
    private readonly numberOfCompletionsService: NumberOfCompletionsService,
  ) {}

  @Post()
  create(@Body() createNumberOfCompletionDto: CreateNumberOfCompletionDto) {
    return this.numberOfCompletionsService.create(createNumberOfCompletionDto);
  }

  @Get()
  findAll() {
    return this.numberOfCompletionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numberOfCompletionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNumberOfCompletionDto: UpdateNumberOfCompletionDto,
  ) {
    return this.numberOfCompletionsService.update(
      +id,
      updateNumberOfCompletionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numberOfCompletionsService.remove(+id);
  }
}
