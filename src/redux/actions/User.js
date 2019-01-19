import errorActions from './Error';

export function ubahUserName(data) {
  return {
    type: 'UBAH_USERNAME',
    payload: {
      username: data
    }
  }
}

export function ubahUserNameDariApi() {
  return (dispatch) => {
    fetch('https://swapi.co/api/people/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        dispatch(errorActions.errorHandler({
          status: response.status,
          statusText: response.statusText
        }));
      }
    })
    .then(response => {
      dispatch(ubahUserName(response.results[0].name))
    })
    .catch(err => {
      alert('dari actions', err);

      dispatch(errorActions.errorHandler({
        status: response.status,
        statusText: response.statusText
      }));
    });
  };
}

export function ubahPassword() {
  return {
    type: 'UBAH_PASSWORD',
    payload: {
      password: '123'
    }
  }
}
