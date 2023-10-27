import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private router: Router) { }


  isAuth() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) {
      const token:Token = JSON.parse(local);
      if (token && token.token !== "") {
        return true;
      }
    }
    return false;
  }


  getOwnerID() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) {
      const id = JSON.parse(local)._id;
      return id
    }

    return "";
  }


  logout() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) {
      localStorage.removeItem('auth-xxx-adv');
      this.router.navigateByUrl('/');
    }
  }
}
