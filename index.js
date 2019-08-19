const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios');

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_KEY;
const url = process.env.APP_URL;
const api_key = process.env.SEARCH_API_KEY;
const search_engine_id = process.env.SEARCH_ID;

const options = {
  webHook: {
    port: process.env.PORT
  }
};

// for deployment
const bot = new TelegramBot(token, options);

// for development
// const bot = new TelegramBot(token, { polling: true });

// for deployment
bot.setWebHook(`${url}/bot${token}`);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on('message', msg => {
  if (msg.text === 'gianni') {
    axios
      .get('https://www.googleapis.com/customsearch/v1', {
        params: {
          key: api_key,
          cx: search_engine_id,
          q: 'gianni de michelis',
          searchType: 'image'
        }
      })
      .then(({ data }) => {
        bot.sendPhoto(msg.chat.id, data.items[getRandomInt(10)].link);
      })
      .catch(err => console.log(err));
  }
});
