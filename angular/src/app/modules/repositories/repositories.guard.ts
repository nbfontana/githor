import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class RepositoriesGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !!(route.queryParams && route.queryParams.username);
  }

}
