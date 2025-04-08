function addTwoNumbers(x,y){
    console.log(x+y);
}
let arr =[5,7]
addTwoNumbers(...arr);

function SomeFunction(param1,param2){
    console.log(param1,param2);
    console.log(...param1,...param2);
}
SomeFunction("hiii"," kyaa", " bhaaai ke !!")

