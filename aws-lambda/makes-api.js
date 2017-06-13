'use strict';

console.log('Loading function');

const makes = [
  {
    "id": 10,
    "name": "Porsche"
  },
  {
    "id": 20,
    "name": "Nissan"
  },
  {
    "id": 30,
    "name": "BMW"
  },
  {
    "id": 40,
    "name": "Audi"
  },
  {
    "id": 50,
    "name": "Mazda"
  }
];

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  const done = (err, res) => callback(null, {
    statusCode: err ? err.status : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  done(null, makes);

  // let err = null;
  // let strId = event.id;
  // try {
  //   if (strId === '' || strId === '*') { // makeId is blank, meaning all
  //     done(err, makes);
  //     return;
  //   }
  //   let id = Number(strId); // no need to worry about NaN here, because the filter does a ===
  //   if (isNaN(id)) {
  //     done({status: '400', message: 'Invalid parameter'}, null);
  //     return;
  //   }
  //   let filteredMakes = makes.filter(function (make) { return make.id === id });
  //   if (filteredMakes.length === 0) {
  //     err = {status: '404', message: 'Not Found'};
  //   }
  //   done(err, filteredMakes);
  // } catch (e){
  //   console.log('Error:', e);
  //   done({status: '500', message: 'Server Error'}, null);
  // }

};
