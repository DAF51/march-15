// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers){
  let squareNums =[]
  if(numbers.length > 0){
    numbers.forEach(currentNum => squareNums.push(currentNum**2))
    return squareNums.reduce((a,b) => a+b)
  }
    else{ return 0}
}


