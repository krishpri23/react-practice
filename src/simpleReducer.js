import { ACTION } from "./action";

export const INITIAL_STATE = {
  name: "",
  count: 0
};

export const simpleReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INPUT_CHANGE: {
      return {
        ...state,
        name: action.payload
      };
    }
    case ACTION.INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case ACTION.DECREMENT: {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};
