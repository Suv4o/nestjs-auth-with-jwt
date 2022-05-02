import { Injectable } from '@nestjs/common';
import { OktaSdkConfig } from '../../config/okta.sdk.config';
// const okta = require('@okta/okta-sdk-nodejs');
import { Client } from '@okta/okta-sdk-nodejs';

@Injectable()
export class Okta {
  constructor(private readonly oktaSdkConfig: OktaSdkConfig) {}

  setup() {
    const client = new Client({
      orgUrl: this.oktaSdkConfig.orgUrl,
      token: this.oktaSdkConfig.token,
    });
    return client;
  }
}
