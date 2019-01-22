import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: 'users.html'
})
export class UsersComponent {

  text: string;

  constructor() {
    console.log('Hello UsersComponent Component');
    this.text = 'Hello World';
  }
  showConfig() {
    this.configService
      .getConfig()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      });
  }

}    
