import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { OktaGuard } from '../guards/okta.guard';
import { Permissions } from '../decorators/permissions.decorator';

export function Auth(...permissions: string[]) {
  return applyDecorators(
    SetMetadata('permissions', permissions),
    UseGuards(OktaGuard),
  );
}
