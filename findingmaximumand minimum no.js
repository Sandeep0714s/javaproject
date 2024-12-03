// let arr = [];
// let size = prompt("Enter the length of array");
// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt("Enter your number"));
// }
// let max = -Infinity,
//   min = Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) max = arr[i];
//   if (arr[i] < min) min = arr[i];
// }
// alert(`min = ${min} , max = ${max}`);





//      🟡                array      loop                🟡
let arr = [];
 
let length = prompt('enter the length of your number');

 for(let i = 0; i<length ; i++);
 arr[length] = Number(prompt('enter the numbers for sum')); 
// let arr = [78,87,87.00,87,9,0,0,65,9];

let sum = 0 ;
for (const value of arr){
  if(! NaN(value) && !(Math.sign(value) == 0) && !(Math.sign(value) == -1)  );
    sum += value;
    console.log(sum)
  alert(sum);
}
