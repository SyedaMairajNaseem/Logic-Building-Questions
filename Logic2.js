// Question 1
//Output:Corolla
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015
  };
  console.log(car.model);

  //Question 2
  //Loop
  //Output:10,20,30,40,50
  let numbers = [10, 20, 30, 40, 50];
 for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  }
  
  // Question 3
  let array = [10, 20, 30, 40, 50]
  const sumofArray = array.reduce((a, b) => {
    return a + b
  })
  console.log(sumofArray)

  // Question 4
  const currentDate = new Date(); 
const currentYear = currentDate.getFullYear(); 

console.log(currentYear); 

 // Question 5
 //Outputs:In 5 (Positive)
          //In -3(Negative)
          //In 0 (0)
function numberSign(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(numberSign(0));

// Question 6
var num = 0;
while (num < 5) {
  num++;
  console.log(num)
}

// Question 7
 //outputs:2.449489742783178
var a = 6
console.log(Math.sqrt(a))

// Question 8
 //Output:[ 10, 44, 92 ]
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([10, 23, 44, 57, 92])); 

// Question 9
 //Output:10
 function multiply(a, b = 10) {
  return a * b;
}
console.log(multiply(5, 2))

// Question 10
 //Output:
 const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
};
console.log(calculator.subtract(10, 4));

// Question 11
 //Output:95(A),85(B),75(C),60(F)
function getGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else {
    return "F";
  }
}
console.log(getGrade(95));


// Question 12
 //Output:3
 let fruits = ['Apple', 'Banana', 'Cherry'];
let length = fruits.length;
console.log(length);  

// Question 13
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);


  if (n[i] === 5) {
    break
  }


}

// Question 14
//Output:true
function isEarlierDate(date1, date2) {
  return date1 < date2;
}

let date1 = new Date('2022-01-01');
let date2 = new Date('2022-01-02');

console.log(isEarlierDate(date1, date2));  

// Question 15
//Output:Sunday
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      throw new Error("Invalid day number (1-7)");
  }
}


console.log(getDayOfWeek(7));
