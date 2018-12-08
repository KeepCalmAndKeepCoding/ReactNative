export function ubahUserName(data) {
  return {
    type: 'UBAH_USERNAME',
    payload: {
      username: data
    }
  }
}

export function ubahPassword() {
  return {
    type: 'UBAH_PASSWORD',
    payload: {
      password: '123'
    }
  }
}
