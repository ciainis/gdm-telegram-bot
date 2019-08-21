const dotenv = require('dotenv');
dotenv.config();
const TelegramBot = require('node-telegram-bot-api');

const { BOT_KEY, APP_URL, AC_CHAT_ID, MY_CHAT_ID } = process.env;

const {
  getRandomInt,
  getRandomPhrase,
  getRandomPhoto
} = require('./functions');

const getRandomOpening = require('./openings');

const options = {
  webHook: {
    port: process.env.PORT
  }
};

// for development
// const bot = new TelegramBot(BOT_KEY, { polling: true });

// for deployment
const bot = new TelegramBot(BOT_KEY, options);
bot.setWebHook(`${APP_URL}/bot${BOT_KEY}`);

const sendPhoto = async chatId => {
  bot.sendPhoto(chatId, await getRandomPhoto());
};

const saySomething = async (chatId, user = null) => {
  const phrase = await getRandomPhrase();

  user
    ? bot.sendMessage(chatId, `${getRandomOpening()} ${user}. ${phrase}`)
    : bot.sendMessage(chatId, phrase);
};

bot.on('text', msg => {
  if (
    msg.text.toLowerCase() === 'gianni parla' ||
    (msg.entites && msg.entities[0].type === 'mention')
  ) {
    saySomething(msg.chat.id, msg.from.first_name);
  } else if (msg.text.toLowerCase() === 'gianni foto') {
    if (msg.chat.id == MY_CHAT_ID || msg.chat.id == AC_CHAT_ID) {
      sendPhoto(msg.chat.id);
    }
  }
});

bot.on('polling_error', err => console.log(err));

setInterval(() => {
  const randomInt = getRandomInt(5);
  if (randomInt === 1) {
    saySomething(AC_CHAT_ID);
  }
}, 600000);
