import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl + '/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactPageService {

  constructor(private http: HttpClient) { }

  sendContact(name: string, email: string, note: string) {
    return this.http.post(`${API_URL}`, {name, email, note})
  }
}
