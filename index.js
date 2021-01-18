const dotenv = require('dotenv');
dotenv.config();
const TelegramBot = require('node-telegram-bot-api');

const { BOT_KEY, APP_URL, AC_CHAT_ID, MY_CHAT_ID } = process.env;

const {
  getRandomInt,
  getRandomPhrase,
  getRandomPhoto,
} = require('./functions');

const getRandomOpening = require('./openings');

const options = {
  webHook: {
    port: process.env.PORT,
  },
};

// for development
// const bot = new TelegramBot(BOT_KEY, { polling: true });

// for deployment
const bot = new TelegramBot(BOT_KEY, options);
bot.setWebHook(`${APP_URL}/bot${BOT_KEY}`);

const sendPhoto = async (chatId, text) => {
  const searchText = text.split(' ').splice(2).join(' ');

  bot.sendPhoto(chatId, await getRandomPhoto(searchText));
};

const saySomething = async (chatId, user = null, old = false) => {
  let phrase;

  const random = Math.random();
  if (random >= 0.1 && old) {
    phrase = 'OLD';
  } else {
    prase = await getRandomPhrase();
  }

  user ? bot.sendMessage(chatId, phrase) : bot.sendMessage(chatId, phrase);
};

bot.on('text', (msg) => {
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
    saySomething(msg.chat.id, msg.from.first_name, true);
  }
});

bot.on('polling_error', (err) => console.log(err));

setInterval(() => {
  const randomInt = getRandomInt(5);
  if (randomInt === 1) {
    saySomething(AC_CHAT_ID);
  }
}, 600000);
