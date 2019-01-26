import { REHYDRATE } from 'redux-persist';

const initialState = {
  username: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
    console.log('ini dari persist', action.payload);
      return action.payload.user ? action.payload.user : state;

    case 'UBAH_USERNAME':
    console.log('masuk username');
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
    console.log('masuk default');
      return state;
  }
};
