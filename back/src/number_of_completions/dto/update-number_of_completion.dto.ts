import { PartialType } from '@nestjs/mapped-types';
import { CreateNumberOfCompletionDto } from './create-number_of_completion.dto';

export class UpdateNumberOfCompletionDto extends PartialType(
  CreateNumberOfCompletionDto,
) {}
