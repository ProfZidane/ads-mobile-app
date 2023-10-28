import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collectionData, collection, doc, getDoc, query, deleteDoc, where } from '@angular/fire/firestore';
import { Ads } from '../models/Ads';
import { Auth } from "@angular/fire/auth";
import { getDocs } from 'firebase/firestore';
import { BaseService } from '../services/auth/base.service';


@Component({
  selector: 'app-ad-owner',
  templateUrl: './ad-owner.page.html',
  styleUrls: ['./ad-owner.page.scss'],
})
export class AdOwnerPage implements OnInit {
  uid!: string;
  ownerName!: string;
  advertissements: any;

  status = {
    loading: false,
  };
  constructor(private route: ActivatedRoute, private firestore: Firestore, private auth: Auth, private authService: BaseService,) { }

  ngOnInit() {
    this.getOwner();
  }

  async ionViewDidEnter() {
    const id = this.route.snapshot.paramMap.get("uid");
    if (id) {
      this.uid = id;
      console.log(this.uid);  

      await this.getAdByOwner(this.uid);
    }
  }

  getOwner() {
    if (this.auth.currentUser && this.auth.currentUser.email) {
      this.ownerName = this.auth.currentUser.email;
      console.log(this.ownerName);
      
    }
  }


  async getAdByOwner(id: string) {
    this.status.loading = true;

    const myQuery = query(collection(this.firestore, 'Ads'), where('owner', '==', id));
    let querySnapshot = await getDocs(myQuery);
    querySnapshot.forEach((docElement: any) => {
      console.log(docElement);
      
      this.advertissements.push(
        {id: docElement.id,
          title: docElement.data().title,
          description: docElement.data().description,
          type: docElement.data().type,
          photo: docElement.data().photo,
          owner: docElement.data().owner,
          created_at: docElement.data().created_at,}
      );
    });

    console.log(this.advertissements);
    
    this.status.loading = false;

  }


  logout() {
    this.authService.logout();
  }
  

}
