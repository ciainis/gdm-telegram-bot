const TelegramBot = require('node-telegram-bot-api');
const { BOT_KEY, APP_URL } = process.env;

const options = {
  webHook: {
    port: process.env.PORT,
  },
};

// for development
const gianni = new TelegramBot(BOT_KEY, { polling: true });

// for deployment
// const gianni = new TelegramBot(BOT_KEY, options);
// gianni.setWebHook(`${APP_URL}/bot${BOT_KEY}`);

module.exports = gianni;
