function testavailable(){
    let y="Local variable";
    console.log("AVAILABLE HERE:", y);
    return y;

}

let z= testavailable();
console.log("outside the function:", z);
//console.log("Not available function", y);


function doingstuff(){
    if(true){
        console.log(x);
        var x="local";
    }
}
doingstuff();

function doingstuff(){
    if(true){
        console.log(x);
        var x="local";  // put var in place of let // reference error
    }
}
doingstuff();

/*function doingstuff(){
    if(true){
        console.log(x);    // reference error
        const x="local";
    }
}
doingstuff();*/