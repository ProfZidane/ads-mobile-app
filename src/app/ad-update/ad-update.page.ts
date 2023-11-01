import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData, collection, doc, getDoc, query, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Ads } from '../models/Ads';
import { Types } from '../datas/Types';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ad-update',
  templateUrl: './ad-update.page.html',
  styleUrls: ['./ad-update.page.scss'],
})
export class AdUpdatePage implements OnInit {
  idAds!: string;
  querySnapshot: any;
  Ad:Ads = {
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

  constructor(private route: ActivatedRoute, private firestore: Firestore, private toastController: ToastController, private location: Location) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.idAds = id;
      console.log(this.idAds);  
      
      await this.getAd(this.idAds);
    }
  }

  ionViewDidEnter() {
    this.types = Types;
  }

  async getAd(id: string) {
    this.querySnapshot = await getDoc(doc(this.firestore, 'Ads', this.idAds));
    this.Ad.title = this.querySnapshot.data().title;
    this.Ad.description = this.querySnapshot.data().description;
    this.Ad.owner = this.querySnapshot.data().owner;
    this.Ad.photo = this.querySnapshot.data().photo;
    this.Ad.created_at = this.querySnapshot.data().created_at;
    this.Ad.type = this.querySnapshot.data().type;
        
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



  async updateAd() {
    this.status.loading = true;

    await updateDoc(doc(this.firestore, "Ads", this.idAds), {
      title: this.Ad.title,
      description: this.Ad.description,
      type: this.Ad.type,
      photo: this.Ad.photo,
      owner: this.Ad.owner
    }).then(
      async (s) => {
        this.status.loading = false;
        await this.presentToast('bottom', "Your ad is updated with success !", "success");

        setTimeout(
          () => { this.location.back() },
          1000
        );
        
      }, async (e) => {
        this.status.loading = false;
        await this.presentToast('bottom', "An error is occured. Please retry now or later !", "danger");
      }
    );
  }

}
