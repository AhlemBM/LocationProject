import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    // Ajouter votre logique de déconnexion ici (par exemple, supprimer le token, etc.)
    this.router.navigate(['/login']);
  }
}
