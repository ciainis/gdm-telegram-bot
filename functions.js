const gianni = require('./gianni');
const { getRandomPhrase, getRandomPhoto } = require('./api');

const sendPhoto = async (chatId, text) => {
  const searchText = text.split(' ').splice(2).join(' ');

  gianni.sendPhoto(chatId, await getRandomPhoto(searchText));
};

const saySomething = async (chatId, user = null) => {
  const phrase = await getRandomPhrase();

  user
    ? gianni.sendMessage(chatId, phrase)
    : gianni.sendMessage(chatId, phrase);
};

const sayOld = (chatId) => {
  const random = Math.random();

  // if (random >= 0.9) {
  gianni.sendMessage(chatId, 'OLD');
  // }
};

module.exports = { sendPhoto, saySomething, sayOld };
