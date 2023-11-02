import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { BaseService } from 'src/app/services/auth/base.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data:User = {
    email: "",
    password: ""
  };

  // variable pour affichage du loading et erreurs 
  status = {
    loading: false,
    error: false
  };

  constructor(private auth: Auth, private router: Router, private AuthBaseService: BaseService) { }

  ngOnInit() {
    // Verifie si l'utilisateur est déja connecté  
    // si connecté redirection home
    if (this.AuthBaseService.isAuth()) {
      this.router.navigateByUrl('/home');
    }    
  }


  // fonction  connexion
  async login() {
    // initialisation
    this.status.error = false;
    this.status.loading = true;
    
    // sign In 
    await signInWithEmailAndPassword(
       this.auth,
       this.data.email,
       this.data.password
    ).then(
      (s: any) => {
        console.log(s);

        
        const data = {
          _id: s.user.uid,
          email: s.user.email,
          token: s.user.accessToken,
          refreshToken: s.user.refreshToken
        };

        console.log(data);
        // insertion dans localstorage
        // Doit être chiffrer plus tard
        localStorage.setItem('auth-xxx-adv', JSON.stringify(data)); // json to string

        // redirection home
        this.router.navigateByUrl('/home');
      }, (e) => {
        console.log(e);

        // Activation error et désactivation loading
        this.status.error = true;
        this.status.loading = false;
      }
    );
  }


}
