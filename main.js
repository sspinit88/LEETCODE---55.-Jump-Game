/*
55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 105


*/

/**
 * This function determines if we can reach the last index of the array.
 * Эта функция определяет, можем ли мы достичь последнего индекса массива.
 *
 * @param {number[]} nums - The array of maximum jump lengths. Массив максимальных длин прыжков.
 * @return {boolean} True if we can reach the last index, false otherwise. True, если мы можем достичь последнего индекса, иначе false.
 */
 function canJump(nums) {
  // Initialize the maximum index we can reach as 0.
  // Инициализируем максимальный индекс, который мы можем достичь, как 0.
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
      // If we can't reach the current index, return false.
      // Если мы не можем достичь текущего индекса, возвращаем false.
      if (i > maxIndex) {
          return false;
      }

      // Update the maximum index we can reach.
      // Обновляем максимальный индекс, который мы можем достичь.
      maxIndex = Math.max(maxIndex, i + nums[i]);
  }

  // If we can reach the last index, return true.
  // Если мы можем достичь последнего индекса, возвращаем true.
  return true;
}
