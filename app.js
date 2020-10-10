document.write("Exercises<br>")

console.log('hi');

variable1 = 3;

//variablexy; //give an error

var variable2; //var keyword let js know the variable2 is a variable, not an object
				//var keyword inside a function tell js the variable has local scope

variable3 = undefined;

variable4 = null;  //typeof variable4 : "object"

var variable5;
var variable6=null;
console.log("variable4==variable5 "+(variable6==variable5));  //undefined and null are considered equal

//Logical Operators
console.log("1=='1' is "+(1=='1'));
console.log("1!=='1' is "+(1!=='1')); //true  //not equal in value and type
console.log("1==='1' is "+(1==='1'));

var p=2;
console.log("result: " + (p-->1||(++p>2)));
console.log("p="+p);

console.log("Bitwise shift left operator "+(3<<2)); //0011 move left 2 places is 1100 
console.log("Operator precedence bitwise shift operator: "+(3+1<<2));  //plus opertor comes first

p2 = false;
//p3 &= p2; //error: p3 is not defined
p3 = true;
p3 &= p2;
console.log("p3 = "+p3); // & is a bitwise operator, not a logical operator

console.log("p3 = "+(p3 |= p2));

console.log(p3 instanceof(Boolean));
console.log(p3 instanceof(Number));
console.log(typeof p3);

MyVar2=ThatVar=OtherVar=0;  //we can string assignments together, setting more than one variable at a time

//MyVar3, MyVar4 = 1;  //MyVar3 is not defined


//The WITH keyword (with statement)

var question = "Javascript is hard?"
with(question){
	console.log("The question length is "+ length);
	console.log("Upper case: "+ toUpperCase());
} // the variable is not referenced by the console.log



//Objects and OOP
//everything in JS is an object, including functions
function Person(first, last, age){
	this.name= {
		firstname: first,
		lastname:last
	} 
	this.age = age;
	this.getName = function(){
		return this.name.firstname + ' '+ this.name.lastname
	}
}

function Teacher(first, last, age, classTaught, school){
	this.teacherInfo = Person;
	this.teacherInfo(first, last, age);
	this.classTaught = classTaught;
	this.school = school;
}

Teacher.prototype = new Person();

myTeacher = new Teacher("Rosie", "Barret", "33", "3rd", "CNS");
console.log(myTeacher);

let p1 = new Person("Joe", "Gibbins", 50);

console.log('Person full name: '+p1.getName());

//creating a new function or property for Person object
Person.prototype.getAge = function(){return this.age};
console.log('Person age: '+p1.getAge());

var dog = new Object();
dog.name = "Cesar"
dog.gender = "male";
console.log("Dog name is "+ dog.name+ " and gender is "+ dog.gender)
document.writeln("<BR>");

for (x in dog){
	document.writeln(dog[x]+ "<BR>");
}

/*Person.prtotype.getFullName= function(){

	return (this.name); 
};*/


//Strings
var string2 = "Hello World!";
console.log("Strings");
console.log(".substr(): "+string2.substr(2,3));
console.log(".substring(): "+string2.substring(2,3));
console.log(".trim(): "+string2.trim());
console.log(".bold(): "+string2.bold());


MyVar= "12345";  //string
MyVar= MyVar-345;  //number

MyVar = "12345"+ 678  //string
MyVar = Number("12345") + 678


MyVar = Number("Num")+23;  //NaN

myNum = 123.4567890;
document.writeln("MyNum = "+myNum+"<BR>");
//to Preccision will round up or down 
document.writeln("This is the result of myNum.toPrecision(): "+ myNum.toPrecision()+"<BR>");
document.writeln("This is the result of myNum.toPrecision(2): "+ myNum.toPrecision(2)+"<BR>");
document.writeln("This is the result of myNum.toPrecision(3): "+ myNum.toPrecision(3)+"<BR>");

document.write("This is the result of toFixed(2): "+ myNum.toFixed(2)+"<BR>");

document.write("myNum toLocaleString(): "+ myNum.toLocaleString()+"<BR>"); //123.457

document.writeln(myNum+"<BR>");
document.writeln("<BR>");




//Date and Time
date1 = new Date();
//alert(date1);

var lessonDate = new Date("August 2, 1976");

var birth = new Date("Marc 0003 1975");

var birth2 = new Date("31 03 1975");  //invalid date

var birth3 = new Date("03 31 1975")

var newDate = new Date("");  //newDate is not defined

var dates = [lessonDate, birth, birth2, birth3];

dates.push(new Date("Apr 03 2020"));

var datesSorted = dates.sort(); //"Fri Apr 3 2020" comes first, then "Invalid Date"

var newDate2 = new Date("");

//test in console if newDate == newDate2  //false

var birth4 = new Date("000003 00031 01975");
//test in console if birth3 == birth4  // false

var lessonDateDay = lessonDate.getDate();
var lessonDateMonth = lessonDate.getMonth(); //7
var lessonDateYear = lessonDate.getYear();  //76  //deprecated - DO NOT USE
var lessonDateYear2 = lessonDate.getFullYear();

var lessonDateDayOfWeek = lessonDate.getDay(); //1 //0 represents Sunday

var todayMilliseconds = date1.getMilliseconds(); //0-999

var lessonDateToString = lessonDate.toString();

var lessonDateHere = lessonDate.toLocaleDateString();  //  8/2/1976

var lessonDateEngland = lessonDate.toLocaleDateString('en-gb');  //  2/8/1976

var lessonDateUS = lessonDate.toLocaleDateString('en-us');  //  2/8/1976

//setting birth4 (Mar 31 1975)
birth4.setDate(birth4.getDate()+30); //plus 30 days  //Apr 30 1975

var birthElaine = new Date("Aug 05 1976");
var birthRodrigo = new Date("Mar 30 1975");

var ageDifference = parseInt(birthElaine-birthRodrigo)/(24*60*60*1000);  //494
// birthElaine-birthRodrigo appears in milliseconds

var birthOther = new Date("Aug 05 1976");

//comparing dates
if(birthElaine.getTime()==birthOther.getTime()){
	console.log("comparing Dates: same");
}else{
	console.log("comparing Dates: not same");
}

console.log("birthElaine.getTime() "+birthElaine.getTime());
//getTime() returns the number of milliseconds since 1 January 1970 00:00:00


var x = {};

var y = null;

function changeInput(){
	document.getElementById("h2text").innerHTML= document.getElementById("text").value;

}

document.write("<p> new paragraph ");
//alert(date1.getDay());




var today = new Date();
var birthday = new Date('08 05, 1976 9:00 AM'); //string //birthday= new Date('Aug 05, 1976 9:00 AM');
//birthday = new Date(1970,11, 02); //Parameters(Dec 2nd) month 11: December
document.write("Today: "+today+"<BR>"); 
document.write("birthday.toString(): "+birthday.toString()+"<BR>");
document.write("birthday.toUTCString(): "+birthday.toUTCString()+"<BR>"); // Coordinated Universal Time , same as GMT
document.write("birthday.toLocaleDateString(): "+birthday.toLocaleDateString()+"<BR>");
document.write("birthday.toLocaleDateString('en-gb'): "+birthday.toLocaleDateString('en-gb')+"<BR>");

document.write("Today's day is: "+today.getDate()+"<BR>"); 
document.write("The milisseconds are: "+today.getMilliseconds()+"<BR>"); 

//setting the date
birthday.setYear(1975);
document.write("New birthday: "+birthday+"<BR>");
document.write("New birthday: "+birthday.toLocaleDateString() +"<BR>" );


console.log(Boolean(1));
console.log(Boolean("hi"));
console.log(Boolean(5));
console.log(Boolean());
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Logical Operators
console.log( "is equal in value and type? "+ (1 === '1'));  // is equal in value and type?
console.log("is not equal in value and type? "+ (1 !== '1'));  

console.log(1 == '1');  //true


//Arrays
document.write("<br>Arrays")
MyArray = new Array

MyArray2 = new Array(5)

MyArray2[7]="hi";

console.log("MyArray2.length "+MyArray2.length);

MyArray3 = new Array(123,"hello there",3.21);

MyArray4= ["hi", 44, 4.4]

//Associative Arrays
SoccerTeam = new Array
SoccerTeam['Andy'] = 10
SoccerTeam['Brian'] = 8
SoccerTeam['Cathy'] = 9
SoccerTeam['Ellen'] = 9

document.write("</br>"+ SoccerTeam['Cathy']+ "</br>");

//Other Way to Associative Array
VoleyBallTeam = new Array({
	'Andy': 10,
	'Brian': 8,
	'Cathy': 9,
	'Ellen': 9
})

//Other Way to Associative Array
SquashTeam = {
	'Tracy': 7,
	'Jonathan': 5,
	'Farrel':6,
	'Joe': 8
}

Dogs=['Spaniel', 'Terrier', 'Bulldog'];
Cats = ['Long Hair', 'Short Hair', 'Tabby', 'Farm'];

//Iteration
//for(...in...)
for(index in SquashTeam){
document.write(SquashTeam[index]+"</br>");
}

//forEach()
Dogs.forEach(Info);
function Info(v,i,a){  //value, index, array
document.write("["+ i +"] is "+ v +"<br>")
}

//map()
NumsArray = [4, 81, 25, 9, 49];
Roots = NumsArray.map(Math.sqrt);
document.write("Roots "+Roots+"<br>")


Pets = Cats.concat(Dogs);
document.write(Pets);

document.write("</br>");

document.write(Pets.join('+')+"<br>");

Nums = [99,16,11,66.5,54,23];
Root = Nums.map(Math.sqrt);
document.write("Nums Root "+Root+"<br>");

document.write("Nums " +Nums+"<br>");
document.write("Nums.reverse() " +Nums.reverse()+"<br>");
document.write("Nums.sort() "+Nums.sort()+"<br>");

document.write(Nums.sort()+"<br>");

document.write(Nums.push("chair")+"<br>");
document.write("Nums push + sort() "+Nums.sort()+"<br>");

document.write("Nums.pop() "+Nums.pop()+"<br>"); //push() and then pop() is known as 
										//FILO (First in Last Out) or LIFO (or stack)
document.write("Nums.shift() "+Nums.shift()+"<br>"); //push(), reverse() and then pop() is called
											// FIFO or LILO (or buffer)
document.write("Nums.unshift() "+Nums.unshift("hi")+"<br>");
document.write("Nums " +Nums+"<br>");


for(j in Nums){
	console.log(Nums[j])
	if(Nums[j]=="Tony") break
}

Nums3 = [[5,3],[2,6],[3,0]];
document.write("<br>Nums3 "+Nums3);
document.write("<br>Nums3 sort "+Nums3.sort()+"<br>");

//Sort Numerically
function SortNumerically(a,b){
	return a-b;
}

Nums4= [6,33,20,0,3];
document.write("Nums4 "+Nums4+"<br>");
document.write("Nums4 sorted "+Nums4.sort()+"<br>");
document.write("Nums4 sorted numerically "+Nums4.sort(SortNumerically)+"<br>");
//SortNumeric() without parenthesis because we are telling sort() 
//wich function to use and not passing it the result of calling the function  

Nums5= ["cat", "dog", "horse", "Elaine", "234",123, 1000];
document.write("Nums5 sorted "+Nums5.sort()+"<br>");
document.write("Nums5 sorted numerically "+Nums5.sort(SortNumerically)+"<br>");

//splice()
document.write("Cats "+Cats+"<br>");
Cats.splice(1,2);
document.write("Cats after splice() "+Cats+"<br>");
Cats.push("Siamese");

document.write(Cats.push('Persian')+"<br>");
document.write("Cats "+Cats+"<br>");

Cats.splice(2,0, 'cat1','cat2'); //0 tells splice there are noo elements to be removed
document.write('Cats after splice(2,0, "cat1","cat2") '+Cats+'<br>');

//advanced splicing
//adding and removing elements at the same time
Cats.splice(2,3,"White Ball", "Black");
document.write("Cats after splice(2,3, 'White Ball', 'Black')"+Cats+"<br>")



//Regular Expressions
/*In JavaScript you will use regular expressions mostly in two functions: 
test() and replace(). 
The test() function tells you whether its argument 
matches the regular expression, whereas replace() 
takes a second parameter: the string to replace the text that matches.*/

var str = "This is a sample string";
//re is a RegExp object
var re = /Sample/i;

var re2 = new RegExp("Sample","i");

//check is an array with the words found
// exec() method will give back an array 
var check = re.exec(str);
if(check){  
	console.log("Found a match: yes");
	console.log(check);
}else{
	console.log("No match found");
}

//test() method will return true or false
var check2 = re.test(str);

document.write("<br/>");
document.write("Javascript".bold());

 //if(str){alert("ho")}

console.log("RegExp : "+ re.test(str));



/*string = "new string added"
while(string){
document.write("The string length is: " + string.length)
document.write("<br>To upper case: "+ string.toUpperCase())
}*/

//var check = re.exec(exec);

//Errors
//Using onerror
//The simplest way to catch errors in your code is to attach a new function to the onerror event, like this:
/*document.writ('Test')

window.onerror = function(msg, url, line){
	var temp = url.split('/')
	url = temp[temp.length-1]
	alert('Error in line+ line'+' of '+url+'\n\n'+msg)
}*/

//Using try … catch()
try{
	//document.writ('Test')
}catch(e){
	alert("Error: "+ e.message)
}



//DOM

document.title = "Changing Webpage";


//How to get an attribute of an object
function getVal(){
	var x = document.getElementById("myBtnId").value; //.id,  .name  ,whatever attribute
	document.getElementById("value1").innerHTML =x;
}



//XML
//creating a XMLHttpRequest object
//after we can access the XML objects by using the XML DOM 
/*var xmlHttp = new XMLHttpRequest();*/
//create a variable url
/*var url = "xml/invoice.xml";*/
// call open method that initiates the request (http method,place to send the request, assync: assyncronous operation)
/*xmlHttp.open("GET", url, false);*/
//send the request to the server
/*xmlHttp.send();*/
//luckly we can get a response
/*if(xmlHttp.readyState == 4 && xmlHttp.status == 200){*/ //readystate: 0(Unsent), 1(Opened), 3(Loading), 4(Done)
//status: 0(Unsent or Opened) 200(Loading or Done)
//we will get a response
/*var xmlDoc = xmlHttp.responseXML(); */
//We get the information as an object of the DOM
//we get the first instance of Number
/*var number = xmlDoc.getElementsByTagName("Number")[0].childNodes[0].nodeValue;
var date = xmlDoc.getElementsByTagName("Date")[0].childNodes[0].nodeValue;*/


//Event Listeners
//eventListener are a new way to use events in JS
//old way: 
/*<button onclick = "buttonClick();">Event Old</button>*/
//new way:
/*<button id = "eventNew">Event New</button>*/

//in js:
window.onload = function(){
	document.getElementById('eventNew').addEventListener('click', newEventButtonClicked, false);
}

function newEventButtonClicked(){
	alert("Newer event method");
	
}


//Event Object
/*<div id="output"></div>
<button onclick=sendEventInfo(event)>Press Me</button>*/

function sendEventInfo(event){
	var information = "TimeStamp: "+ event.timeStamp;
	information+="<br/>Target: "+ event.target.id;
	information+="<br/>X: "+ event.clientX;
	information+="<br/>Y: "+ event.clientY;
	information+="<br/>Shift Key?: "+ event.shiftKey;

	document.getElementById('output').innerHTML = information;
}

document.writeln("<BR>");

//Errors - Try and Catch
/*function testTry(){
	alert("Method ran successfully");
}

try{
	TestTry();
	//invalid calls, methods or functioons in the code
	TestT()
}
catch(exception){
	//determine wether or not the browser is IE or Firefox
if(exception.description == null){
	alert("There was an error in the code. The details are: \n "+ exception.message);
}else{
	alert("There was an error in the code. The details are: \n "+ exception.description)
}
}
*/
//The Throw Statement
function checkValue(value){
	try{
		if(value <=5)
			throw new Error("Plese submit a minimum value of at least 5");
		if(value >=100)
			throw new Error("Please submit a value that does not exceed 100");
		}
	catch(e){
		//determine wether or not the browser is IE or Firefox
		if(e.description == null){
			alert("An error occurred. \n"+ e.message)
		}else{
			alert("An error occurred. \n"+ e.description);
		}
	}
}

checkValue(6);

// using onerror
//attaching a new function to the onerror event
/*window.onerror= function(msg, url, line){
	var temp = url.split('/');
	url = temp[temp.length-1]
	alert('Error in line '+line+'of'+url+'\n\n'+msg);
}*/

// or for part of the code, place onerror in an element and call a function to handle the error 
//ex: <div onerror='fixError()''> contenets of div </div>


//JavaScript Timers
var timeoutID;

function delayAlert(){
	//setTimeout()
	timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert(){
	alert("That was really slow!");
}

function cancelAlert(){
	//clearTimeout : cancel timers after we ceated them
	//(we must click delayed alert button followed by stop alert button)
	window.clearTimeout(timeoutID);
	alert("Alert cancelled");
}

/*
<input type="button" value="Delayed Alert" onclick="delayAlert()">
<input type="button" value="Stop Alert" onclick="cancelAlert()">
*/

//window refreshes every 1 second
/*var int= window.setInterval(function(){ clock()}, 1000);

function clock(){
	var myDate = new Date();
	var myTime = myDate.toLocaleTimeString();
	document.getElementById('clock').value = myTime;
}*/

/*<input type="text" id:"clock">*/

//Debugging with Stack
//good for code with functions inside other functions, makes easier to figure out what function caused the problem, the line and the file
/*function traceIt(){
	try{
		throw new Error("myError1");
	}
	catch(e){
		alert(e.stack);
	}
}

function b(){
	traceIt();
}

function a(){
	b(3,4,4,"\n\n", undefined, {});
}

a("first call, first argument");*/

//Utilizing Exceptions in JS and HTML5
/*function mostBasicExample(){
		var num1 = 10;
		var num2 = 0;
		var yourNum = num1/num2;
	}
	catch(err){
		alert(err.message);
	}
}*/

/*function exceptionsForValidation(){
	var dataToCheck;
	dataToCheck = document.getElementById('age');

	try{
		if(dataToCheck == "")
			throw "empty";
		if(isNaN(dataToCheck))
			throw "not a number";
		if(dataToCheck<18)
			throw "too low"
		if(dataToCheck>100)
			throw "too high"
	}
	catch(err){
		alert("Input is:"+ err);
	}
	finally{  //blank out the field
		document.getElementById("age").value = "";
	}
}*/
//Encoding and Decoding URIs (UTF encoding) //encodeURIComponent() and decodeURIComponent() methods
var newURL;
function setEncode(myURL){
	newURL = encodeURIComponent(myURL.toString());
	alert(newURL);
	document.getElementById('info1').innerHTML = newURL.toString(); 
}

function setDecode(newURL){
	decodeURL = decodeURIComponent(newURL);
	alert(decodeURL);
	document.getElementById('info1').innerHTML = decodeURL.toString();
}



//Dice Game
var player1Roll;

function play1(){
	player1Roll = Math.floor(Math.random()*6);
	document.getElementById("messgeplayer1").innerHTML= "Waiting for Player 2"
}

function play2(){
	var player2Roll = Math.floor(Math.random()*6);

	if(player1Roll>player2Roll){
		document.getElementById("resultGame").innerHTML+= "Player 1 wins!  ("+ player1Roll+" x "+ player2Roll+ ")<br/>";
	}else if(player1Roll<player2Roll){
		document.getElementById("resultGame").innerHTML+= "Player 2 wins!  ("+ player1Roll+" x "+ player2Roll+ ")<br/>";
	}else{
		document.getElementById("resultGame").innerHTML+= "Draw!!  ("+ player1Roll+" x "+ player2Roll+ ")<br/>";
	}

	document.getElementById("messgeplayer1").innerHTML= "";
}


//Bitwise Operators
function nutsandbits(x,y){
	x = parseInt(x);
	y = parseInt(y);

	console.log("The binary representation of the numbers are: "+ x.toString(2) + " and "+y.toString(2));
	console.log("Bitwise and "+ (x & y));  //1&1 true(1)    //1&0 false(0)
	console.log("Bitwise or "+ (x | y)); //0&0 false(0)
	console.log("Bitwise xor "+ (x ^ y)); // 1^0 true(1)  //0^1 true(1)
	console.log("Bitwise not on "+ x + " is "+ (~x)); //ex: 2=> -2(-1) = -3

	console.log("Bitwise shift left operator "+(x<<y)); //0011 move left 2 places is 1100 
	console.log("Bitwise shift right with sign operator "+(x>>y)); //0011 fill with zero 2 places right 0000
	console.log("Bitwise shift right with zero operator "+(x>>>y)); // put 2 zeros in the beginning 0000
}

nutsandbits(3,2);


//Euler's Number
	console.log("Euler "+Math.E); //euler's number
	console.log(Math.LOG2E);  //euler base 2
	console.log(Math.LOG10E); //euler base 10

	console.log(Math.exp(4));  //euler to the power of 4
	console.log(Math.log(8));  //logarithm base e

	console.log(Math.LN2); //logarithm of 2 base 10
	console.log(Math.LN10); //logarithm of 10 base 10

	console.log("PI "+Math.PI);  //Obs: &pi; is the pi symbol for HTML


	console.log(Math.SQRT2); // square root of 2
	console.log(Math.SQRT1_2) // square root of 1/2

	console.log("Cosine "+Math.cos(1));
	console.log("Sine "+Math.sin(1));
	console.log("Tangent "+Math.tan(1));

	a=2;
	console.log(Math.exp(a)); //Returns the exponent of a (Math.E(eulers number) to the power a)

	var numx= -5.4;
	console.log("Math.floor(numx): "+Math.floor(numx));

	//generate random number between 10 and 100

var randomValue = Math.floor((Math.random()*90)+10);
console.log("Random number between 10 and 100: "+ randomValue);

//question Exam
var x=10;
var y=20;

console.log("Question Exam");
console.log(x+=y);  //30  //x=10+20  x=30
console.log(x-=y);  //10  // x=30-20  x=10
console.log(x*=y);  //200  // x=10*20  x=200
console.log(x/=y);  //10  //x=200/20  x=10
console.log(x%=y);  //10  //x= 10%20  x=10 (20*0=0 R10)


// 1 / 2; // 0.5
// 1 / 2 == 1.0 / 2.0; // this is true

/*var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat
var n3 = !'Cat'; // !t returns false*/

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

//The typeof operator returns the following results for these variables:

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"

typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"

typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"

// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

/*
\′ – single quote
\″ – double quote
\\ – backslash
\b – backspace
\f – form feed
\n – newline
\r – carriage return
\t – tab
*/


//For Loop
output="";
for(j=3,f=1;j>0;--j,++f){  //we can include aditional statements for
 							//the 1st and 3rd statements of the for loop
	f*=j;
	output += f;
}
console.log("output "+output);


//DOM
//window properties
document.write("<br>window properties<br>")
document.write(window.closed +"<br>");
document.write(window.defaultStatus +"<br>");
document.write(window.document +"<br>");
document.write(window.frames +"<br>");
document.write(window.frames[0] +"<br>");
document.write(window.history +"<br>");
document.write(window.history.back() +"<br>");
document.write(window.innerHeight +"<br>"); //to avail how much space is available
											// in the current window
document.write(window.innerWidth +"<br>");
document.write(window.length +"<br>");
document.write(window.location +"<br>");
document.write(window.name +"<br>");
document.write(window.navigator +"<br>");
document.write(window.opener +"<br>");
document.write(window.outerHeight +"<br>");
document.write(window.outerWidth +"<br>");
document.write(window.pageXOffset +"<br>");	
document.write(window.pageYOffset +"<br>");
document.write(window.parent +"<br>");
document.write(window.screen +"<br>");
document.write(window.screen.availHeight +" is the screen Height<br>");
document.write(window.screen.availWidth +" is the screen Width<br>");
document.write(window.screen.colorDepth +" is the screen Color Depth<br>");
document.write(window.screen.height +" is the screen total Height<br>");
document.write(window.screen.pixelDepth +" is the screen Pixel Depth<br>");
document.write(window.screenX +"<br>");
document.write(window.screenY +"<br>");
document.write(window.self +"<br>");
document.write(window.status +"<br>");
document.write(window.top +"<br>");

//Adding and removing elements
//add element
newImg= document.createElement('img');
document.body.appendChild(newImg);
newImg.id = "newImgAdded";
newImg.src="images/casper.jpeg"

//remove element
//newImg.parentNode.removeChild(newImg); 

document.getElementById('newImgAdded').style.display='none'; //the space which the element occupied will disappear as well 
//document.getElementById('newImgAdded').style.display='block';

//document.getElementById('newImgAdded').style.visibility='hidden'; //make the element invisible
//document.getElementById('newImgAdded').style.visibility='visible';




//Cookie
// cookies are used to store data such as username and password on the user's computer
	//so that the user doesn't have to reenter these data whenever he/she re-visit a webpage 
//To be able to store special characters and spaces, values have to be run through the 
	//encodeURI() function of javascript.

//Setting up a cookie
function SetCookie(name, value, seconds, path, domain, secure){
	// name and value are mandatory arguments, the others are optional
	//seconds: the number of seconds untill the cookie expiry
	//path: the path to the issuing server
	//domain: the web domain to use
	// if "secure", the browser must use SSL

	var date = new Date();
	date.setTime(date.getTime()+ seconds*100);

	var expires = seconds? ';expires'+ date.toGMTString() : '';
	path = path? ';path= '+ path: '';
	domain = domain? ';domain= '+ domain : '';
	secure = secure? ';secure'+ secure : '';
	document.cookie = name+ '='+ encodeURI(value)+ expires+path+domain+secure;
}

SetCookie('username', 'fredsmith', 2592000);

//other way to create a cookie:
document.cookie = 'id=elainegui; expires=Thu, 18 Dec 2013 12:00:00 UTC';
console.log("document.cookie "+document.cookie)

//Reading a cookie
function getCookie(name){
	var dc = ';'+ document.cookie;
	var start = dc.indexOf(';'+ name+ '=');
	if(start=-1) return false;
	start+=name.length+2;
	var end = dc.indexOf(';', start);
	end = (end==-1)? dc.length : end;
	return decodeURI(dc.substring(start,end))	
}
//to read back a cookie that is stored in the user's computer:
//username = getCookie('username'); 

//Deleting a cookie
function deleteCookie(name){
	setCookie(name, '', -3600);
	//set its expiry to -3600 seconds (1 hour in the past)
}

//Local Storage
//when we want to save larger amounts of data

//to locally store a username and password:
localStorage.setItem('username', 'Elaine');
localStorage['password']= 'Mypassword123';  //another way

//to retrieve the details:
username = localStorage.getItem('username');
console.log('username '+ username);
password = localStorage.getItem('password');
console.log('password '+ password);

//displys an alert if the localSorage is supported in the browser
if(typeof localStorage == 'undefined')
	document.write('local storage unavailable');
else
	document.write('local storage available');

//remove and clearing local data
localStorage.removeItem('username');  //remove an item of the localStorage
localStorage.clear();  //clear the localStorage completely




