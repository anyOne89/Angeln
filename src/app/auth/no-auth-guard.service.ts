import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../core/services/user.service';
import {map, take} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }


    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const isLoggedIn = this.userService.isLoggedIn.pipe(take(1), map(isAuth => !isAuth));

        if (isLoggedIn) {
            this.router.navigate(['/tabs']).then(res => {
            });
        }

        return isLoggedIn;
    }

}
