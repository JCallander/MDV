//alert("JavaScript works!");

//This set turns each word in a string into an array based off of the spaces.
/*
var myString = "Man this is some hard work.";
var myTextArray = myString.split(' ');
console.log(myTextArray);

//This set will not let you enter anything but a phone number

var myString = prompt("Please enter Your Phone number", "xxx-xxx-xxxx");
function checkCharType(charToCheck){
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
	
	else if (charCode <="0".charCodeAt(0) || charCode >= "9".charCodeAt(0)){
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


*/

//couldn't get this one figured out. moving on to different one. 
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
 
 /*
//This set will round the decimal to a provided number of places.

var decimalPoint = function (num,places) {
        return Number(num.toFixed(places));
    };
console.log(decimalPoint(19.7869,2));

*/