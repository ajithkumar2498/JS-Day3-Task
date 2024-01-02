(function (arr1) {
   let palindromes = arr1.filter((curr, idx, arr1) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr; 
  } ) 
  return console.log(palindromes)
}) ( (['mom', 'dad', 'abcde', 'racecar', 'momom','nad','refer']))

