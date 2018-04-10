function getMiddle(str){
  let length = str.length;
  let middle = Math.floor(length/2);

  if (length % 2 === 0){
    // if even
    return str[middle - 1] + str[middle]
  } else {
    // if odd
    return str[middle]
  }
}
