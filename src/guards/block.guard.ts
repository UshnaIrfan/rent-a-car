import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {BlockRole} from "../enums/block.enum";


@Injectable()
export class BlockGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean
  {

    const requiredRoles = this.reflector.get<BlockRole[]>('roles', context.getHandler());
    if (!requiredRoles)
    {
      return true;
    }



    console.log(requiredRoles)

    const { user } = context.switchToHttp().getRequest();
    console.log(user)
    if (!user)
    {
      throw new ForbiddenException('Forbidden resource');
    }



   console.log(user)


    const hasRequiredRole = requiredRoles.some((role) => user.roles.includes(role));
    if (!hasRequiredRole)
    {
      throw new ForbiddenException(`Only users with the role ${requiredRoles.join(' or ')} are allowed to perform this action`);
    }

    return true;
  }
}
