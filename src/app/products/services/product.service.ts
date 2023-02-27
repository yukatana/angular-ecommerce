import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { generateProducts } from '../../utils/data-generator';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private products: Product[] = generateProducts(3)
  private products$: BehaviorSubject<Product[]>

  constructor() {
    this.products$ = new BehaviorSubject<Product[]>(this.products)
  }

  public getAllProducts(): Observable<Product[]> {
    return this.products$.asObservable()
  }

  public addProduct(product: Product): void {
    this.products.push(product)
    this.products$.next(this.products)
  }

  public editProduct(product: Product): void {
    this.products[this.products.findIndex(_product => _product.id === product.id)] = product
    this.products$.next(this.products)
  }

  public deleteProduct(id: string): void {
    this.products.splice(this.products.findIndex(_product => _product.id === id), 1)
    this.products$.next(this.products)
  }
}
