import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

usersApiConfig = 'assets/api/users.json';

getUsers() {
  return this.http.get(this.usersApiConfig);

}
