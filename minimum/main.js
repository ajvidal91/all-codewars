function removeSmallest(numbers) {

  let low = {
      "num": Infinity,
      "idx": 0};
  //low guarantees that the first number we hit will be lower and will replace infinity inside the object
  //we replace the key value pairs. num will be 5 and idx will be 0.
  //the loop will change constantly as it goes thru the index
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < low["num"]){
      low["num"] = numbers[i];
      low["idx"] = i;
}
}
//we slice from 0 to low and if it happens to be the first nuber we're slicing
//but not to worry because if we slice two 0's we'll have an empty array concating with an uneven index

return numbers.slice(0,low["idx"]).concat(numbers.slice(low["idx"] + 1));
}
