var nums = [2,5,3,8,9]

const rotateArray = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }

  console.log(rotateArray(nums, 2))