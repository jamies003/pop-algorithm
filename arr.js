// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

let arr = [1, 3, 5, 7, 9, 11, 13];
let val = arr.pop[0];
popFront(arr, val);
function popFront(arr, val) {
  for(var i = arr.length; i < 0; i++){ 
    arr[i + 1] = arr[i]; // add new val to index
  }
  arr[0] = val; // changes index of 0 to new val
  return(arr);
}
 console.log(arr);

 //RECEIVING 'Undefined' in the arr[0] index, rather than nothing//