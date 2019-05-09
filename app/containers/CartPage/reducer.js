/*
 *
 * CartPage reducer
 *
 */

import { fromJS } from 'immutable';
import { GetCartList, SetCartList } from './constants';

export const initialState = fromJS({
  loading: false,
  books: [],
});

function cartPageReducer(state = initialState, action) {
  switch (action.type) {
    case GetCartList:
      return state
        .set('loading', 'true');
    
    case SetCartList:
      return state
        .set('loading', 'false')
        .set('books', action.books);
    default:
      return state;
  }
}

export default cartPageReducer;
