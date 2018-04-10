function doubleChar(str) {
//we have to take a string and double it
//since you can index into a string so I'll create a loop
//we have to look at every character
// created the var doubleChar to return the doubled string
let doubleChar = "";
//once indexed into every i that should be the character needed
//including the spaces
for (i = 0; i < str.length; i++){
// that will index into the same character and double it
  doubleChar += str[i] + str [i];
}

return doubleChar;
}
