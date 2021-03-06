import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions/ActionTypes';


let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null })).toEqual({
      editing: false,
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg:null
    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: a.ADD_KEG,
      name: 'Corona',
      brand: 'The Corona Co.',
      price: '5.99',
      alcoholContent: '5.1',
      pintsRemaining: '14',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and rootReducer', () => {
    const action = {
      type: a.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});