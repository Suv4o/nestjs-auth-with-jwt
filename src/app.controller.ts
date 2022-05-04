import { Controller, Get, UseGuards } from '@nestjs/common';
import { OktaGuard } from './guards/okta.guard';
import { Permissions } from './decorators/permissions.decorator';

@Controller()
export class AppController {
  @Get('/morning')
  @Permissions('ADMIN', 'USER')
  @UseGuards(OktaGuard)
  getMorning() {
    return 'Good Morning!';
  }

  @Get('/afternoon')
  @Permissions('DEVELOPER')
  @UseGuards(OktaGuard)
  getAfternoon() {
    return 'Good Afternoon!';
  }

  @Get('/evening')
  getEvening() {
    return 'Good Evening!';
  }
}
