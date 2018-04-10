// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// in this function I'm gonna set a few conditonals and loop thru the array
function sumArray(array) {
    //in this conditional if while looping thru the array if at any time it equals null return 0
    if (array == null)
    {
        return 0;
    }
    //in this condition if the array length is greater than 2 during the loop it will return 0
    else if (array.length < 2)
    {
        return 0;
    }
    //in this condition the loop is set within the condition and will give us the sum of all the numbers in the
    //array except for the highest and lowest element
    else
    {
        array = array.sort(function(a,b) {return a - b;});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}
