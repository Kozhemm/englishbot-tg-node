require('dotenv')
    .config({ path: "D:\\LAB\\jump_to_future\\englishbot\\.env" })

const TelegramBot = require('node-telegram-bot-api');

const data = require("./data/data-verbs");
const parser = require("./parser/class-parser");
const settings = require("./settings-buttons");
const lvlControll = require("./level-controller");

const token = process.env.KEY;
const bot = new TelegramBot(token, { polling: true });

let lvlForUpd = 0;
let flagUpdLvl = false;

bot.onText(/\/start/, (msg) => {

    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Выберите вашу функцию !", settings);

});

bot.onText(/\/setlvl (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    lvlForUpd = +match[1];
    bot.sendMessage(chatId, "Подтвердите измененение уровня");

});
bot.on('callback_query', (dataFromCallback) => {

    const id = dataFromCallback.message.chat.id;
    const numberButton = dataFromCallback.data;

    if (+numberButton === 1) {

        const words = parser.getEl(data, lvlControll.get());

        bot.sendMessage(id, `[ ~ ${words.toString()} ~ ]`)
        lvlControll.getNext()
    }

    if (+numberButton === 2) {
        bot.sendMessage(id, "Уровень сменен на предыдущий")
        lvlControll.previous();
    }
    if (+numberButton === 3) {
        if (!flagUpdLvl) {
            bot.sendMessage(id, "Введите /setlvl your_lvl где your_lvl желаемый уровень ")
            flagUpdLvl = true
        } else {
            lvlControll.set(lvlForUpd);
            bot.sendMessage(id, "Уровень успешно изменен")
        }
    }
    if (+numberButton === 4) {
        bot.sendMessage(id, "Уровень успешно сброшен до 1")
        lvlControll.reset()
    }
});


