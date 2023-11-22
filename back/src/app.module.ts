import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumberOfCompletionsModule } from './number_of_completions/number_of_completions.module';
import { NumberOfCompletionsController } from './number_of_completions/number_of_completions.controller';
import { NumberOfCompletionsService } from './number_of_completions/number_of_completions.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NumberOfCompletionsModule,
    TodosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'pomodotory',
      synchronize: true,
    }),
    TodosModule,
  ],
  controllers: [AppController, NumberOfCompletionsController],
  providers: [AppService, NumberOfCompletionsService],
})
export class AppModule {}
