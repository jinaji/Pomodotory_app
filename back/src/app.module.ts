import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PomodosModule } from './pomodos/pomodos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'pomodotory',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TodosModule,
    PomodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
