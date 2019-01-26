import { Actions } from 'react-native-router-flux';
import env from '../../env';

export function request(requestBody, successFunction, errorFunction = null, preFunction = null, postFunction = null) {
  return (dispatch, getState) => {
    // dispatch and getState are the return from redux-thunk
    const accessToken = env.serverApiToken;

    return async() => {
      try {
        if (preFunction !== null) {
          preFunction(dispatch);
        };

        let apiFetch = await fetch(url,
        {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Api-Key': !!accessToken ? accessToken : '',
          },
          body: method !== 'GET' ? JSON.stringify(requestBody) : undefined,
        });

        let response = await apiFetch.json();

        if (response.code === 200) {
          // execute dispatch
          await successFunction(response.data, dispatch);
        } else {
          // if should_relogin
          if (response.should_relogin) {
            alert('The account has been logged into from another device. Please logout and re-login');

            // ====== Custom Settings ======
            // await dispatch({
            //   type: Dispatches.LOGOUT,
            // });
            //
            // Actions.reset('resource');
          } else {
            // execute dispatch THROW_ERROR
            if (errorFunction !== null) {
              console.log('Error debugger: utilities/api:', response);
              await errorFunction(response.message, response.code, dispatch);
            } else {
              console.log('Error debugger: utilities/api:', response);
              alert('Oops, sorry, we are experiencing some problem (#1)');
            };
          };
        };

        if (postFunction !== null) {
          postFunction(dispatch);
        };

      } catch (error) {
        if (errorFunction !== null) {
          console.log('Error debugger: utilities/api: ', error);
          return errorFunction(error, null, dispatch);
        } else {
          console.log('Error debugger: utilities/api: ', error);
          return alert('Oops, sorry, we are experiencing some problem (#2)');
        };
      };
    };
  };
};
