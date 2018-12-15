const initialState = {
  username: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UBAH_USERNAME':
      return {
        ...state,
        username: action.payload.username
      };
    case 'UBAH_PASSWORD':
      return {
        ...state,
        password: action.payload.password
      };
    default:
      return state;
  }
};
