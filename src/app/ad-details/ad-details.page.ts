import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData, collection, doc, getDoc, query, deleteDoc } from '@angular/fire/firestore';
import { Ads } from '../models/Ads';
import { Auth } from "@angular/fire/auth";
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.page.html',
  styleUrls: ['./ad-details.page.scss'],
})
export class AdDetailsPage implements OnInit {
idAds!: string;
img:string = "url('assets/imgs/ocean-3605547_1280.jpg')";

querySnapshot: any;
Ad:Ads = {
  title: "",
  description: "",
  type: "",
  photo: "",
  owner: "",
  created_at: new Date().toLocaleDateString()
};
ownerName:string = "";
ownerstatus = false;
  constructor(private route: ActivatedRoute, private firestore: Firestore, private auth: Auth, private alertController: AlertController, private location: Location, private toastController: ToastController) { }

  async ngOnInit() {   
    
  }

  async ionViewDidEnter() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.idAds = id;
      console.log(this.idAds);  
      
      await this.getAd(this.idAds);

      this.ownerstatus = this.isMine();
    }

    
  }

  async getAd(id: string) {
    this.querySnapshot = await getDoc(doc(this.firestore, 'Ads', this.idAds));
    this.Ad.title = this.querySnapshot.data().title;
    this.Ad.description = this.querySnapshot.data().description;
    this.Ad.owner = this.querySnapshot.data().owner;
    this.Ad.photo = this.querySnapshot.data().photo;
    this.Ad.created_at = this.querySnapshot.data().created_at;
    this.Ad.type = this.querySnapshot.data().type;
    
    console.log(this.Ad);
    
    this.getOwner(this.Ad.owner);
  }


   getOwner(email: string) {
    this.ownerName = email;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attention',
      subHeader: 'Important message',
      message: 'Are you sure to want delete this ad ?',
      buttons: [
        {
          text: "No"
        },
        {
          text: "Yes",
          handler: async () => {
            await this.deleteAd(alert);
          }
        }
      ],
    });

    await alert.present();
  }


  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color
    });

    await toast.present();
  }

  async deleteAd(alert: HTMLIonAlertElement) {
    await deleteDoc(doc(this.firestore, 'Ads', this.idAds)).then(
      (s) => {
        
        alert.dismiss();

        this.presentToast('bottom', "Ad deleted with success !", "success");

        setTimeout(
          () => {
            this.location.back();            
          },
          1000
        );
        
      }, (e) => {
        
        alert.dismiss();

        this.presentToast('bottom', "An error occured when deleting operated !", "danger");
        
      }
    );
  }

  isMine() {
    const local = localStorage.getItem('auth-xxx-adv');
    if (local) {
      console.log(JSON.parse(local));
      const jsonOwner = JSON.parse(local);

      if (jsonOwner.email === this.ownerName) {
        return true;
      }
    }

    return false;
  }

}
