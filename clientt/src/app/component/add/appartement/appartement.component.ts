import { Component } from '@angular/core';
import {AppartementService} from "../../../services/appartementService/appartement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  name: string = '';
  addresse: string = '';
  fraisMenage: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private appartementService: AppartementService, private router: Router) { }

  onSubmit(): void {
    this.appartementService.createAppartement(this.name, this.addresse, this.fraisMenage)
      .then(response => {

        if ( response.data.status==true) {
          this.router.navigate(['liste-appartement']); // Exemple de redirection
          this.successMessage = 'Appartement successfully created.';
          // Redirection ou autres actions après création réussie
        } else {
          console.log("err test")
          this.errorMessage = 'Appartement cannot be created. Please try again.';
        }
      })
      .catch(error => {
        console.log('Erreur:', error); // Log complet de l'erreur
        this.errorMessage = 'An error occurred. Please try again.';
      });
  }

}
