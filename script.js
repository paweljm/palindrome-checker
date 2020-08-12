function palindrome(str) {
    let boolArr = [];
    str = str.toLowerCase();
    str = str.match(/[a-z0-9]/g);
    //console.log(str);
    let arr = str.join('');
    for (let i = 0, j=arr.length-1; i< arr.length;i++,j--) {
      if (arr[i] == arr[j]){
        boolArr.push('true')
      } else if (arr[i] != arr[j]) {
        boolArr.push('false');
      }
    }
    //console.log(boolArr);
    //console.log(arr);
    if (boolArr.includes('false') == false){
      return true;
    } else if (boolArr.includes('false') == true){
      return false;
    }
  }
  
  
  
  palindrome("Eye");
  console.log(palindrome("2A3% 3a2"));
  console.log(palindrome("1 eye for of 1 eye."));
  