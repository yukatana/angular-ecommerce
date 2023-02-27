import { faker } from '@faker-js/faker';
import { Product } from '../models/product';

export const generateProducts = (n: number): Product[] => {
  const products: Product[] = []
  for (let i = 0; i < n; i++) {
    products.push(
      {
        id: faker.datatype.uuid(),
        name: faker.vehicle.model(),
        category: 'vehicle',
        description: faker.vehicle.type(),
        thumbnail: faker.image.transport(500, 500, true),
        price: faker.datatype.number(),
        stock: faker.datatype.number()
      }
    )
  }
  return products
}
