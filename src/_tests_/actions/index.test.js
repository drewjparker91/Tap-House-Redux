import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_Keg action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
});