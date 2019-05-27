// Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with our items array. 
//Study both the problem and the solution to figure out the rest of the problems.
/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, (length) =>{
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
    cb(arr.slice(-1));
}
last(items, (lastOne) =>{
  console.log(lastOne);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(2, 5, (add) =>{
  console.log(add);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(5, 6, (mult) =>{
  console.log(mult);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
   if (list.includes(item)){
    let action = true;
    return action;
  } else {
    let action= false;
    return action;
  };
  cb(action);
}

contains("sugar", items, (cb)=> {
  console.log(cb);
})
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
