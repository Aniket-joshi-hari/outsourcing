/*
 *
 * CartPage actions
 *
 */

import { GetCartList, SetCartList } from './constants';

export function getCartList() {
  return {
    type: GetCartList,
  };
}

export function setCartList(books) {
  return {
    type: SetCartList,
    books
  }
}
