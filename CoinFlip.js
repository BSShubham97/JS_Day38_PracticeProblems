const HEAD = 1;
const TAIL = 0;

let flipToss = Math.floor(Math.random()*10 % 2);
console.log(" YOU GOT : "+flipToss);
if( flipToss == HEAD){
    console.log("HEADS IT IS ");
}else if( flipToss == TAIL){
    console.log("TAILS IT IS ");
}