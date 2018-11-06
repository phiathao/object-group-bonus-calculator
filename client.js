class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// loop over the 
for(let i=0; i<employees.length; i++){
  console.log(employees[i]);
}

//
//  if ( money > 65000){
//   loop1 rating
//     inside loop2 year yes 5
//       if yeear 5%
//     loop 1 rating

//  } else (
//    bonus =1
//  )

// function employeeBonus(employees){
//   let bonus;
// for (let i = 0; i < employees.length; i++){
  
//   if (parseInt(employees.annualSalary) < 65000){ //check annual income  //1
//     // for (i = 0; i < employees.length; i++){ //check total bonus percent  //2
//     //   if ( parseIn(employees[i].employeeNumber.length < 3))// check their year work by employee number // 3
//     //     bonus += parseFloat('0.05');
//     //   } if (employees[i].reviewRating <= 2){ //check rating for 2
//     //     bonus += parseFloat('0.0');
//     //   } if (employees[i].reviewRating == 3){ //check rating for 3
//     //     bonus += parseFloat('0.04');
//     //   } if (employees[i].reviewRating == 4){ //check rating for 4
//     //       bonus += parseFloat('0.06');
//     //   } if (employees[i].reviewRating == 5){ // check rating for 5
//     //     bonus += parseFloat('0.10');
//     //   }
//     //   console.log(bonus);
//     if (bonus >=parseFloat('.13') || bonus <= parseFloat('0')){ //check total bonus //2
//       bonus = parseFloat('0.01'); // set bonus
//     }
//   } else { // check greater 65000      //1
//     bonus = parseFloat('0.01');
//   }
// }
// return employees.annualSalary * parseFloat(bonus);
// }
// let bonus;
// function emp2(employees){
// for (i = 0; i < employees.length; i++){ //check total bonus percent  //2
//   if ( parseInt(employees.employeeNumber.length < 3))// check their year work by employee number // 3
//     bonus += parseFloat('0.05');
//   } if (employees.reviewRating <= 2){ //check rating for 2
//     bonus += parseFloat('0.0');
//   } if (employees.reviewRating == 3){ //check rating for 3
//     bonus += parseFloat('0.04');
//   } if (employees.reviewRating == 4){ //check rating for 4
//       bonus += parseFloat('0.06');
//   } if (employees.reviewRating == 5){ // check rating for 5
//     bonus += parseFloat('0.10');
//   }
//   console.log(bonus);
// }

function bonusPercent(name){
  if(name.reviewRating <= 2){
    console.log('no bonus');
  }else if(name.reviewRating == 3 && name.employeeNumber){
    return parseFloat('0.04');
  }else if (name.reviewRating == 4){
    return parseFloat('0.06');
  }else if (name.reviewRating == 5){
    return parseFloat('0.10');
  }
}
function workYear(name){
  if(name.employeeNumber.length < 3) {
    return parseFloat('0.05');
  } else {
    return parseFloat('0.00');
  }
}

console.log( employees ); // output: (5) [Employee, Employee, Employee, Employee, Employee]
// console.log(employeeLoop(employees));
// console.log(bonusPercent(scout));
console.log(bonusPercent(scout));
console.log(workYear(scout));
