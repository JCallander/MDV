// JavaScript Document


//Williamson, John
//SDI 1306
//Project 3
//indtructor : Lewis, Lee

/*
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
var monsters = {
	spider: {
		name: "Really Big Spider",
		health: 60,
		type: "Arachnid"
	},
	Cyclops: {
		name: "Cyclops",
		health: 58,
		type: "Humanoid" 
	},
	baboon: {
		name: "Undead Baboon",
		health: 38,
		type: "Undead"
	}
};

var monsterNames = "A " + monsters.spider.name + ", " + monsters.Cyclops.name + ", and an " + monsters.baboon.name;

var imBored = function(bored){
	if(bored == true)
		{
		console.log("There is never anything to do around this place.");
		}
	else
		{
		console.log("I will be doing my homework.");
		}
}

var status = function(myName, tired){
	var string1 = ' "I think I\'m done here" '
	var string2 = ' "I should get home before it gets too late." '
		console.log(string1 + " " + string2)	
}

var living = function(myLife, myHalfLife){
	var imHealthy;
	if(myLife > myHalfLife){
		console.log("Deciding that I feel well enough to continue I set off down the tunnels to see what I can explore.");
		imHealthy = true
	}
	else{	
		console.log("I should probably heal myself before I move on.");
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
}

*/
var handleData = function (json) {
	console.log(json);
	};
	handleData(json2)
/*
{
	for (var m = 0; m < json.monsters.length; m++){
		var bowShot = (Math.round(Math.random()*8)+40);
		var monsters = json.monsters[m];
		console.log("I shot the " + monsters.name + " with the bow doing " + bowShot + " damage.");
	};
	{
		console.log("I managed to kill the" + monsters[2]);
		monsters.pop();	
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
console.log("While I was exploring a room I looked up and saw " + monster + " heading my way.");
var myMonsters = monster(json);
console.log("the " + myMonsters + " ran away.");
console.log("after all this excitement I decide that I am tired. so I say to myself.");
status();
*/
