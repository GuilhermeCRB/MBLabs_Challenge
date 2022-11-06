import { Item } from '@prisma/client';

export type CreateItem = Omit<Item, 'id'>;

export default function formatItem(line) {
  const jsonLine = JSON.parse(line);
  const item: CreateItem = {
    code: Number(jsonLine.code),
    status: 'published',
    imported_t: `${new Date()}`,
    url: jsonLine.url,
    creator: jsonLine.creator,
    created_t: Number(jsonLine.created_t),
    last_modified_t: Number(jsonLine.last_modified_t),
    product_name: jsonLine.product_name,
    quantity: jsonLine.quantity,
    brands: jsonLine.brands,
    categories: jsonLine.categories,
    labels: jsonLine.labels,
    cities: jsonLine.cities,
    purchase_places: jsonLine.purchase_places,
    stores: jsonLine.stores,
    ingredients_text: jsonLine.ingredients_text,
    traces: jsonLine.traces,
    serving_size: jsonLine.serving_size,
    serving_quantity: Number(jsonLine.serving_quantity),
    nutriscore_score: Number(jsonLine.nutriscore_score),
    nutriscore_grade: jsonLine.nutriscore_grade,
    main_category: jsonLine.main_category,
    image_url: jsonLine.image_url,
  };

  return item;
}
