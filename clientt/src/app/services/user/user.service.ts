import { Injectable } from '@angular/core';
import axios from "axios";
import {RegisterService} from "../authService/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl = 'http://localhost:9001/api/v1/user';
  constructor(private authService: RegisterService) { }
  private tokenKey: string = 'authToken';
  private userKey: string = 'authUser';
  getUsers(): Promise<any> {
    const token = this.authService.getAuthToken();
    if (!token) {
      return Promise.reject('No token found');
    }

    return axios.get<any>(`${this.backendUrl}/getALL`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  isLoggedIn(): boolean {
    // Récupérer le jeton d'authentification depuis le stockage local (localStorage)
    const authToken = localStorage.getItem(this.tokenKey);

    // Vérifier si le jeton est présent et valide
    if (authToken) {
      // Vérifier si le jeton est expiré ou non
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (tokenExpiration && new Date(tokenExpiration) > new Date()) {
        // Le jeton est présent et non expiré, l'utilisateur est connecté
        console.log("true");
        return true;
      } else {
        // Le jeton est expiré, déconnecter l'utilisateur et renvoyer false
        this.logout();
        console.log("false");
        return false;
      }
    } else {
      // Aucun jeton trouvé, l'utilisateur n'est pas connecté
      console.log("false2");
      return false;
    }
  }
  logout(): void {
    // Remove the token and user from localStorage
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}
