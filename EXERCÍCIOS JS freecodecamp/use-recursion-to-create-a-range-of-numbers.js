var countArray = [];
function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum)
    return [];
  else{
    countArray.push(startNum);
    rangeOfNumbers(startNum + 1, endNum);
    return countArray;
  } 
};