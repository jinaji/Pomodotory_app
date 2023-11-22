import { Injectable } from '@nestjs/common';
import { CreateNumberOfCompletionDto } from './dto/create-number_of_completion.dto';
import { UpdateNumberOfCompletionDto } from './dto/update-number_of_completion.dto';

@Injectable()
export class NumberOfCompletionsService {
  private readonly numberOfCompletions: CreateNumberOfCompletionDto[] = [];
  private id = 0;

  create(createNumberOfCompletionDto: CreateNumberOfCompletionDto) {
    this.id++;
    return 'This action adds a new numberOfCompletion';
  }

  findAll() {
    return [...this.numberOfCompletions];
  }

  findOne(id: number) {
    return `This action returns a #${id} numberOfCompletion`;
  }

  update(id: number, updateNumberOfCompletionDto: UpdateNumberOfCompletionDto) {
    return `This action updates a #${id} numberOfCompletion`;
  }

  remove(id: number) {
    return `This action removes a #${id} numberOfCompletion`;
  }
}
