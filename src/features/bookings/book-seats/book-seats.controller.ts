import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { handleError } from "src/infrastructure/exception/custom-exception";
import { CreateMovieCommand } from "./book-seats.dto";
import { CreateMovieHandler } from "./book-seats.service";

@Controller('/')
export class CreateMovieController {
  constructor(
     private readonly createMovieHandler: CreateMovieHandler, 
  ) {}

  @Post('create-movie')
  public async handle(
    @Body() body: CreateMovieCommand,
    @Res() res: Response,
  ) {
    try {
      const response =await this.createMovieHandler.handle(body)
      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      console.log('Error during creating movie', error);
      return handleError(res, error);
    }
  }
}