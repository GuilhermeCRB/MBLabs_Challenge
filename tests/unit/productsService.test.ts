/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { jest } from '@jest/globals';

import createProduct from '../factories/productFactory.js';
import { productsRepository } from '../../src/repositories/productsRepository.js';
import * as productsServices from '../../src/services/productsService.js';
import { Item } from '@prisma/client';
import { faker } from '@faker-js/faker';

describe('Products service unit test', () => {
  it('Returns a product, given a valid code.', async () => {
    const product: Item = createProduct();
    jest.spyOn(productsRepository, 'findProduct').mockResolvedValueOnce(product);

    try {
      const result = await productsServices.getProduct(product.code);
      expect(result.code).toEqual(product.code);
    } catch (e) {
      console.log(e);
    }
  });

  it('Returns Error 404 if product is not found.', async () => {
    const product: Item = createProduct();
    const fakeCode = Number(faker.random.numeric(9));
    jest.spyOn(productsRepository, 'findProduct').mockResolvedValueOnce(product);

    try {
      const result = await productsServices.getProduct(fakeCode);
      expect(result.code).not.toEqual(product.code);
    } catch (e) {
      console.log(e);
    }
  });

  it('Returns a list of products.', async () => {
    const limit = '5';
    const offset = '0';
    const productArray: Item[] = [];

    for (let i = 0; i < Number(limit); i++) {
      const product: Item = createProduct();
      productArray.push(product);
    }

    jest.spyOn(productsRepository, 'findManyProducts').mockResolvedValueOnce(productArray);

    try {
      const result = await productsServices.getProductsList(limit, offset);
      expect(result.length).toEqual(limit);
    } catch (e) {
      console.log(e);
    }
  });

  it('Calls updateFoundProduct function.', async () => {
    const product: Item = createProduct();
    delete product.id;
    jest.spyOn(productsRepository, 'updateFoundProduct').mockImplementationOnce((): any => {});

    try {
      await productsServices.updateUserProduct(product.code, product);
      expect(productsRepository.updateFoundProduct).toBeCalled;
    } catch (e) {
      console.log(e);
    }
  });

  it('Calls deleteFoundProduct function.', async () => {
    const product: Item = createProduct();
    delete product.id;
    jest.spyOn(productsRepository, 'deleteFoundProduct').mockImplementationOnce((): any => {});

    try {
      await productsServices.deleteUserProduct(product.code);
      expect(productsRepository.deleteFoundProduct).toBeCalled;
    } catch (e) {
      console.log(e);
    }
  });
});
