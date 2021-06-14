//Question 1 Write a JavaScript function to check whether an `input` is an array or not
//Test Data :
//console.log(is_array('w3resource'));
//console.log(is_array([1, 2, 4, 0]));

function is_array(k){
    return Array.isArray(k)
  }
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  
  //Q2 Write a JavaScript function to clone an array
  //Test Data :
//console.log(array_Clone([1, 2, 4, 0]));
//console.log(array_Clone([1, 2, [4, 0]]));
  
  function array_Clone(b){
      return a.slice(0,b.length)
  }
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));
  
  //Q3 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
//Test Data :
//console.log(first([7, 9, 0, -2]));
//console.log(first([],3));
//console.log(first([7, 9, 0, -2],3));
//console.log(first([7, 9, 0, -2],6));
//console.log(first([7, 9, 0, -2],-3));

  function first(c,s){
      if(!s)
      return c[0];
      return c.slice(0,s);
  }
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
  
  
  //Q4 Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];
  
  
  let myColor = ["Red", "Green", "White", "Black"];
  myColor.join(',');
  myColor.join('+');
  
  
  //  Write a JavaScript program to find the most frequent item of an array
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

  
  
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  
  arr1 = arr1.sort();
  
  a=[1,arr1[0]];
  
  let tempCount = 1;
  
  for(let i=1; i< arr1.length; i++){
    if(arr1[i]==arr1[i-1])
      {
        tempCount++;
      }
    else{
      tempCount = 1;
    }
  
    if(tempCount>a[0])
    {
      a[0]=tempCount;
      a[1] = arr1[i];
    }
  }
  
  console.log(`${a[1]} (${a[0]} times)`)