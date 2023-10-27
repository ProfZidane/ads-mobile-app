import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.page.html',
  styleUrls: ['./ad-details.page.scss'],
})
export class AdDetailsPage implements OnInit {
idAds!: string;
img:string = "url('assets/imgs/ocean-3605547_1280.jpg')";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.idAds = id;
      console.log(this.idAds);      
    }
    
  }

}
