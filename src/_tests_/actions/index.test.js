import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_Keg action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    })
  })

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Corona', brand: 'The Corona Co.', price: '3.99', alcoholContent: "5", pintsRemaining: "124", id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Corona',
      brand: 'The Corona Co.',
      price: '3.99',
      alcoholContent: "5",
      pintsRemaining: "124",
       id: 1
    });
  });
});