const arr = ['mom', 'dad', 'abcde', 'racecar', 'momom','nad','refer'];

let namePalindrome = (arr)=> {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}

console.log(namePalindrome(arr));