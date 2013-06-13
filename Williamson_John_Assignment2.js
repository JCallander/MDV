// JavaScript Document

var myName = "Johan The Warrior of Awesomeness"
var dragonFights = 1
var monsters = [
	" Really Big Spider",
	" Cyclops", 
	" Undead Baboon"
];
var dragon = "Dragon"
var bow = "Bow"
var arrow = "Arrows"
var sword = "Sword of stellar performances"

var drogo = function(dragonLife, swordAttack)
{
	var minLife = 15
	while(dragonLife >= minLife){
	var dragonLife;
		dragonLife = dragonLife---swordAttack;
		console.log("I hit the Dragon for " + swordAttack);
	
	return dragonLife
	
	}
}

var monster = function(){
	for (var m = 0; m < monsters.length; m++){
		console.log("I shot the " + monsters[m]);
	};
		{
			console.log("I managed to kill the" + monsters[2])
			monsters.pop();
		
			return monsters
	};
}

console.log("Hello. My name is " + myName)
console.log("One day I decided I would finally go check out the caves near my home. Almost immediately upon entering the cave I ran into a " + dragon + "!")
console.log("I figured since I had come this far I would go ahead and accept the challenge presented to me and I drew my " + sword)
var myOutcome = drogo(37,28)
console.log("After my attack, the "+ dragon + " only had " + myOutcome + " hit points left, so he dropped a " + bow + " and some " + arrow + " then fled the scene.")
console.log("I pick up the " + bow + " and " + arrow + " just in time to see the " + monsters + " arrive")
var myMonsters = monster()

console.log("the " + myMonsters + " ran away.");