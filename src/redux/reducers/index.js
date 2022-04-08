const initialState = {
  loading: false,
  token: null,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
