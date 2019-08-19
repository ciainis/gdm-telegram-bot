const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const {
  BOT_KEY,
  APP_URL,
  SEARCH_API_KEY,
  SEARCH_ID,
  AC_CHAT_ID,
  MY_CHAT_ID
} = process.env;

const { getRandomQuote, getRandomInt } = require('./functions');

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

bot.on('message', msg => {
  if (msg.chat.id == MY_CHAT_ID || msg.chat.id == AC_CHAT_ID) {
    if (msg.text.toLowerCase() === 'gianni') {
      axios
        .get('https://www.googleapis.com/customsearch/v1', {
          params: {
            key: SEARCH_API_KEY,
            cx: SEARCH_ID,
            q: 'gianni de michelis',
            searchType: 'image'
          }
        })
        .then(({ data }) => {
          bot.sendPhoto(msg.chat.id, data.items[getRandomInt(10)].link);
        })
        .catch(err => console.log(err));
    }

    if (msg.text.toLowerCase() === 'gianni parla') {
      bot.sendMessage(msg.chat.id, getRandomQuote());
    }
  } else {
    return;
  }
});
