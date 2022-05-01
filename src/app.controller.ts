import { Controller, Get, UseGuards } from '@nestjs/common';
import { OktaGuard } from './guards/okta.guard';
import { Claims } from './decorators/claims.decorator';

@Controller()
export class AppController {
  @Get('/hello')
  @Claims('developer', 'admin')
  @UseGuards(OktaGuard)
  getHello() {
    return 'Hello World!';
  }
}
