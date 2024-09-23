import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, Generated, ManyToOne } from 'typeorm';
import { Movie } from './movie.entity';
@Entity('seat')
export class Seat {
  
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  @Generated('increment')
  seat_no: number;

  @Column({default:true})
  is_available: boolean

  @ManyToOne(() => Movie, (movie)=>movie.uuid)
  @JoinColumn({ name: 'movie_id' })  
  movie_id: Movie;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
