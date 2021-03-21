exports.handler = async (event) => {
  console.log(event);

  const body = JSON.parse(event.body);
  const formData = body.payload.data;
  console.log(formData);

  return {
    statusCode: 200,
    body: 'OK'
  }
};