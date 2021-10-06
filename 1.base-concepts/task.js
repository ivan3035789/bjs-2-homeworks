"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0) {
    let x1 = (-b + Math.sqrt( D )) / ( 2 * a );
    let x2 = (-b - Math.sqrt( D )) / ( 2 * a );
    arr.push(x1, x2);
  }
  else if (D === 0) {
    let x = -b / ( 2 * a )
    arr.push(x);
  } else {
    arr.push();
  }
return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let interestRate = parseInt(percent) / 100 / 12; 
  let initialPayment = parseInt(contribution); 	  
  let totalCost = parseInt(amount); 
  let today = new Date(); 			  
    
  if (isNaN(interestRate ) || interestRate  < 0) {
   	return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } 
  else if (isNaN(initialPayment) || initialPayment < 0) {
   	return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 
  else if (isNaN(totalCost) || totalCost < 0) {
   	return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } 
  else if (date.getFullYear() < today.getFullYear()) {
		return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
	} else {
		let loanBody = totalCost - initialPayment;						  
  	let numberOfMonths = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear())); 
  	let monthlyPayment = loanBody * (interestRate  + interestRate  / ( Math.pow(1 + interestRate, numberOfMonths ) -1 )) ;			
  	let totalAmount = (monthlyPayment * numberOfMonths).toFixed(2);
 	return totalAmount;
 	}	
}
