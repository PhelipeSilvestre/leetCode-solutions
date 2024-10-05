# Solution

## Approach 1: Brute Force (Time Limit Exceeded)

### Intuition

Our goal is to remove the smallest subarray so that the sum of the remaining elements is divisible by p.

If the total sum of the array is already divisible by p, there's no need to remove any subarray. However, if the total sum isn't divisible by p, we need to find a subarray to remove. The remainder of the total sum divided by p is the part we want to "eliminate" by removing a subarray whose sum's remainder matches this remainder.

To do this, we can check every possible subarray by starting at each index and calculating the sum of all subarrays that begin at this index. For each subarray, we compute the remaining sum of the elements after removing it. If the remaining sum becomes divisible by p, we record the length of the subarray. We keep track of the smallest such subarray length as we proceed through all possibilities.

This is inefficient because we compute the sum for every subarray, leading to quadratic time complexity. So, this will work for small arrays but will struggle with larger inputs, leading to TLE.

### Algorithm

Calculate the size of the input array nums and the total sum of its elements, using long long to avoid overflow.

If the totalSum is already divisible by p, return 0 (no subarray needs to be removed).

Calculate the target remainder that needs to be removed (i.e., totalSum % p).

Initialize minLen to the size of the array n to keep track of the minimum subarray length.

Iterate over all possible starting indices of subarrays:

For each start index, initialize subSum to 0.
Iterate through all possible ending indices from the start index:
Accumulate the sum of the subarray from start to end.
Calculate the remainingSum after removing the current subarray, using (totalSum - subSum) % p.
If remainingSum is 0:
Update minLen to the smaller value between minLen and the length of the current subarray (end - start + 1).
After checking all possible subarrays, return:

-1 if no valid subarray was found (i.e., minLen remains equal to n).
Otherwise, return minLen as the length of the smallest subarray that can be removed.
