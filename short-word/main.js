function findShort(s){
   let wordsArr = s.split(' ');

   let shortest = Infinity;
   for (let i = 0; i < wordsArr.length; i++){
     let wordLength = wordsArr[i].length;
     if (wordLength < shortest){
         shortest = wordLength;
       }
   }

   return shortest;
}
