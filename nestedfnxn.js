//NESTED FUNCTION
function outerFunction(nr){
    console.log("outer function");
    innerFunction(nr);
    function innerFunction(x){
        console.log(x+7);
        console.log("I CAN ACCESS OUTER VARIABLES",nr)
    }
}
outerFunction(2);

// ANONYMOUS FUNCTION


//CALL BACK FUNCTION
let functionvariabl=function(){
    console.log("not so secret");

};
functionvariabl();

function doFlexiblestuff(executestuff){
    executestuff();
console.log("inside foflexible function");
}
doFlexiblestuff(executestuff);

//

let YouGotThis=function(){
    console.log("you are doing very well");

};
setTimeout(YouGotThis,1000);
setInterval(YouGotThis,1000);