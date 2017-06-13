'use strict';

console.log('Loading function');

const cotw = {
  "modelId": 520,
  "review": "The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016."
};

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  const done = (err, res) => callback(null, {
    statusCode: err ? err.status : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  done(null, cotw);

};
