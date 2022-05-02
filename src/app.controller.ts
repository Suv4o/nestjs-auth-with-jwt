import { Controller, Get, UseGuards } from '@nestjs/common';
import { OktaGuard } from './guards/okta.guard';
import { Permissions } from './decorators/permissions.decorator';

@Controller()
export class AppController {
  @Get('/hello')
  @Permissions('Read', 'Delete')
  @UseGuards(OktaGuard)
  getHello() {
    return 'Hello World!';
  }
}
