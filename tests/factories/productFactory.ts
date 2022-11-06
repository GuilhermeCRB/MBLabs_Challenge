import { faker } from '@faker-js/faker';
import { Status } from '@prisma/client';

export default function createProduct() {
  const status: Status = 'published';

  return {
    id: faker.random.alphaNumeric(8),
    code: Number(faker.random.numeric(8)),
    status,
    imported_t: `${new Date()}`,
    url: faker.animal.horse(),
    creator: faker.animal.horse(),
    created_t: Date.now(),
    last_modified_t: Date.now(),
    product_name: faker.animal.horse(),
    quantity: faker.animal.horse(),
    brands: faker.animal.horse(),
    categories: faker.animal.horse(),
    labels: faker.animal.horse(),
    cities: faker.animal.horse(),
    purchase_places: faker.animal.horse(),
    stores: faker.animal.horse(),
    ingredients_text: faker.animal.horse(),
    traces: faker.animal.horse(),
    serving_size: faker.animal.horse(),
    serving_quantity: Number(faker.random.numeric(2)),
    nutriscore_score: Number(faker.random.numeric(2)),
    nutriscore_grade: faker.animal.horse(),
    main_category: faker.animal.horse(),
    image_url: faker.animal.horse(),
  };
}
