const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "1144691998:AAG71sZtindjgyOAM5oMT0KkjRP4X9bfQsQ";
const server = express();
const bot = new TelegramBot(TOKEN, { polling: true });

const port = process.env.PORT || 5000;
const gameName = process.env.juegoEscrituraMate || 'juegoEscrituraMate';
const gameName1 = process.env.juegoPreEscritura || 'juegoPreEscritura';

const queries = {};
bot.onText(/start|jugar/, (msg) => bot.sendMessage(msg.from.id, "Para jugar prueba los siguientes comandos: \n 1. Juego Matematicas: /matematicas \n 2. Juego Escritura: /lectura"));

bot.onText(/matematicas/, (msg) => bot.sendGame(msg.from.id, gameName));
bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName) {
        bot.answerCallbackQuery(query.id, "Lo sentimos el juego,'" + query.game_short_name + "' no esta disponible.");
    } else {
        queries[query.id] = query;
        let gameurl = "http://34.83.242.108/matematicas/Public/";
        bot.answerCallbackQuery({
            callback_query_id: query.id,
            url: gameurl
        });
    }
});
bot.onText(/lectura/, (msg) => bot.sendGame(msg.from.id, gameName1));
bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName1) {
        bot.answerCallbackQuery(query.id, "Lo sentimos el juego, '" + query.game_short_name + "' no esta disponible.");
    } else {
        queries[query.id] = query;
        let gameurl = "http://34.83.242.108/escritura/";
        bot.answerCallbackQuery({
            callback_query_id: query.id,
            url: gameurl
        });
    }
});

bot.on("inline_query", function (iq) {
    bot.answerInlineQuery(iq.id, [{ type: "game", id: "0", game_short_name: gameName }]);
});

server.use(express.static(path.join(__dirname, 'Public')));

server.listen(port);;

