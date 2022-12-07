// const { Person } = require('./person');

// // require('./modules/path');
// // require('./modules/fs');

// const person = new Person('Genival');

// // console.log(person.sayMyName());

// require('./modules/http');

const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');

dotenv.config();

connectToDatabase();

require('./modules/express');
