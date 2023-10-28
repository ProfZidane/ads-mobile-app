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


  async presentAlert(header:string, message:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: 'Important message',
      message: message,
      buttons: [
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

  async signUp() {
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
        await this.presentAlert("Registery Alert", "Congratulations ! Your account was created. Log in now !")
      }, (e) => {
        console.log(e);        
        this.status.error = true;
        this.status.loading = false;
      }
    );
  }

}
