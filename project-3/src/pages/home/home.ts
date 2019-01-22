import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsPage } from '../posts/posts';
import { Http } from '@angular/http';

import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  places: { title: string }[] = [];

  constructor(public navCtrl: NavController, private placesService: PlacesService) {
    //
  }

  ionViewWillEnter() {
    this.placesService.getPlaces()
      .then(
        (places) => this.places = places
      );
  }

  onLoadPost() {
    this.navCtrl.push(PostsPage);
  }

}
