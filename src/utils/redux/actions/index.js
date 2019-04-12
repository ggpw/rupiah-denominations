import { SET_VALUE, SET_VALIDATION } from "../actionTypes";

export function setValue(value) {
  return {
    type: SET_VALUE,
    value: value
  };
}

export function setValidation(errors) {
  return {
    type: SET_VALIDATION,
    errors: errors
  };
}
