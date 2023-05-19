import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isMenuOpen: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLICK_MENU_BTN:
      return {
        ...state,
        isMenuOpen: action.menuStatus,
      };
    case actionTypes.CLICK_CLOSE_BTN:
      return {
        ...state,
        isMenuOpen: action.menuStatus,
      };
    default:
      return state;
  }
};
export default menuReducer;
