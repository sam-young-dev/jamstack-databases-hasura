exports.handler = async (event) => {
  // console.log(event);

  const { data } = event;
  console.log(data);

  // console.log(event.payload);
  // console.log(event.payload[0].data);
  // console.log(event.payload.data);

  return {
    statusCode: 200,
    body: 'OK'
  }
};