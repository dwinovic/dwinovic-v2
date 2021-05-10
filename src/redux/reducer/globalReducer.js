const initGlobal = {
  isLoading: true,
};

export const globalReducer = (state = initGlobal, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};
