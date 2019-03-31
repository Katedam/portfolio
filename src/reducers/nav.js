import { TOGGLE_CLASS } from '../actions/nav';

const initialState = {
  toggle: false
};

export default function reducer(state = initialState, { type }) {
  switch(type) {
    case TOGGLE_CLASS:
      if(!state.toggle) {
        return {
          toggle: true
        };
      } else {
        return {
          toggle: false
        };
      }
    default:
      return state;
  }
}
