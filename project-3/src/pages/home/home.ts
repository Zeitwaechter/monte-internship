import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsPage } from '../posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    //
  }

  onLoadPost() {
    this.navCtrl.push(PostsPage);
  }

}
