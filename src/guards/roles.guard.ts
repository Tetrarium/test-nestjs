import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Roles } from "./roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    console.log(request.headers);
    const user = request.body.user;
    return matchRoles(roles, user.roles);
  }
}

function matchRoles(roles: string[], userRoles: string[]) {
  console.log(roles);
  console.log(userRoles);
  for (let role of roles) {
    if (userRoles.includes(role)) {
      return true;
    }
  }

  throw new UnauthorizedException();
  // return false;
}