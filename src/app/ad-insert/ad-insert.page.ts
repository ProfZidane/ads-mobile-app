import { Component, OnInit } from '@angular/core';
import { Ads } from '../models/Ads';
import { BaseService } from '../services/auth/base.service';


import { Firestore, setDoc, doc, collection } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Types } from '../datas/Types';


@Component({
  selector: 'app-ad-insert',
  templateUrl: './ad-insert.page.html',
  styleUrls: ['./ad-insert.page.scss'],
})
export class AdInsertPage implements OnInit {
ad: Ads = {
  title: "",
  description: "",
  type: "",
  photo: "",
  owner: "",
  created_at: new Date().toLocaleDateString()
};

status = {
  loading: false
};

types!:Array<string>;

  constructor(private AuthBaseService: BaseService, private firestore: Firestore, private toastController: ToastController) { }


  ngOnInit(): void {
    
  }


  ionViewDidEnter() {
    this.types = Types; // Stocker les types 
  }

 // Affichage d'1 toast message
  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color
    });

    await toast.present();
  }


  // Insertion d'annonce
  async saveAd() {
    this.status.loading = true;


    // Récuperer l'id de l'user
    this.ad.owner = this.AuthBaseService.getOwnerID();
    console.log(this.ad);

    // const itemCollection = collection(this.firestore, 'Ads');
    const db = doc(collection(this.firestore, 'Ads')); // Récupérer la collection Firebase

    // Utilisation SetDoc de Firebase
    await setDoc(db, this.ad).then(
      async (s) => {
        this.status.loading = false;

        // Affichage du message success
        await this.presentToast('bottom', "Your ad is created with success !", 'success');
        this.ad = {
          title: "",
          description: "",
          type: "",
          photo: "",
          owner: "",
          created_at: new Date().toLocaleDateString()
        };
        
      }, async (e) => {
        console.log(e);
        await this.presentToast('bottom', "An error is occured. Please retry now or later !", 'danger');

        this.status.loading = false;
      }
    );
    
  }

}
