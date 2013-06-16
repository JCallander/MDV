// JavaScript Document


//Williamson, John
//SDI 1306
//Project 3
//indtructor : Lewis, Lee


var myName = "Johan The Warrior of Awesomeness"
var dragonFights = 1
var dragon = "Dragon"
var bow = "Bow"
var arrow = "Arrows"
var sword = "Sword of stellar performances"
var myLife = 400
var myHalfLife = 200
var tired = "so tired"
var bored = true
var monsters = [
	" Really Big Spider",
	" Cyclops", 
	" Undead Baboon"
];

var imBored = function(bored)
{
	if(bored = bored){
		console.log("There is never anything to do around this place.");}
	else{
		console.log("I will be doing my homework.");
	}
}

var status = function(myName, tired){
	var string1 = ' "I am done here" '
	var string2 = ' "I think I will head home now." '
		console.log(string1 + " " + string2)
	
}

var living = function(mylife, myHalfLife)
{
	var minLife = 0
	if(myLife > myHalfLife){
		console.log("I feel well enough to continue");}
	else{
		console.log("I had better go get some rest");
	}
	return living
}

var drogo = function(dragonLife, swordAttack)
{
	var minLife = 15
	while(dragonLife >= minLife){
	var dragonLife;
		dragonLife = dragonLife-swordAttack;
		console.log("I hit the Dragon for " + swordAttack);
	}
	return dragonLife
}

var monster = function(){
	for (var m = 0; m < monsters.length; m++){
		console.log("I shot the " + monsters[m] + " with the bow.");
	};
		{
			console.log("I managed to kill the" + monsters[2])
			monsters.pop();
		
			return monsters
	};
}

console.log("Hello. My name is " + myName)
imBored(bored)
console.log("One day I decided I would finally go check out the caves near my home. Almost immediately upon entering the cave I ran into a " + dragon + "!")
console.log("I figured since I had come this far I would go ahead and accept the challenge presented to me and I drew my " + sword)
var myOutcome = drogo(97,28)
console.log("After my attack, the "+ dragon + " only had " + myOutcome + " hit points left, so he dropped a " + bow + " and some " + arrow + " then fled the scene.")
living(400,200)
console.log("I pick up the " + bow + " and " + arrow + " just in time to see the " + monsters + " arrive")
var myMonsters = monster()
console.log("the " + myMonsters + " ran away.");
console.log("after all this excitement I decide that I am tired. so I say to myself.")
status()