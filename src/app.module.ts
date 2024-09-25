import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './features/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSourceOptions } from 'ormconfig';
import { MovieModule } from './features/movie/movie.module';
import { BookingModule } from './features/bookings/booking.module';
import { SeatModule } from './features/seat/seat.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        dataSourceOptions(configService),
      inject: [ConfigService],
    }),
    UsersModule,
    MovieModule,
    BookingModule,
    SeatModule
  ],
})
export class AppModule {}
