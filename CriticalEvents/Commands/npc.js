const express = require('express');
const discord = require("discord.js");

var output = '';
var action = '';
var nextDice = '';
var setIndex = 0;
var argsArray = ["card", "name"];

module.exports.run = async (bot, message, args) => {
	if (args !== null && args !== '') {

		var thisArg = args.toString().toLowerCase();
		if (argsArray.includes(thisArg)) {
			switch (thisArg) {
				case "card":
					action = "Generating a random npc card.'\n";
					output = createNPC();
					break;
				case "name":
					action = "Generating a ranom npc name.'\n";
					output = generateName();
					break;
			}
		}
		else {
			message.channel.send("I could not determine exactly what you wanted to do.");
			return;
		}
	}
	else {
		output = "I could not determine precisely what you wanted to do.";
	}
	console.log(action + output);

	message.channel.send("```html\n" + action + output + " \n```");
};


module.exports.help = {
	name: "npc"
};

function createNPC() {
	generateName();
}

function generateName() {
	var name = '';
	var max = getRandomArbitrary(1, 3);
	var parts = getRandomArbitrary(1, max) + 1;
	for (i = 0; i < parts; i++) {
		var section = getRandomArbitrary(1, 2);
		if (section === 1) {
			name += getVowelSection();
		}
		else {
			name += getConsonantSection();
		}
	}
	return name;
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getConsonantSection() {
	var resultArray = [
		"b",
		"bh",
		"bl",
		"br",
		"c",
		"ch",
		"cl",
		"cr",
		"d",
		"dh",
		"dj",
		"dr",
		"dw",
		"f",
		"fl",
		"fr",
		"g",
		"gh",
		"gl",
		"gr",
		"gw",
		"h",
		"hr",
		"j",
		"jh",
		"jr",
		"k",
		"kh",
		"kl",
		"kr",
		"kw",
		"l",
		"lh",
		"ll",
		"lr",
		"m",
		"mh",
		"mm",
		"mp",
		"mr",
		"n",
		"nd",
		"ng",
		"nh",
		"nk",
		"nn",
		"nt",
		"nz",
		"p",
		"pp",
		"q",
		"r",
		"rr",
		"s",
		"ss",
		"t",
		"tt",
		"v",
		"w",
		"ww",
		"x",
		"z",
		"zz"
	];
	var pick = getRandomArbitrary(1, 61);
	return resultArray[pick];
}

function getVowelSection() {
	var resultArray = [
		"a",
		"ae",
		"ai",
		"ao",
		"au",
		"e",
		"ea",
		"ee",
		"ei",
		"eo",
		"eu",
		"i",
		"ia",
		"ie",
		"io",
		"iu",
		"o",
		"oa",
		"oe",
		"oi",
		"oo",
		"ou",
		"u",
		"ua",
		"ue",
		"ui",
		"uo"
	];
	var pick = getRandomArbitrary(1, 27);
	return resultArray[pick];
}

