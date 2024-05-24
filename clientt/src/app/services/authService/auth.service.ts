import { Injectable } from '@angular/core';

import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private backendUrl = 'http://localhost:9001/api';
  private tokenKey: string = 'authToken';
  private userKey: string = 'authUser';

  constructor() { }

  registerUser(userData: { email: string; password: string; firstName: string; lastName: string; }) {
    return axios.post(`${this.backendUrl}/v1/auth/register`, userData);
  }

 /* testBackendConnection() {
    return axios.get(`${this.backendUrl}/test`);
  }*/


  async checkEmailExists(email: string) {
    try {
      const response = await axios.get(`${this.backendUrl}/v1/auth/check-email`, { params: { email } });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.backendUrl}/v1/auth/login`, { email, password });
      const { status, message, data } = response.data;

      if (status) {
        const { token, user } = data;
        localStorage.setItem(this.tokenKey, token);
        localStorage.setItem(this.userKey, JSON.stringify(user));
        return { success: true, data: { token, user } };
      } else {
        return { success: false, message };
      }
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }

  }
  logout(): void {
    // Remove the token and user from localStorage
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem(this.tokenKey);
    return authToken !== null;
  }



  getAuthToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }
  isAdmin(): boolean {
    const user = this.getUser();
    return user && user.role === 'ADMIN';
  }

}
