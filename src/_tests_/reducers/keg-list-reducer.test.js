import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  const currentState = {
    1: {name: 'Corona',
    brand: 'Corona Co',
    price: '5.99',
    alcoholContent: '5.0',
    pintsRemaining: '18',
    id: 1},
    2: {name: 'Coors',
    brand: 'Anheuser-Busch',
    price: '3.99',
    alcoholContent: '5.0',
    pintsRemaining: '20',
    id: 2}
  }

  let action;
  const kegData ={
    name: 'Corona',
    brand: 'Corona Co',
    price: '5.99',
    alcoholContent: '5.0',
    pintsRemaining: '18',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, pintsRemaining, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsRemaining: pintsRemaining,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsRemaining: pintsRemaining,
        id: id
      }
    })
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Coors',
      brand: 'Anheuser-Busch',
      price: '3.99',
      alcoholContent: '5.0',
      pintsRemaining: '20',
      id: 2} 
    });
  });
});