import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any[] = [];
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers()
      .then(response => {
        console.log(response)
        if (response.data.status) {
          console.log("users ")
          this.users = response.data.data.users;
        } else {
          this.errorMessage = 'Erreur lors de la récupération des utilisateurs.';
        }
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      });
  }

  goToAddUser(): void {
    this.router.navigate(['register']);
  }
}
