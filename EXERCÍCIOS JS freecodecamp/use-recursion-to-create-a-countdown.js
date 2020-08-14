//countdown recursive function returns an array;

var countArray = [];
function countdown(n){
  if(n < 1)
    return []
  else{
    countArray.push(n);
    countdown(n-1);
    return(countArray);
  } 
}
