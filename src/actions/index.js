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

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

