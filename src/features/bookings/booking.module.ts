import { Module } from '@nestjs/common';
import { CreateBookingHandler } from './book-seats/book-seats.service';
import { BookSeatRepository } from 'src/infrastructure/repositories/booking/book-seat.repository';
import { CreateBookingController } from './book-seats/book-seats.controller';
import { SeatRepository } from 'src/infrastructure/repositories/seat/seat.repository';
@Module({
  controllers:[CreateBookingController ],
  imports: [],
  providers: [
    CreateBookingHandler,
    SeatRepository,
    BookSeatRepository],
  exports: [],
})
export class BookingModule {}