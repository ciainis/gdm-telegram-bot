const dotenv = require('dotenv');
dotenv.config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_KEY;
const url = process.env.APP_URL;

const options = {
  webHook: {
    port: process.env.PORT
  }
};

const bot = new TelegramBot(token, options);

bot.setWebHook(`${url}/bot${token}`);

bot.on('message', msg => {
  if (msg.text === 'gianni') {
    bot.sendMessage(msg.chat.id, 'Ciao sono Gianni De Michelis');
  }
});
