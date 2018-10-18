const discord = require("discord.js");

var output = '';
var nextDice = '';
var setIndex = 0;

module.exports.run = async (bot, message, args) => {
	if (args === null || args === '') {

		var roll = getRandomArbitrary(1, 100);
		output = lookupDeckCardDrew(roll);
	}
	else {
		output = "nothing to do!";
	}
	message.channel.send("```html\nDrawing a card from the 'Deck of Many Minor Things!'\n" + output + " \n```");
};


module.exports.help = {
	name: "deck"
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lookupDeckCardDrew(card) {
    var numberArray = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100];
    var resultArray = [
        "9 of Hearts: \nYour character will experience a happy mood until the next long rest.",
        "9 of Diamonds: \nYour character will experience a focused mood until the next long rest.",
        "9 of Clubs: \nYour character will experience an anxious mood until the next long rest.",
        "9 of Spades: \nYour character will experience an angry mood until the next long rest.",
        "10 of Hearts: \nYour character will change into the opposite gender until the next long rest.",
        "10 of Diamonds: \nYour character will change into a random race until the next long rest.",
        "10 of Clubs: \nYour character will switch bodies with a random party member until the next long rest.",
        "10 of Spades: \nYour character will change into the last humanoid enemy they faced until the next long rest.",
        "Jack of Hearts: \n Gain a + 2 bonus to physical stats until the next long rest.",
        "Jack of Diamonds: \nGain a + 2 bonus to mental stats until the next long rest.",
        "Jack of Clubs: \nSuffer a - 2 penalty to mental stats until the next long rest.",
        "Jack of Spades: \nSuffer a - 2 penalty to physical stats until the next long rest.",
        "Queen of Hearts: \nAll physical damage caused by your character becomes Radiant damage until the next long rest.",
        "Queen of Diamonds: All physical damage caused by your character becomes Force damage until the next long rest.",
        "Queen of Clubs: \nAll physical damage caused by your character becomes Poison damage until the next long rest.",
        "Queen of Spades: \nAll physical damage caused by your character becomes Necrotic damage until the next long rest.",
        "King of Hearts: \nFind a healing potion of level 1d4 on the ground.",
        "King of Diamonds: \nFind 5d10 GP on the ground.",
        "King of Clubs: \nLose 5d10 GP to the Abyss.",
        "King of Spades: \nFind a weapon poison of level 1d4 on the ground.",
        "Ace of Hearts: \nStockpile a single nat 20 roll to use on any roll you wish in the future.",
        "Ace of Diamonds: \nStockpile a single nat 1 roll to use on any roll you wish in the future.",
        "Ace of Clubs: \nThe DM stockpiles a single nat 1 roll to use on any roll they wish in the future.",
        "Ace of Spades: \nThe DM stockpiles a single nat 20 roll to use on any roll they wish in the future.",
        "JOKER: \nFlip your character's stats upside down until the next long rest. STR and CHA flip, DEX and WIS flip, and CON and INT flip."
    ];

    for (var i = numberArray.length; i >= 0; i--) {
        if (card <= numberArray[i]) {
            setIndex = i;
        }
    }
    return resultArray[setIndex];
}