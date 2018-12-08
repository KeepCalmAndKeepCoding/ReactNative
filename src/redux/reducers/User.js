const initialState = {
  username: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UBAH_USERNAME':
      return {
        username: action.payload.username
      };
    default:
      return state;
  }
};
