const dotenv = require('dotenv');
dotenv.config();

const { AC_CHAT_ID, MY_CHAT_ID } = process.env;
const { getRandomInt } = require('./helpers');
const { sendPhoto, saySomething, sayOld } = require('./functions');
const gianni = require('./gianni');

gianni.on('text', (msg) => {});

setInterval(() => {
  const randomInt = getRandomInt(5);

  if (randomInt === 1) {
    saySomething(AC_CHAT_ID);
  }
}, 6000000);

gianni.on('polling_error', (err) => console.log(err));
