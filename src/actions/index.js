import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const {name, brand, price, alcoholContent, pintsRemaining, id} = keg
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pintsRemaining: pintsRemaining,
    id: id
  }
}

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = ({
  type: c.TOGGLE_FORM
});

export const hideEditForm = ({
  type: c.HIDE_EDIT_FORM
});

export const showEditForm = ({
  type: c.SHOW_EDIT_FORM
});

export const noKeg = ({
  type: c.NO_KEG
});

export const selectedKeg = keg => ({
  type: c.SELECTED_KEG,
  selectedKeg: keg
});



