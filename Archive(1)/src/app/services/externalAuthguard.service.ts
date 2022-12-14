import {Injectable} from '@angular/core';
import {Router, CanActivate, CanDeactivate, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable()
export class ExternalAuthguardService implements CanActivate, CanDeactivate<CanComponentDeactivate> {
    constructor(
        public router: Router
    ) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
    }

    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('accessToken');
        return !!token;
    }
}
