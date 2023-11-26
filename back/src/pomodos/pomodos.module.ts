import { Module } from '@nestjs/common';
import { PomodosService } from './pomodos.service';
import { PomodosController } from './pomodos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PomodoEntity } from './entities/pomodo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PomodoEntity])],
  controllers: [PomodosController],
  providers: [PomodosService],
})
export class PomodosModule {}
