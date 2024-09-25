import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Seat } from './seat.entity';
import { Movie } from './movie.entity';
@Entity('booking')
export class Booking {
  
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @OneToOne(() => User, (user)=>user.uuid)
  @JoinColumn({ name: 'user_id' })  
  user_id: User;

  @OneToOne(() => Seat, (seat)=>seat.uuid)
  @JoinColumn({ name: 'seat_id' })  
  seat_id: Seat;

  @OneToOne(() => Movie, (movie)=>movie.uuid)
  @JoinColumn({ name: 'movie_id' })  
  movie_id: Movie;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
  
}
