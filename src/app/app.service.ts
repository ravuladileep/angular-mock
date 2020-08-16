import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  /**
   * function: getPosts
   * purpose: used to get the posts
   * version: 1.0.1
   * author : dileep_ravula
   */

  getPosts(): Observable<any>{
   return this.http.get(`${environment.apiUrl}posts`);
  }

}
