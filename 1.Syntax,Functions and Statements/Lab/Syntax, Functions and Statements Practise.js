'use strict'

function echoFunc(someRandomText){
    console.log(someRandomText.length);
    console.log(someRandomText);
}
echoFunc('strings are easy')


function stringText(first, second, third){
    let textOne = first.length;
    let textTwo = second.length;
    let textThree = third.length;

    let sum = textOne + textTwo + textThree;
    let averge = Math.round(sum / 3);

    console.log(sum);
    console.log(averge);

}

stringText('chocolate', 'ice cream', 'cake')

function largestNumber(numberOne , numberTwo , numberThree){
    let result;

    if(numberOne > numberTwo && numberOne > numberThree){
        result = numberOne;
    }else if (numberTwo > numberOne && numberTwo > numberThree){
        result = numberTwo;
    }else{
        result = numberThree;
    }

    console.log(`The largest number is ${result}`)
}

largestNumber(-3, -5, -22.5)

function circleArea(number){
    let checkType = typeof number 
    if(checkType === 'number'){
        let radius = number * number * Math.PI;
        console.log(radius.toFixed(2))
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${number}.`)
    }
}

circleArea(5);

function mathOperations(number1, number2 , operator){
    let result;

    switch(operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        case '**':
            result = number1** number2;
            break;  
    }
    console.log(result);
}

mathOperations(5, 6 , '%')

function sumOfNumbers(input1, input2){
    let number1 = Number(input1);
    let number2 = Number(input2);

    let result = 0;
    for(let i = number1; i <= number2; i++){
            result += i;
    }
    
   console.log(result);
}

sumOfNumbers('1','5');

function daysOfWeek(inputDay){
    let result;

    switch(inputDay){
        case 'Monday':
            result = 1;
            break;
        case 'Tuesday':
            result = 2;
            break;
        case 'Wednesday':
            result = 3;
            break;
        case 'Thursday':
            result = 4;
            break;
        case 'Friday':
            result = 5;
            break;
        case 'Saturday':
            result = 6;
            break;
        case 'Sunday':
            result = 7;
            break;
        default:
            console.log('error');
            return;
    }

    console.log(result);
}

daysOfWeek('dwqs');

function daysInMonth(day,year){
    return new Date(year,day,0).getDate();
}

console.log(daysInMonth(2,2021));

function squareStars(input = '5'){
    
    let string = "";

    for(let i = 0; i < input;i++){
        for(let j = 0; j < input;j++){
         string += "*";
        }
        string += "\n";
    }
     console.log(string);
}

squareStars();

function elements(elements){

    aggregateElements(elements,0, (a, b) => a + b);
    aggregateElements(elements,0, (a, b) => a + 1 / b);
    aggregateElements(elements,'',(a, b) => a + b);

        function aggregateElements(arr ,initialVal, func){
          let val = initialVal
          for(let i = 0; i < arr.length; i++){
            val = func(val,arr[i]);
          }
          console.log(val);
        }
}

elements([2, 4, 8 , 16]);