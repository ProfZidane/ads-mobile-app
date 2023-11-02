import { Injectable } from '@angular/core';
import { signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth } from '@angular/fire/auth';
import { Token } from 'src/app/models/Token';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private router: Router) { }


  // Verifier si user connecté
  isAuth() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) { // Verifier si local storage not null
      const token:Token = JSON.parse(local); // transformation string to JSON
      if (token && token.token !== "") {
        return true;
      }
    }
    return false;
  }



  // Obtenir Email 
  getOwnerID() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) {
      const id = JSON.parse(local).email;
      return id
    }

    return "";
  }



  // Déconnexion
  logout() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) { // Si localstorage existe
      localStorage.removeItem('auth-xxx-adv'); // Suppression 
      this.router.navigateByUrl('/'); //  redirection dehors
      signOut(getAuth()); // Déconnexion Firebase
    }
  }
}
