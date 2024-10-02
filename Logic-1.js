function sum (a,b){
    return a+b
  }
  var sum = (20+4)
  console.log (sum)
  // Arrow function
  
const add =(a,b)=> result= a+b
result = add (2,3)
console.log(result)

//Question 2
//function
function isEven (number){
  return number % 2 === 0;
}
let test1 = isEven (2)
let test2 = isEven (4)
let test3 = isEven (5)
let test4 = isEven (6)
console.log(test3)
//arrow function

const Even = (num)=>{

  if (num % 2 === 0){
  return "it is even number"
}
else{
  return "it is odd number"
}
}
let value = Even (4)
console.log(value)


//Question 3
//function
function maxofthree (){
}
//arrow function
const maxOfThree = (a , b , c)=>{
    if (a > b & a > c){
       return a
    } else if (b > a & b > c){
        return b
    }else{
        return c
    }
}
let check = maxOfThree(6,7,8)
console.log(check)

//Question 4
//function
let numbers =[1 , 2 , 3]
function reverseArrayy(arr){
  let reverseValue = arr.reverse()
  return reverseValue
}
let resultarr =reverseArrayy([1 , 2 , 3])
console.log(resultarr)

//arrow function
const reverseArray = (arr)=> {
  let revarr = []
  for(let i = arr.length-1 ; i >= 0 ; i--){ 
    revarr.push(arr[i])}
  return revarr
  }
  
let resultrev = reverseArray([6 ,7 ,8 , 9, 10 ])
console.log(resultrev)

//Question 5
// arrow function
const Factorialarrow = (n)=>{
  if(n<0) return "this number of factorial is not exist"
  if(n===1 || n===0 ) return 1
  for(let i = 3; i<n; i++) {
    result = result * i
  }
  return result 
 }
 const resultfactorial = Factorialarrow (6)
 console.log(resultfactorial)

 const Factorial = (n)=> {
  if(n<0) return "this number of factorial is not exist"
    if(n===1 || n===0 ) return 1
   return n * Factorial (n-1)
   }
  const resultfac = Factorial (5)
  console.log(resultfac)
 
    //Question 6
  //function
  function vowelcount (str){
    let countvowel = 0;
    const vowels = 'aeiouAEIOU';
    for (let letter of str){
      if (vowels.includes(letter)){
        countvowel++;
      }
    }
    return countvowel;
  }

  const str = 'Hello world'
  console.log(vowelcount(str))

  //Question 7
//function
let list = [1,1,2,2,3,3,4,4,5,5]
let removearr = new Set(list)
let removeduplicate = [...removearr]
console.log(removeduplicate)

 //Question 8
  let sumarr= 0;
  let arr =[1,2,3,4,5,20]
  for(let i=0; i < arr.length;i++){
     sumarr += arr[i]
  }
  console.log(sumarr) 
  //arrow function
  let array = [1,2,4,5,20,25]
  const sumarray = array.reduce ((a,b)=>{
    return a+b
  })
  console.log(sumarray)

//Question 9
//function
function convertToFarenheit(temp){
  var convertTemp = temp * 9/5 + 32
  return convertTemp
} 
console.log (convertToFarenheit(34))
//arrow function
const conversion = (temprature)=>{
 var tempconversion = temprature *9/5 + 32
 return tempconversion 
}
console.log(conversion(25))

//Question 10
//function 
function isPrime(num){
  let i=0
  return num = i/i === 0;
   
}
let prime = isPrime(7)
console.log(prime)