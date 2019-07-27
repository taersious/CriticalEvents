const de = require('dotenv').config();
const discord = require('discord.js');
const config = require('./config.json');
const bot = new discord.Client({ disableEveryone: true });
const fs = require("fs");

var logger = require('winston');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
	colorize: true
});
logger.level = 'debug';

bot.commands = new discord.Collection();

fs.readdir("./Commands/", (err, files) => {
	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if (jsfile.length <= 0) {
		console.log("No commands were found.");
		return;
	}

    jsfile.forEach((f, i) => {
        var thisCmd = `./Commands/${f}`;
        let props = require(thisCmd);
		console.log(`Command: ${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

bot.on('ready', async () => {
	console.log(`${bot.user.username} is online.`);
	bot.user.setActivity("Prefix is '-' ", { type: "WATCHING" });
});

bot.on('message', async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	if (cmd.substring(0, 1) !== '-') return;
	let args = messageArray.slice(1);

	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(bot, message, args);
});

// Initialize Bot
bot.login(process.env.QPC);
