import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedKeg } = action;
  switch (action.type) {
  case c.SELECTED_KEG:
    const newState = selectedKeg;
    return newState;
  case c.NO_KEG:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};