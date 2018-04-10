// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side
// of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or
// there is no DNA at all (again, except for Haskell).

//since A points to T and G points to C we create an
//object with reflecting properties and values that we
//had listed in the sample tests
function DNAStrand(dna){
  let dnaKey = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C"
}

let haskell = "";
  //this will give us the value of what we're looking
  //for. when going thru the loop when it gets to A it'll
  //give us T and so on so fourth and the dna strand will never be empty
  for (let i = 0; i < dna.length; i++){
  haskell += dnaKey[dna[i]];
  }
  return haskell;
}
