var unit;
var ten;
var hundred;
var thousand;

let number = Math.floor(Math.random()*10000) ;
console.log("NUMBER IS:"+number);

if(number>999){
    
    unit= number%10;
    number=number/10;
    ten= number%10  ;
    number=number/10;
    hundred=number%10 ;
    number=number/10;
    thousand=number%10 ;
console.log("UNIT: "+unit +" TEN: "+ten+" HUNDRED: "+hundred+ " THOUSAND: "+thousand);
}