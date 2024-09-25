import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { handleError } from "src/infrastructure/exception/custom-exception";
import { CreateBookingHandler } from "./book-seats.service";
import { CreateBookSeatCommand } from "./book-seats.dto";

@Controller('/')
export class CreateBookingController {
  constructor(
     private readonly CreateBookingHandler: CreateBookingHandler, 
  ) {}

  @Post('book-seat')
  public async handle(
    @Body() body: CreateBookSeatCommand,
    @Res() res: Response,
  ) {
    try {
      const response =await this.CreateBookingHandler.handle(body)
      console.log('response: ', response);
      return res.status(HttpStatus.OK).json(response);
    } catch (error) {
      console.log('Error during creating movie', error);
      return handleError(res, error);
    }
  }
}