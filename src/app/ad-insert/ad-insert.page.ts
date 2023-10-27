import { Component, OnInit } from '@angular/core';
import { Ads } from '../models/Ads';
import { BaseService } from '../services/auth/base.service';


import { Firestore, setDoc, doc, collection } from '@angular/fire/firestore';


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
  constructor(private AuthBaseService: BaseService, private firestore: Firestore) { }

  ngOnInit() {
  }


  async saveAd() {
    this.ad.owner = this.AuthBaseService.getOwnerID();
    console.log(this.ad);

    const itemCollection = collection(this.firestore, 'Ads');
    const db = doc(collection(this.firestore, 'Ads'),'Ads');

    
    await setDoc(db, this.ad);
    
  }

}
