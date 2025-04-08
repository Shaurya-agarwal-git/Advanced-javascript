function sayhello(){
    let you =prompt("what is your name ?");
    console.log("hello ", you+ '!');
}
sayhello();

let varcontainingfunction=function(){
    let varinfunction=" I am a function";
    console.log("hii there !! ", varinfunction);
}
varcontainingfunction();

function test(para1,para2){
    return para1 + " " + para2;
}
const para1="argument 1";
const para2="argument 2";
console.log(test(para1,para2))

function addtwonumbers(x=7,y){         //default values if the values are not assigned explicitly
    //x=87;                          
    y=8054;
    console.log(x+y)

}
addtwonumbers();

const arr=["buuddy", " array", "java"]
arr.forEach(e => console.log(e))

let array=[78,98.87];
addthreenumbers(...add);
addthreenumbers(78,98,87);