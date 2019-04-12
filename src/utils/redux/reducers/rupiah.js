import { SET_VALUE, SET_VALIDATION } from "../actionTypes";


const rupiah = (state = '', action) => {
  switch (action.type) {
    case SET_VALUE:
      console.log("reducer rupiah ", action.value);
      return action.value;
    default:
      return state
  }
}

const errors =(state = [], action) => {
  switch (action.type) {
    case SET_VALIDATION:
      return action.errors;
    default:
      return state
  }
}

export {rupiah, errors}