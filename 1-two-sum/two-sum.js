function twoSum(nums, target) {
    //solved ->
    let map = {};
    for (let i =0; i < nums.length; i++) {
        let remaining = target - nums [i];

        if (map[remaining] !== undefined) {
            return [map[remaining],i];

        }
        map[nums[i]] = i;
    }
}