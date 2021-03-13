const dotenv = require('dotenv');
dotenv.config();

const { AC_CHAT_ID, MY_CHAT_ID } = process.env;
const { getRandomInt } = require('./helpers');
const { sendPhoto, saySomething, sayOld } = require('./functions');
const gianni = require('./gianni');

gianni.on('text', (msg) => {
  if (
    msg.entities &&
    msg.entities[0].type === 'mention' &&
    msg.text.toLowerCase().startsWith('@giannidm_bot foto')
  ) {
    sendPhoto(msg.chat.id, msg.text);
  } else if (
    msg.entities &&
    msg.entities[0].type === 'mention' &&
    msg.text.toLowerCase().includes('@giannidm_bot')
  ) {
    saySomething(msg.chat.id, msg.from.first_name);
  } else {
    sayOld(msg.chat.id);
  }
});

gianni.on('polling_error', (err) => console.log(err));

// setInterval(() => {
//   const randomInt = getRandomInt(5);
//   if (randomInt === 1) {
//     saySomething(AC_CHAT_ID);
//   }
// }, 600000);
