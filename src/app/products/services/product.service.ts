import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';

@Injectable()
export class ProductService {
  private products: Product[] = []
  private products$: BehaviorSubject<Product[]>

  constructor(
    private httpService: HttpService
  ) {
    // assigning first value as an empty array to wait to HTTP response
    this.products$ = new BehaviorSubject<Product[]>(this.products)
    // calling HTTP service in order to pass server response to products$ BehaviorSubject
    this.httpService.getProductsFromAPI().subscribe(
      products => {
        this.products = products
        this.products$.next(this.products)
      }
    )
  }

  getProductsAsObservable(): Observable<Product[]> {
    return this.products$.asObservable()
  }

  addProduct(product: Product): void {
    this.products.push(product)
    this.products$.next(this.products)
  }

  editProduct(product: Product): void {
    this.products[this.products.findIndex(_product => _product.id === product.id)] = product
    this.products$.next(this.products)
  }

  deleteProduct(id: string): void {
    this.products.splice(this.products.findIndex(_product => _product.id === id), 1)
    this.products$.next(this.products)
  }
}
