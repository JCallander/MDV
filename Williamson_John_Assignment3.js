// JavaScript Document


//Williamson, John
//SDI 1306
//Project 3
//instructor : Lewis, Lee


var myName = "Johan The Warrior of Awesomeness";
weapon = {
	sword: {
		name: "Sword of Stellar Performances",
		hit: 12,
		power: (Math.round(Math.random()*6))
	},
	bow: {
		name: "Bow of Undead Slaying",
		hit: 40,
		power: (Math.round(Math.random()*8)+40)
	}
};
var dragonFights = 1;
var dragon = "Dragon";
var bow = "Bow";
var arrow = "Arrows";
var sword = "Sword of Stellar Performances";
var myLife = 200;
var myHalfLife = 100;
var myMinLife = 1;
var tired = "so tired";
var bored = true;
var swordHit = 12;
var swordPow = (Math.round(Math.random()*6)); //math method
var dragonLife = 93;
var dragonMinLife = 12;
var myDefense = 19;
var falseResponse = "I will be doing my homework.";
var trueResponse = "There is never anything to do around this place.";
var goOnBro = "Deciding that I feel well enough to continue I set off down the tunnels to see what I can explore."
var healUp = "I should probably heal myself before I move on."
var monsters = {
		beasts: {
			name: ["Really Big Spider", "Cyclops", "Undead Baboon"],
			health: [60, 58, 38],
			type: ["Arachnid", "Humanoid", "Undead" ]
		}
	};

var monsterNamesLength = monsters.beasts.name.length;
var monsterNames = monsters.beasts["name"];


var imBored = function(bored){
	if(bored == true)
		{
		console.log(trueResponse);
		}
	else
		{
		console.log(falseResponse);
		}
}

var status = function(leave, done){
	var done = ' "I think I\'m done here" '
	var leave = ' "I should get home before it gets too late." '
		finished = done + " " + leave
		console.log(finished);
		return finished	
}

var living = function(myLife, myHalfLife){
	var imHealthy;
	if(myLife > myHalfLife){
		console.log(goOnBro);
		imHealthy = true
	}
	else{	
		console.log(healUp);
		imHealthy = false
	}
	return imHealthy
}

var drogo = function(dragonLife){
	do{
	var swordAttack = (Math.round(Math.random()*6)+12);
	var dragonHit = (Math.round(Math.random()*6)+28);
		dragonLife = dragonLife-swordAttack;
		console.log("I hit the Dragon for " + swordAttack);
		dragonAttack = dragonHit-myDefense;
		myLife = myLife - dragonAttack;
		console.log("The Dragon hit me for " + dragonAttack);
	}
				while((dragonLife >= dragonMinLife)&&(myLife >= myMinLife));
		
		if(dragonLife <= 0 ){
			console.log("The dragon has perished Leaving behind a " + bow + " and some " + arrow);
		}
		else{	
			console.log("After my attacks, the "+ dragon + " only had " + dragonLife + " hit points left and I had " + myLife + " Remaining.");
			console.log("deciding that he prefered to live, the " + dragon + " fled the scene, leaving behind a " + weapon.bow.name + " and some " + arrow + ".");
		}
	return dragonLife;
	return myLife;
	return weapon.bow;
}

var monster = function(){
	for (var m = 0; m < monsterNamesLength; m++){
		var bowShot = (Math.round(Math.random()*8)+40);
		console.log("I shot the " + monsterNames + " with the bow doing " + bowShot + " damage.");
	};
	{
		console.log("I managed to kill the " + monsters.beasts.name[2]);
		monsters.beasts.name.pop()
		monsters.beasts.type.pop()
		monsters.beasts.health.pop()
		return monsters;
	};
}

console.log("Hello. My name is " + myName);
imBored(bored);
console.log("One day I decided I would finally go check out the caves near my home. Almost immediately upon entering the cave I ran into a " + dragon + "!");
console.log("I figured since I had come this far I would go ahead and accept the challenge presented to me and I drew my " + sword);
var myOutcome = drogo(dragonLife);
console.log("I retrieve the items the " + dragon + " dropped.");
var myLiving = living(myLife, myHalfLife);
console.log("While I was exploring a room I looked up and saw " + monsterNames + " heading my way.");
var myMonsters = monster();
console.log("the " + myMonsters.beasts.name + " ran away.");
console.log("after all this excitement I decide that I am tired. so I say to myself.");
var imComplete = status();