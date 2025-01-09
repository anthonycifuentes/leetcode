/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        let firstNumber = nums[i];
        for (let j = 1; j < nums.length; j++){
            let secondNumber = nums[j]
            if(firstNumber + secondNumber === target) {
                console.log(i, j)
                return [i, j]
            }
        }
        
    }
};

twoSum([2, 2, 11, 7], 9) // [0, 1]