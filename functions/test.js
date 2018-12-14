exports.handler = async (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ test: 'hoge' })
  });
};