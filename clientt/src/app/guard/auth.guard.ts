import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {RegisterService} from "../services/authService/auth.service";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: RegisterService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Autorise l'accès si l'utilisateur est connecté
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      return false;
    }
  }
};
