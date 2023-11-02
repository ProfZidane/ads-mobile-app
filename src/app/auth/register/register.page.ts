import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
data:User = {
  email: "",
  password: ""
};

status = {
  loading: false,
  error: false
};

constructor(private auth: Auth, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }


  // fonction affichage alert
  async presentAlert(header:string, message:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: 'Important message',
      message: message,
      buttons: [ // bouton OK avec fonction redirection login
        {
          text: "OK",
          handler: () => {
            this.router.navigateByUrl('/login');
          }
        }
      ],
    });

    await alert.present();
  }


  // fonction inscription
  async signUp() {

    // Initialisation
    this.status.loading = true;
    this.status.error = false;

    await createUserWithEmailAndPassword(
      this.auth,
      this.data.email,
      this.data.password
    ).then(
      async (s) => {
        console.log(s);        
        this.status.loading = false;

        // Affichage Message
        await this.presentAlert("Registery Alert", "Congratulations ! Your account was created. Log in now !")
      }, (e) => {
        console.log(e);       
        
        // Affichage erreur + stop loading
        this.status.error = true;
        this.status.loading = false;
      }
    );
  }

}
