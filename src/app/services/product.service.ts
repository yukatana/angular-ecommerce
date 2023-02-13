import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductsModule } from '../modules/products/products.module';

import axios from 'axios';

@Injectable({
  providedIn: ProductsModule
})
export class ProductService {
  private products: Product[] = [
    {_id: '1',
      name: 'Car',
      category: 'vehicle',
      description: 'A very fast car.',
      thumbnail: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/17-2023-honda-civic-type-r-1668492493.jpg?crop=0.550xw:0.823xh;0.149xw,0.177xh&resize=1200:*',
      price: 10000,
      stock: 1,
      dateString: 'Jan 3rd, 2023'
    },
    {_id: '2',
      name: 'Apache helicopter',
      category: 'vehicle',
      description: 'It can fly!.',
      thumbnail: 'https://www.airforce-technology.com/wp-content/uploads/sites/6/2017/09/apache111.jpg',
      price: 50000,
      stock: 5,
      dateString: 'Feb 5th, 2023'
    }
  ]

  constructor() { }

  public getAllProducts(): Product[] {
    return this.products
  }
}
