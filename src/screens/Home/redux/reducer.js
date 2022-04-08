const initialState = {
  listBooks: [],
  detailBook: {},
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return {
        ...state,
        listBooks: action.payload,
      };
    case 'SET_DETAIL_BOOK':
      return {
        ...state,
        detailBook: action.payload,
      };
    default:
      return state;
  }
};
