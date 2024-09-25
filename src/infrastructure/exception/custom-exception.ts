import { Response } from "express";
import { HttpException, HttpStatus } from '@nestjs/common';
export class UnavailabeSeat extends HttpException {
  constructor(
    message: string = 'Respective seat no. is under process',
    status: HttpStatus = HttpStatus.BAD_REQUEST
  ) {
    super(message, status);
  }
}
export function handleError(res: Response, error) {
    return res
      .status(error?.status ?? HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.message ?? 'Internal Server Error' });
}