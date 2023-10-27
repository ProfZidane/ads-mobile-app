import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

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

constructor(private auth: Auth) { }

  ngOnInit() {
  }


  async signUp() {
    await createUserWithEmailAndPassword(
      this.auth,
      this.data.email,
      this.data.password
    ).then(
      (s) => {
        console.log(s);
        
      }, (e) => {
        console.log(e);
        
      }
    );
  }

}
