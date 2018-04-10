function filter_list(l) {
// Return a new array with the strings filtered out
//I'm using the filter method.
// the filter method and as a call back function it will
//return the new array with the strings filtered out
   return l.filter(digit =>{
//I wanna checl if the items type is a number and if it is I want it to return that digit
   if (typeof digit === "number"){
   return true
   }
})
}
