import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {

  let action;
  const selectedKeg = {
    name: 'Corona',
    brand: 'The Corona Co',
    price: '5.99',
    alcoholContent: '5.1',
    pintsRemaining: '18',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, {type: null})).toEqual(null);
  });

  test('Should toggle to selected keg', () => {
    action = {
      type: 'SELECTED_KEG',
      selectedKeg: selectedKeg
    };
    expect(selectedKegReducer(selectedKeg, action)).toEqual({
      name: 'Corona',
      brand: 'The Corona Co',
      price: '5.99',
      alcoholContent: '5.1',
      pintsRemaining: '18',
      id: 1
    });
  });
});