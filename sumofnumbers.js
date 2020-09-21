function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let count = 0;
  while (count < nums.length) {
    total += nums[count];
    count += 1;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

const nums = [4, 6, 3, 2, 7, 8, 5];
console.log(`sumFor: ${sumFor(nums)}`);
console.log(`sumWhile: ${sumWhile(nums)}`);
console.log(`sumRecursion: ${sumRecursion(nums)}`);
console.log(`sumTheSimpleWay: ${sumTheSimpleWay(nums)}`);
