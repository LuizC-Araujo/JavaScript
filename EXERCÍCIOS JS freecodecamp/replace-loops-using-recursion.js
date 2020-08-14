//recursive function to sum all items of an array
function sum(arr, n) {
  if(n <= 0){
    return 0;
  }else {
    return sum(arr, n - 1)  + arr[n-1];
  }
}
