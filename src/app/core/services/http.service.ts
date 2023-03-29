import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getProductsFromAPI(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API_URL}api/products`)
  }

  postSignup(user: User): Observable<User> {
    return this.http.post<User>(`${environment.API_URL}api/auth/signup`, {user})
  }
}
