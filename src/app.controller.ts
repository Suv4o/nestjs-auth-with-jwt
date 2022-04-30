import { Controller, Get, UseGuards } from '@nestjs/common';
import { OktaGuard } from './guards/okta.guard';

@Controller()
@UseGuards(OktaGuard)
export class AppController {
  @Get('/hello')
  getHello() {
    return 'Hello World!';
  }
}
