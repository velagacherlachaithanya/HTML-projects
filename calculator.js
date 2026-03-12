let num1=10
let num2=5
let operator= "+";
switch(operator){
    case"+":
    result=num1+num2;
    break;
    case"-":
    result=num1-num2;
    break;
    case"*":
    result=num1*num2;
    break;
    case"/":
    result=num1/num2;
    break;
    default:
        result="invalid operator";
}
console.log("result:"  + result)