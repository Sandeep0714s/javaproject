
let marks = Number(prompt("Enter your percentage"));
switch(true){
    case( marks > 100):
    console.log('please enter the valid number')
    break;

    case(marks <= 100 && marks >= 89):
    console.log("your grade is A");
    break;
    case(marks <= 89 && marks >= 60):
    console.log("your grade is B");
    break;
    case(marks <=60 && marks >=33):
    console.log('your grade is C');
    break;
    default:
    console.log('you are fail');

}