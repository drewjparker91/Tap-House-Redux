export const addKeg = (keg) => {
  const {name, brand, price, alcoholContent, pintsRemaining, id} = keg
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pintsRemaining: pintsRemaining,
    id: id
  }
}

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = ({
  type: 'TOGGLE_FORM'
});

export const hideEditForm = ({
  type: 'HIDE_EDIT_FORM'
});

export const showEditForm = ({
  type: 'SHOW_EDIT_FORM'
});

export const noKeg = ({
  type: 'NO_KEG'
});

export const selectedKeg = keg => ({
  type: 'SELECTED_KEG',
  selectedKeg: keg
});



