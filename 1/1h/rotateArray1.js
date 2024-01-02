

 (function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return console.log(nums);
  })([2,5,3,8,9], 2)

  