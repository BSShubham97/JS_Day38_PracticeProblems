
let one = Math.floor(Math.random()*1000 %900)+100;
console.log("Number 1: "+one);
let two = Math.floor(Math.random()*1000 %900)+100;
console.log("Number 2: "+two);
let three = Math.floor(Math.random()*1000 %900)+100;
console.log("Number 3: "+three);
let four = Math.floor(Math.random()*1000 %900)+100;
console.log("Number 4: "+four);
let five = Math.floor(Math.random()*1000 %900)+100;
console.log("Number 5: "+five);
//MAXIMUM
let max=null;
if(one>two && one>three && one>four && one>five){
    max=one;
}else if(two>one && two>three && two>four && two>five){
    max=two;
}else if(three>one && two<three && three>four && three>five){
    max=three;
}else if(four>one && four>three && two<four && four>five){
    max=four;
}else if(five>one && five>three && five>four && two<five){
    max=five;
}
console.log("MAX: "+max);

//MINIMUM
let min=null;
if(one<two && one<three && one<four && one<five){
    min=one;
}else if(two<one && two<three && two<four && two<five){
    min=two;
}else if(three<one && two>three && three<four && three<five){
    min=three;
}else if(four<one && four<three && two>four && four<five){
    min=four;
}else if(five<one && five<three && five<four && two>five){
    min=five;
}

console.log("MINIMUM: "+min);