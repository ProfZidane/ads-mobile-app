import { Component } from '@angular/core';

import { Firestore, collectionData, collection, doc, getDocs, query } from '@angular/fire/firestore';
import { BaseService } from '../services/auth/base.service';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
color:string = 'blue';
img:string = "url('assets/imgs/ocean-3605547_1280.jpg')";
status = {
  loading: false
};


advertissements:any = [];
querySnapshot: any;
query: any;
uid:any;
  constructor(private firestore: Firestore, private auth: BaseService, private authFireBase: Auth ) {}


  async ionViewDidEnter() {
    await this.getAds();

    this.uid = this.authFireBase.currentUser?.uid;
    
  }


  async getAds() {
    this.status.loading = true;

    this.querySnapshot = await getDocs(collection(this.firestore, 'Ads'));
    console.log(this.querySnapshot);
    this.querySnapshot.forEach((document: any) => {
      console.log(`${document.id} => ${document.data().title}`);
      this.advertissements.push({
        id: document.id,
        title: document.data().title,
        description: document.data().description,
        type: document.data().type,
        photo: document.data().photo,
        owner: document.data().owner,
        created_at: document.data().created_at,
      });

    }); 
    this.status.loading = false;

  }


  logout() {
    this.auth.logout();
  }
  
}
