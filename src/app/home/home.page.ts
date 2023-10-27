import { Component, inject } from '@angular/core';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
color:string = 'blue';
img:string = "url('assets/imgs/ocean-3605547_1280.jpg')";

item$!:Observable<any[]>;

  constructor(private firestore: Firestore ) {}


  ngOnInit() {
    this.getAds();
  }


  async getAds() {
    const itemCollection = collection(this.firestore, 'Ads');
    this.item$ = await collectionData(itemCollection);
    
    this.item$.subscribe(
      (s) => {
        console.log(s);
        
      }, (e) => {
        console.log(e);
        
      }
    );
  }

  
}
