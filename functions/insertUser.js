exports.handler = async = (event) => {
  console.log(event);
  // const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: "OK"
  };
}