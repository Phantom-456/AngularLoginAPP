import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const allowedRoles = next.data['roles'] as string[]; // Get the allowed roles from the route's data

    return this.authService.isAuthenticated().then(authenticated => {
      if (authenticated && allowedRoles.includes(this.authService.getUserRole())) {
        return true; // User is authenticated and has the required role
      }

      // Redirect to unauthorized access page or show an error message
      this.router.navigate(['/unauthorized-access']);
      return false;
    });
  }
}
