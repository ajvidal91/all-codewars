function rowSumOddNumbers(n) {
  // the firstDigit variable represents an equation that will allow the loop to start at 3
	let firstDigit = (n * n) - (n - 1);
  let answer = 0;
  let count = 0;

  while (count < n){
  // the if condition checks to see if the firstDigit is an odd number
    if (firstDigit % 2 !== 0){
    //the 3 is an odd number so we add that to the answer and increment the count
    answer += firstDigit;
    count++;

    }

  firstDigit++;
  }
  return answer;
  }
