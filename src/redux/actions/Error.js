export function errorHandler(data) {
  return {
    type: 'ERROR',
    payload: {
      code: data.status,
      message: data.statusText,
    }
  }
}
