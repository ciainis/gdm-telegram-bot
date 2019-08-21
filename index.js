const dotenv = require('dotenv');
dotenv.config();
const TelegramBot = require('node-telegram-bot-api');

const { BOT_KEY, APP_URL, AC_CHAT_ID, MY_CHAT_ID } = process.env;

const {
  getRandomInt,
  getRandomPhrase,
  getRandomPhoto
} = require('./functions');

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

const saySomething = async chatId =>
  bot.sendMessage(chatId, await getRandomPhrase());

bot.on('message', msg => {
  if (msg.chat.id == MY_CHAT_ID || msg.chat.id == AC_CHAT_ID) {
    if (msg.text.toLowerCase() === 'gianni') {
      sendPhoto(msg.chat.id);
    } else if (msg.text.toLowerCase() === 'gianni parla') {
      saySomething(msg.chat.id);
    } else return;
  }
});

setInterval(() => {
  const randomInt = getRandomInt(5);
  if (randomInt === 1) {
    saySomething(AC_CHAT_ID);
  }
}, 600000);
