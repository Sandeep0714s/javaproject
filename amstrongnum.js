let num = Number (prompt ('enter the number'));
let temp = num;
let = power=0;
while(temp>0){
    temp=Math.floor(temp/10);
    power++;
    
}
temp=num;
let newNumber=0;
while(temp>0){
    let digit = temp%10;
    newNumber=newNumber + Math.pow(digit,power);
    temp=Math.floor(temp/10)
}
if(newNumber == num){
    alert(`${num} is armstrong number`)
}
else{
    alert(` ${num} is not armstrong number`)
}