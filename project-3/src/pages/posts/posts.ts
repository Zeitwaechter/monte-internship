import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  constructor(private placesService: PlacesService) {}

  onAddPlace(value: {title: string}){
    this.placesService.addPlace(value);
  }

}
