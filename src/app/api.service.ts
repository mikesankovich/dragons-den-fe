import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(`${environment.apiUrl}${url}`);
  }
  post(url, body) {
    return this.http.post(`${environment.apiUrl}${url}`, body);
  }
}
