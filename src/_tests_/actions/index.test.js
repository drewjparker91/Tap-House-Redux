import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_Keg action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm).toEqual({
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

  it('hideEditForm should create HIDE_EDIT_FORM action', () => {
    expect(actions.hideEditForm).toEqual({
      type: 'HIDE_EDIT_FORM'
    })
  });

  it('showEditForm should create SHOW_EDIT_FORM action', () => {
    expect(actions.showEditForm).toEqual({
      type: 'SHOW_EDIT_FORM'
    })
  });

  it('noKeg should create NO_KEG action', () => {
    expect(actions.noKeg).toEqual({
      type: 'NO_KEG'
    })
  });

  it('selectedKeg should create SELECTED_KEG action', () => {
    expect(actions.selectedKeg(1)).toEqual({
      type: 'SELECTED_KEG',
      selectedKeg: 1
    });
  });
});