// var num = Number(prompt("Enter a number: "));
// var store="";
// for(var i=1; i<11;i++){
// console.log(num + " x " + i + " = " + num*i);
// store += num + " x " + i + " = " + num*i +"\n";
// }
// alert(store);
// var number = Number(prompt("Enter a Number: "));
// var square = Math.pow(number, 3);
// if (number <= 30) {
//     for (var i = number; square < 1000; i++) {

//         console.log(`Square of ${number} = ${square}`);
//         number=number*number;
//         square = number * number * number;
//     }
// }
// else {
//     console.log(`${number} is greater than 10`);
// }
// var fruitsArray = [];
// // alert("Fruits you have : " + fruitsArray);
// var options = Number(prompt("Enter How many fruit you wants to enter"));
// for (var i = 1; i <= options; i++) {
//     var userFruits = prompt("Enter Fruit name : ");
//     fruitsArray.push(userFruits)
// }
// var isFruit = false;
// var count=0;
// alert(fruitsArray);
// var searchFruit = prompt("Search a Fruit : ");
// for (var j = 0; j<= fruitsArray.length; j++){
//     if (searchFruit===fruitsArray[j]){
//         isFruit=true;
//     }
//     else{
//         isFruit=false;
//     }
//     count++;
// }
// if(isFruit){
//     alert(`${count} ${searchFruit} is available`);
// }
// else{
//     alert("Fruit Not Found");
// }





var fruitsArray = [];
var options = Number(prompt("Enter how many fruits you want to enter"));

for (var i = 1; i <= options; i++) {
    var userFruits = prompt("Enter fruit name: ");
    fruitsArray.push(userFruits);
}

alert("Fruits you have: " + fruitsArray);

var searchFruit = prompt("Search for a fruit: ");
var isFruit = false;
var count = 0;

for (var j = 0; j < fruitsArray.length; j++) {
    if (searchFruit === fruitsArray[j]) {
        isFruit = true;
        count++;
    }
}

if (isFruit) {
    alert(`${count} ${searchFruit}(s) found!`);
} else {
    alert("Fruit not found.");
}
