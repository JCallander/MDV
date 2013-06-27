//alert("JavaScript works!");


//Williamson, John
//SDI 1306
//Project 4
//instructor : Lewis, Lee

//This set turns each word in a string into an array based off of the spaces.

var myString = "Man this is some hard work.";
var myTextArray = myString.split(' ');
console.log(myTextArray);

//This set will not let you enter anything but a phone number. Kinda annoying if not held in check. Hence why it is commented out.
/*
			var myString = prompt("Please enter Your Phone number", "xxx-xxx-xxxx");
function checkCharType(charToCheck) {
	var returnValue = "O";
	var charCode = charToCheck.charCodeAt(0);
	
	if (myString.length !== 12){
		alert("Enter Your Phone Number");
		location.reload();
	};
	if (myString.charCodeAt(3) !== 45){
		alert("Format should be ###-###-####");
		location.reload();
	};
	if (myString.charCodeAt(7) !== 45){
		alert("Format should be ###-###-####");
		location.reload();
	};	
	if (charCode <="0".charCodeAt(0) || charCode >= "9".charCodeAt(0)){
		alert("Enter a real phone number");
		location.reload();
	};
	return true;
}
switch (checkCharType(myString))
{
	default:
		alert("Thank You");
}
*/
//This set will tell you if the value of something is of the correct pattern. 

var isANumber = true
function phoneNumber(phone){
var areaCode = phone.substring(0,3);
var dash1 = phone.substring(3,4);
var cityCode = phone.substring(4,7);
var dash2 = phone.substring(7,8);
var lastFour = phone.substring(8,12);

 if (isNaN(areaCode) || isNaN(cityCode) || isNaN(lastFour) || dash1 != "-" || dash2 != "-") {
        isANumber = false;
		return isANumber;
  }
}
phoneNumber("313-111-3341");
console.log(isANumber)

//This set will verify that an email address is in the correct format.

var anEmail = true;
function validateEmail(email){
var e = email;
var atSign = e.indexOf("@");
var dotCom = e.lastIndexOf(".");
if (atSign < 1 || dotCom < atSign + 2 || dotCom + 2 >= e.length){
  anEmail = false;
  return anEmail;
  };
}
validateEmail("john@doe.com");
console.log(anEmail);

//This set will check to see if a web address begins with "http:" or "https:"

var anURL = false;
function validWebSite(url){
var u = url;
var prefix = u.substring(0,(u.indexOf("/")));
if (prefix.match("http:") || prefix.match("https:")){
  anURL = true;
  return anURL;
  };
}
validWebSite("https://www.johan.com");
console.log(anURL);

//This set will split the words in a string and then capitalize the first
//letter in each word. 

var result = "";
var splitUpper = function (words) {
	var cut = words.split(" ");	
	for (var i = 0; i < cut.length; i++) {
		var betterWords = cut[i].replace(cut[i].charAt(0),(cut[i].charAt(0)).toUpperCase());
		result = result.concat(betterWords + " ");
	};
	return result;
}
splitUpper("Man I am going to need to take a break soon.")
console.log(result)




//couldn't get this one figured out. moving on to different one will return when I have time.
		/*
var cut = "";
var result = "";
var separatorSwapper = function (string,oldChar,newChar){
	var cut = string.split(",")
	var newChar = string.lastIndexOf("\"");
	var oldChar = string.lastIndexOf("\"")-1
	var newString = string.replace('newChar','changeTo');
	var result = newChar
	return result
	}
	console.log(result)

separatorSwapper("a,b,c",',','/')
//console.log(separatorSwapper)


var myString = ("a,b,c", "\," , "/");
var myTextArray = myString.split(' ');
console.log(myTextArray);
			*/
 
 
//This set will round the decimal to a provided number of places.

var decimalPoint = function (num,places) {
        return Number(num.toFixed(places));
    };
console.log(decimalPoint(19.7869,2));


//This set took me a while but I finally was able to get it to only add the numbers.

theArray = [5,"Japan",10,"Bob",15,"Home",20,"25"];
var totalValOfNumbers = function (array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i]/1 === array[i]) {
			total += array[i];
		};
	};
	return total;
};

console.log(totalValOfNumbers(theArray));

//It took me close to two days to figure out that you were trying to get a true or false answer to this question. 
//This set will determine if a number is greater or less than another number then if it is within a predetermined percent of said number.

var fuzzy = function (numOne,numTwo,percent) {
		var percentage = (numOne/numTwo) * 100;
		if ((numOne >= numTwo && percentage >= percent) || (numOne < numTwo && percentage < percent)) {
			return false;
		} else {
			return true;
		};
	};
	
console.log(fuzzy(10,20,50));

//I used this one several times while trying to figure out the array total question.
//This set will take a string version of a number an make it a number.

 var stringToNumber = function (number) {
	return Number(number);
};

console.log(stringToNumber("5678"));

//I am just separrating these two so that i am not graded as if they are one.
//Plus I am not one hundred percent confident that I am using this one
//correctly	

var myString = "1234";
parseInt(myString);

console.log(myString)


