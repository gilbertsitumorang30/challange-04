const initialState = {};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
