//alert("JavaScript works!");

//This set turns each word in a string into an array based off of the spaces.

var myString = "Man this is some hard work.";
var myTextArray = myString.split(' ');
console.log(myTextArray);

//This set will not let you enter anything but a phone number
/*
var myString = prompt("Please enter Your Phone number", "xxx-xxx-xxxx");

function checkCharType(charToCheck){
	var returnValue = "O";
	var charCode = charToCheck.charCodeAt(0);
	
	if (myString.length !== 12){
		alert("Enter Your Phone Number")
		location.reload()
	}
	if (myString.charCodeAt(3) !== 45){
		alert("Format should be ###-###-####")
		location.reload()
	}
	if (myString.charCodeAt(7) !== 45){
		alert("Format should be ###-###-####")
		location.reload()
	}
	
	else if (charCode <="0".charCodeAt(0) || charCode >= "9".charCodeAt(0)){
		alert("Enter a real phone number");
		location.reload();
	}
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
        isANumber = false
		return isANumber
  }
}
phoneNumber("313-111-3321")
console.log(isANumber)

