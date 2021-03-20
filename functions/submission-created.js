exports.handler = async (event) => {
  console.log(event.payload);

  return {
    statusCode: 200,
    body: 'OK'
  }
};