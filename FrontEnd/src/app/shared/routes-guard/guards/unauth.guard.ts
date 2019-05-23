import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PerdoruesApi } from '../../sdk/services/custom';

@Injectable()
export class UnauthGuard implements CanActivate {
    constructor(
        private _auth: PerdoruesApi,
        private _router: Router) { }

    canActivate() {
        if (!this._auth.isAuthenticated()) return true;
        this._router.navigate(['/main/home']);
        return false;
    }
}
