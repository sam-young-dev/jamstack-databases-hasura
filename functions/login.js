exports.handler = async (_event, context) => {
  try {
    const { user } = context.clientContext;

    if (!user) throw new Error('Not Authorized');

    console.log(user);

    return {
      statusCode: 200,
      headers: {
        'content-type': 'text/html',
      },
      body: `user: ${user.user_metadata.full_name}`
    }
  }
  catch(e) {
    return {
      statusCode: 401,
      body: 'Not Authorized',
    };
  }
};