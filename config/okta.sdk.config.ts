import { Injectable } from '@nestjs/common';

@Injectable()
export class OktaSdkConfig {
  public orgUrl: string = process.env.OKTA_ORG_URL;
  public token: string = process.env.OKTA_TOKEN;
}
