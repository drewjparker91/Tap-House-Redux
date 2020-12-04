export default (state = null, action) => {
  const { selectedKeg } = action;
  switch (action.type) {
  case 'SELECTED_KEG':
    const newState = selectedKeg;
    return newState;
  case 'NO_KEG':
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};