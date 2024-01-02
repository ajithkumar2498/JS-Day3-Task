

( function removeDuplicates(arr1) {
    var res= arr1.filter((item,
        index) => arr1.indexOf(item) === index);
  return console.log(res)
}) ([2,5,3,9,2,4,3])
