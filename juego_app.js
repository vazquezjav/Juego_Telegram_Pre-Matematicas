const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "1144691998:AAG71sZtindjgyOAM5oMT0KkjRP4X9bfQsQ";
const server = express();
const bot = new TelegramBot(TOKEN, { polling: true } );

const port = process.env.PORT || 5000;
const gameName = process.env.juegoEscrituraMate || 'juegoEscrituraMate';

const queries = {};


bot.onText(/matematicas/, (msg) => bot.sendGame(msg.from.id, gameName));
bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName) {
        bot.answerCallbackQuery(query.id, "Lo sentimos el juego,'" + query.game_short_name + "' no esta disponible.");
    } else {
        queries[query.id] = query;
        let gameurl = "https://juego-matematicas.herokuapp.com/";
        bot.answerCallbackQuery({
            callback_query_id: query.id,
            url: gameurl
        });
    }
});
bot.on("inline_query", function(iq) {
    bot.answerInlineQuery(iq.id, [ { type: "game", id: "0", game_short_name: gameName } ] ); 
});

server.use(express.static(path.join(__dirname, 'Public')));

server.listen(port);;

bot.onText(/^\/prueba/, function(msg){
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.username;
    
    bot.sendMessage(chatId, "Hola, " + username + " soy un bot y mi nombre es Review4IU");
    });