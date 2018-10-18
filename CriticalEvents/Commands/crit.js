const discord = require("discord.js");

var output = '';
var nextDice = '';
var setIndex = 0;

module.exports.run = async (bot, message, args) => {
    if (args !== null && args !== '')
    {
        if (args.toString() !== 'hit' && args.toString() !== 'miss') {
            message.channel.send("Command should match pattern '-crit <hit\\miss>'");
            return;
        }
        var roll = getRandomArbitrary(1, 100);
        output = "Rolled a " + roll.toString() + " - ";
        if (args.toString() === 'hit') {
            output += lookupCritHit(roll);
        }
        if (args.toString() === 'miss') {
            output += lookupCritMiss(roll);
        }
    }
    message.channel.send("```html\nGenerating Critical " + args.toString().trim().toUpperCase() + " Event! \n" + output + " \n```");
};

module.exports.help = {
	name: "crit"
};


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lookupCritHit(hit) {
    var numberArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    var resultArray = [
        "Bleeding Wound\nThe target suffers an additional 1 point of damage for every damage die your weapon uses at the start of its turn until healed. (1 for d4 or less, 2 for d6, 3 for d8, etc / 2 damage for 2d4 or less, 4 for 2d6, etc. Slashing weapons deal an additional 1 point of bleed per round.)",
        "Cursed\nYour target is cursed. The next attack against this target has advantage. The next time the target is hit, it will suffer an additional 1[w] necrotic damage",
        "Heavy Hit\nThe attack sends the target flying off its feet. Medium or smaller creatures are knocked prone 1D2 * 5 feet away. Targets that are large or more give advantage to all attacks until the creatures next round, but do not move. Bludgeoning weapons add 5 feet distance moved. Save vs Con DC 5 + (1 / 2 DMG) or become dizzy for 1d4 rounds or until healed.",
        "Fancy Moves\nDue to your great showmanship, your attack gives a 1d4 inspiration die to all allies who witnessed the attack. If no one witnessed the attack, you may inspire yourself.",
        "Ruthless Assault\nYou may immediately make another attack against any target within your weapons range.",
        "Gut Shot\nYour target immediately suffers 1 point of exhaustion. Bludgeoning weapons add 1d6 damage.",
        "Get Buffed\nChoose 1) Gain a free extra move 2) Gain a bonus action 3) Receive 1 full extra H.D. of H.P. until the end of combat 4) Immediately gain 1d6 initiative plus dex mod, if any. If this moves you to be faster than your current target, strike again!",
        "Disarmed\nYou knock your target's weapon from their grip in a random direction 1d3*5 feet away, causing 1d6 durability per 10 points of damage done. If the target has no weapon, you deal 1[W] to a limb. Piercing weapons impale the limb, grappling them and cause an additional 1d6 damage.",
        "Staggered\nYour attack has sent your opponent reeling, as they lose 1d6 initiative points, effective immediately. (May be no lower than 1.)Any subsequent attacks against the same target have advantage until the beginning of its next round. Target suffers disadvantage to all saving throws until the beginning of his next round.",
        "Leg Injury\nThe target suffers a leg injury slowing its movement by half for the rest of the encounter. Piercing attacks add 1d6 damage.",
        "Mysterious Stranger\nA projectile comes out of nowhere, striking your target for 1d8 damage.",
        "Sapped Will\nThe target of your attack is losing hope. For the remainder of this encounter, you have advantage on all attacks against this target. If applicable, the target must choose another opponent; save vs Wis DC 5 + (1 / 2 DMG) or target must disengage.",
        "Damaged Defenses\nThe armor or shield the target is using loses 1d10 durability per 10 damage done. If target only has natural defense, it takes 1d8 damage and loses 2 points of AC until healed. Bludgeoning weapons also knock any shield out of the opponent's hand, or inflict an additional 1d6 damage if no shield. Piercing attacks add 1d6 additional damage.",
        "Elemental Influx\nFor unknown reasons, a random element empowers your attack, adding 1d10 damage. Spells that affect a single target explode on impact, damaging everything within 5 feet(half damage to caster).",
        "Tactical Domination\nYou gain a tactical advantage against your target. They suffer disadvantage to all rolls against you for the remainder of the combat, or until you disengage.",
        "Enter the Matrix\nIn a sudden burst of speed, you strike twice. This attack is split into two attacks, inflicting 1[w] damage each, adding all modifiers to both. The attacks may be split among two targets in range of the weapon. ",
        "Full Impact\nYour attack does maximum damage on every die rolled. If applicable, spells may choose either: 1) Duration is doubled or 2) The target has disadvantage on saves. Bludgeon weapons automatically cause ‘Heavy Hit’.",
        "Head Shot\nTarget takes an additional 1[W](2[W] for piercing attacks) and must make a DC 5 + 1 / 2 dmg save vs Constitution or be stunned for 1 round. On a saved roll, the target is blinded by blood in the eye for 1 round.",
        "Executioner\nThis attack adds an additional 2[W] damage. Slashing weapons require the target to save vs. the highest of Dexterity or Constitution DC 5 + 1 / 2 dmg. On a failed save, the attack decapitates the victim(or severed limb, GM’s choice).",
        "Devastated\nRoll twice and apply both results. If this result is rolled again, add an additional 1[W] damage to this attack and roll two more times."
    ];

    for (var i = numberArray.length; i >= 0; i--) {
        if (hit <= numberArray[i]) {
            setIndex = i;
        }
    }
    return resultArray[setIndex];
}

function lookupCritMiss(miss) {
    var index = 0;
    var numberArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    var resultArray = [
        "Equipment Damage\nSmashing into a shield, another weapon, heavy armor, or even a nearby wall or floor, your weapon / spell focus immediately suffers 1d6 durability damage.",
        "Distracted\nWhile attempting to recover from your failed attack, you find yourself distracted.  Any adjacent enemies may take a free attack of opportunity.  If this attack was ranged, lose 1d6 initiative.",
        "Fumble\nDC 15 save vs. the controlling stat used to make your attack or you drop your weapon / spell focus. If you were casting a spell, you drop your focus or pouch. If you roll another 1 while attempting to save, you injure yourself with your own attack, taking normal weapon / spell damage.",
        "Wrong Team\nImmediately re-roll your attack against an adjacent ally or an ally within the path of your ranged attack.",
        "Enemy Inspired\nAny enemies who witnessed your attack gain a 1d6 inspiration die, usable during this encounter only.",
        "Tactical Retreat\nMake a DC 10 save vs Wis or immediately move 10 feet in any direction away from your target. If you roll a 1 on this save, move your maximum movement instead. If all movement has been used this round, you must use your bonus action and reaction to complete this move. If unable, fall prone instead.",
        "Trip\nDC 10 save vs Dexterity or fall prone. On a successful save, you catch yourself but give advantage to all attacks against you until your next turn. If you roll another 1 while attempting to save, you hit your head and fall unconscious for 1d4 rounds or until you take damage.",
        "Loss of Control\nFrenzied, panicked, or simply overly excited. You randomly move into an adjacent square. This move will invoke opportunity attacks. Make a DC save vs Dex or suffer half 1[W] damage.",
        "Overcompensation\nYou suffer -2 AC until the start of your next round.",
        "Exhausted\nAny unspent movement is lost this round. Make a DC 8+1 per combat round save against Constitution or increase your exhaustion level by 1.",
        "Enemy Reinforcements\nA small band of reinforcements arrive. This should be between 1-3 allies to the enemy you have missed.",
        "Wardrobe Malfunction\nYour armor or clothing fails to remain where it should. Lose 1 AC per armor type(1 AC light, 2 AC medium, 3 AC heavy) until you are able to spend the time to fix it (1 round for light, 2 for medium, 3 for heavy). If you wear no armor, you give all attackers advantage against you until your next round. (may have reversed effects for comic relief at GM discretion).",
        "Pulled up lame\nMake a DC 12 save vs Constitution or lose half your movement until a short rest or you are healed. On a save, your movement is halved until the end your next round. If you roll a 1 while trying to save, you also fall prone.",
        "Miscellaneous Item Slips!\nA random stowed item slips loose and falls (1d3-1)*5 feet in a random direction away from you. If appropriate, the item suffers 1d6 durability. The DM may require a perception check to determine whether or not you know which item was lost.",
        "Miss Fortune\nA projectile streaks out of nowhere, striking the attacker for 1d10 damage.",
        "Something Happens!\nConsult DMG screen for details...",
        "Cursed\nYou are cursed, giving the next attack against you advantage. The next time you are hit during this combat, you suffer an additional 1[W] in necrotic damage.",
        "Inconsolable\nMake a DC 12 save vs Charisma or suffer disadvantage against this target for the rest of the combat due to grief, being a sore loser, or fury over the failed attack. If the save succeeds, you suffer disadvantage against this target until the end of your next turn. If you roll a 1 while attempting to save, you suffer normal weapon damage (morale failure) and give disadvantage to this target for the rest of the combat.",
        "Poor Tactics\nYour enemy has seen through your maneuvers. The target of your attack has advantage against you until you disengage.",
        "Double Trouble\nRoll twice and take both results. If this result is rolled again, a random piece of armor, weapon, or gear lose 1d6 durability. Roll two more times."
    ];
    for (var i = numberArray.length; i >= 0; i--) {
        if (miss <= numberArray[i]) {
            index = i;
        }
    }
    return resultArray[index];
}