'use strict';

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ status: 'ok', service: 'volunteering-app-backend' }),
  };
};


