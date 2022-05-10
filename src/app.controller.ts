import { Controller, Get } from '@nestjs/common';
import { Auth } from './decorators/auth.decorator';

@Controller()
export class AppController {
  @Get('/morning')
  @Auth('ADMIN', 'USER')
  getMorning() {
    return 'Good Morning!';
  }

  @Get('/afternoon')
  @Auth('ADMIN')
  getAfternoon() {
    return 'Good Afternoon!';
  }

  @Get('/evening')
  getEvening() {
    return 'Good Evening!';
  }
}
