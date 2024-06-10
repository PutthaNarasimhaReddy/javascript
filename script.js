// 1.array  using  map method


const numbers=[2,4,8,2,12]
const squarednumber=numbers.map(num => num * num)

console.log(squarednumber);

//2. ternary operator

function getGrade(score) {
    return (score >= 90) ? 'A' :
           (score >= 80) ? 'B' :
           (score >= 70) ? 'C' :
           (score >= 60) ? 'D' : 'F';
}


console.log(getGrade(55));
console.log(getGrade(99));  
console.log(getGrade(85)); 
console.log(getGrade(71)); 
console.log(getGrade(64)); 

//3.destructing and change name

const car={
    name:"Ferrari",
    model:"corrolla",
    year:2023
}

function changeYear(carObject,Year)
{
    carObject.year=Year;
}
// Using object destructuring to extract and print the car's model and year
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);

changeYear(car,2022)


const { model: updatedModel, year: updatedYear } = car;
console.log(`Updated Model: ${updatedModel}, Updated Year: ${updatedYear}`);



//4.Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime numbers
  
    // Check divisibility by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    // Check divisibility by all numbers up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  // Example array of numbers
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  // Use the filter function to create a new array of prime numbers
  const primeNumbers = number.filter(isPrime);
  
  console.log(primeNumbers); 
  
  //5.usecases
  //map
  const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => temp * 9/5 + 32);
console.log(fahrenheit);
//filter
const number1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = number1.filter(num => num % 2 === 0);
console.log(evenNumbers);


//reduce
const Value = [1, 2, 3, 4, 5];
const max = Value.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max);


//6/async and await

async function fetchData() {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      
      const data = await response.json();
  
      
      console.log(data);
    } catch (error) {
      
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchData();
  
  //7.Nested object
const person = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      zip: '12345'
    },
    // contact property is optional
     //contact: {
      //phone: '555-1234',
       //email: 'john.doe@example.com'
    //}
  };
  
  
  const phoneNumber = person.contact?.phone;
  

  console.log('Phone Number:', phoneNumber); 
  
  `1  1`
  

