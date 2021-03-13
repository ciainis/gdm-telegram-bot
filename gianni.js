const TelegramBot = require('node-telegram-bot-api');
const { BOT_KEY, APP_URL } = process.env;

const options =
  process.env.NODE_ENV == 'production'
    ? {
        webHook: {
          port: process.env.PORT,
        },
      }
    : { polling: true };

const gianni = new TelegramBot(BOT_KEY, options);

if (process.env.NODE_ENV == 'production') {
  gianni.setWebHook(`${APP_URL}/bot${BOT_KEY}`);
}

module.exports = gianni;
