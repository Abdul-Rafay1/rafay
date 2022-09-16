// chap 31-34

// var current_date  = new Date();
// console.log(current_date);

// var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var a = new Date();
// var monName=months[a.getMonth()];
// document.write(monName);

// var cDay = new Date();
// cDay.toString;
// var b = cDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// var day = prompt("What day is today: ");
// day = day.toLowerCase(day);
// if (day === saturday || day === sunday){
//     document.write("Its a Fun day")
// } 
// else{
//     document.write("Go to work, its not a fun day")
// }

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// var current_date  = new Date();
// console.log("Current date is: "+current_date.getDate());
// console.log("Elapsed minutes since january 1, 1970: "+current_date.getMinutes());
// console.log("Elapsed milliseconds since january 1, 1970: "+current_date.getMilliseconds());

// var days = new Date();
// if (days > 16) {
//     document.write("First Fifteen days of month");
// } else {
//     document.write("Last days of month")
// }

// var ramadan_2016 = new Date("June 20, 2016");
// var recent_ramadan = new Date("April 02, 2022");
// var total_days = recent_ramadan - ramadan_2016;
// var days = total_days.getDay();
// console.log(days);

// var spec_date = new Date("December 05, 2015");
// var date = new Date();
// var s_date = spec_date.getTime();
// var u_date = date.getSeconds();
// var final = u_date - s_date;
// console.log("The seconds on date of December 05,2015: " +final);

// var input = +prompt("Enter Your Birthdate: ");
// var input2 = +prompt("Enter Your Birthyear: ");
// var spec_date = new Date();
// var date1 = spec_date.getDate();
// var Birthdate = new Date(input);
// var date2 = Birthdate.getDate();
// var birth =  date1 - date2;
// console.log("Your age is: " + birth);
// console.log("Your Birth year is: " + input2);

// var name = prompt("Enter Customer Name: ");
// var month = prompt("Enter the billing month: ");
// var units = prompt("Enter Total Units: ");
// var charges = 16;
// var late_charges = 350;
// var ondate = units * charges;
// var late_fees = ondate + late_charges;

// document.write("K-Electric Bill", '<br>');
// document.write("Customer Name: " + name , '<br>');
// document.write("Number of units: " + units, '<br>');
// document.write("Charges per units: " + charges, '<br>');
// document.write("Net Amount payable (within Due Date): " + ondate, '<br>');
// document.write("Late payment surcharge: " + late_charges)
// document.write("Gross Amount payable (after Due Date): " + late_fees, '<br>');

// function date(){
//     var tareekh = new Date();
//     document.write(tareekh);
// }
// date();

// function greet(fname, lname){
//     var f_name = prompt("Enter Your First name: ");
//     var l_name = prompt("Enter Your Last name: ");
//     document.write("Hi " + f_name + " " + l_name + " Welcome to our website");
// }
// greet();

// function calc (){
//     var num1 = +prompt("enter the first value: "); 
//     var num2 = +prompt("enter the second value: "); 
//     var op = prompt("select your operation + - / * % : "); 
//     if (op === "+"){
//         document.write(num1 + num2);
//     }
//     else if(op === "-"){
//         document.write(num1 - num2);
//     }
//     else if(op === "*"){
//         document.write(num1 * num2);
//     }
//     else if(op === "/"){
//         document.write(num1 / num2);
//     }
//     else if(op === "%"){
//         document.write(num1 % num2);
//     }
// }
// calc();

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

// function square(){
//  var input = +prompt("Enter a number you want to square: ");
//  document.write(input ** 2);
// }
// square();

// function factorialize(num) {
//     return num;
//   }
//   factorialize(5);

// function findHypotenuse(side1, side2){
//     let h = (((side1 * side1) + (side2 * side2))**(1/2));
//     return h;
// }
// let side1 = 3;
// let side2 = 4;
// document.write(findHypotenuse(side1, side2).toFixed(2));

// var length = prompt("Enter the length of your rectangle");
// var width = prompt ("Enter the width of your rectangle");

// function area (length, width) {
// return length * width;
// }
// console.log("The area of your rectangle is " + area);

// function caps(sen){
//     var words = sentence.split(" ");
    
//     for(word of words){
//         var fletters = word.substring(0,1);
//         fletters = fletters.toUpperCase();
//         // console.group(firstletters)
//         var remainingletters = word.substring(1, word.length);
//         // console.log(remainingletters)
//         console.log(firstletters+remainingletters )
//     }
//     return sentence;
// }
// document.write(caps("this is an assignment"));

// function LongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
// LongestWord("Web Development Tutorial");

// function power(a,b){
//     var x = Math.pow(a, b);
// return x;
// }
// console.log(x(4,3))

// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// const year = prompt('Enter a year:')
// checkLeapYear(year);