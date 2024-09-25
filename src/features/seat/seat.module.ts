import { Module } from '@nestjs/common';
import { ListAllSeatsController } from './list-seat/list-seats.controller';
import { ListAllSeatsHandler } from './list-seat/list-seats.service';
import { SeatRepository } from 'src/infrastructure/repositories/seat/seat.repository';
@Module({
  controllers:[ListAllSeatsController ],
  imports: [],
  providers: [
    ListAllSeatsHandler,
    SeatRepository],
  exports: [],
})
export class SeatModule {}