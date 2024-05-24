import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "../../services/authService/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private router: Router, private userService: RegisterService) { }


  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
