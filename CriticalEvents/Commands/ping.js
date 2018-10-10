const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("ping received!");
};

module.exports.help = {
    name: "ping"
}
