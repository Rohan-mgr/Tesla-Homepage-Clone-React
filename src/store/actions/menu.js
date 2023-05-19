import * as actionTypes from "./actionTypes";

export const clickMenu = () => {
  return {
    type: actionTypes.CLICK_MENU_BTN,
    menuStatus: true,
  };
};

export const closeMenu = () => {
  return {
    type: actionTypes.CLICK_CLOSE_BTN,
    menuStatus: false,
  };
};
