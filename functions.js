const gdm = require('./gdm');
const { getRandomPhrase, getRandomPhoto } = require('./api');

const sendPhoto = async (chatId, text) => {
  const searchText = text.split(' ').splice(2).join(' ');

  gdm.sendPhoto(chatId, await getRandomPhoto(searchText));
};

const saySomething = async (chatId) => {
  const phrase = await getRandomPhrase();
  gdm.sendMessage(chatId, phrase);
};

const sayOld = (chatId) => {
  const random = Math.random();

  if (random >= 0.9) {
    gdm.sendMessage(chatId, 'OLD');
  }
};

module.exports = { sendPhoto, saySomething, sayOld };
