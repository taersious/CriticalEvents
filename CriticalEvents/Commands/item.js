const discord = require("discord.js");

var output = '';
var action = '';
var nextDice = '';
var setIndex = 0;
var argsArray = ["deck", "wand-of-wonder"];

module.exports.run = async (bot, message, args) => {
	if (args !== null && args !== '') {

		var thisArg = args.toString().toLowerCase();
		if (argsArray.includes(thisArg)) {
			switch (thisArg) {
				case "deck":
					action = "Drawing a card from the 'Deck of Many Minor Things!'\n"
					output = lookupDeckCardDrawn();
					break;
				case "wand-of-wonder":
					action = "Pointing the 'Wand of Wonder!'\n"
					output = lookupWandOfWondersEffect();
					break;
			}
		}
		else {
			message.channel.send("That item was not found in the Tome of Great Artifacts.");
			return;
		}
	}
	else {
		output = "In order to research that item in the Tome of Great Artifacts, you must supply a valid item name.";
	}
	console.log(action + output);
	//message.channel.send("```html\n" + action + output + " \n```");
};


module.exports.help = {
	name: "item"
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lookupDeckCardDrawn() {
    var roll = getRandomArbitrary(1, 100);
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
        if (roll <= numberArray[i]) {
            setIndex = i;
        }
    }
    return resultArray[setIndex];
}

function lookupWandOfWondersEffect() {
    var roll = getRandomArbitrary(1, 100);
    var numberArray = [5, 10, 15, 20, 25, 30, 33, 36, 46, 49, 53, 58, 62, 65, 69, 79, 84, 87, 90, 95, 97, 100];
    var resultArray = [
        "You cast slow.",
        "You cast faerie fire.",
        "You are stunned until the start of your next turn, believing something awesome just happened.",
        "You cast gust of wind.",
        "You cast detect thoughts on the target you chose.If you didn't target a creature, you instead take 1d6 psychic damage.",
        "You cast stinking cloud.",
        "Heavy rain falls in a 60 - foot radius centered on the target.The area becomes lightly obscured.The rain falls until the start of your next turn.",
        "An animal appears in the unoccupied space nearest the target.The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01–25, a rhinoceros appears; on a 26–50, an elephant appears; and on a 51–100, a rat appears.",
        "You cast lightning bolt.",
        "A cloud of 600 oversized butterflies fills a 30‐foot radius centered on the target.The area becomes heavily obscured.The butterflies remain for 10 minutes.",
        "You enlarge the target as if you had cast enlarge / reduce.If the target can't be affected by that spell, or if you didn't target a creature, you become the target.",
        "You cast darkness.",
        "Grass grows on the ground in a 60‐foot radius centered on the target.If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
        "An object of the GM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
        "You shrink yourself as if you had cast enlarge / reduce on yourself.",
        "You cast fireball.",
        "You cast invisibility on yourself.",
        "Leaves grow from the target.If you chose a point in space as the target, leaves sprout from the creature nearest to that point.Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
        "A stream of 1d4 × 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
        "King of Spades: \nFind a weapon poison of level 1d4 on the ground.",
        "A burst of colorful shimmering light extends from you in a 30‐foot radius.You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute.A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
        "The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.",
        "If you targeted a creature, it must make a DC 15 Constitution saving throw.If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the greater restoration spell or similar magic."
    ];

    for (var i = numberArray.length; i >= 0; i--) {
        if (roll <= numberArray[i]) {
            setIndex = i;
        }
    }
    return resultArray[setIndex];
}

/* Bag of Beans
 * d100	Effect
01	5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.
02-10	A geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (GM's choice) 30 feet into the air for 1d12 rounds.
11-20	A treant sprouts. There's a 50 percent chance that the treant is chaotic evil and attacks.
21-30	An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours.
31-40	A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).
41-50	1d6 + 6 shriekers sprout
51-60	1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM's choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke.
61-70	A hungry bulette burrows up and attacks.
71-80	A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM's choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.
81-90	A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.
91-99	A pyramid with a 60-foot‐square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord's lair, and its sarcophagus contains treasure of the GM's choice.
00	A giant beanstalk sprouts, growing to a height of the GM's choice. The top leads where the GM chooses, such as to a great view, a cloud giant's castle, or a different plane of existence.
 * */

class Item {

}