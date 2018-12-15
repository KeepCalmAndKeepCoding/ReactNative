const initialState = {
  code: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        code: actions.payload.code,
        message: action.payload.message
      };
    default:
      return state;
  }
};
