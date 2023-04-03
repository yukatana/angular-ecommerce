import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from '../../models/product';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User, UserCredentials } from '../../models/user';

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

  postSignup(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${environment.API_URL}auth/signup`, {...user}, {observe: 'response'})
  }

  postLogin(credentials: UserCredentials): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${environment.API_URL}auth/login`, {...credentials}, {observe: 'response'})
  }
}
