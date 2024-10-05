var minSubarray = function (nums, p) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  const targetRemainder = totalSum % p;

  if (targetRemainder === 0) return 0; // Já é divisível por p

  const prefixMap = new Map();
  let currentSum = 0;
  let minLength = nums.length;

  // Mapeamos o prefixo "inicial"
  prefixMap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    currentSum = (currentSum + nums[i]) % p;

    // Calculamos o que precisamos para que o restante seja divisível
    const neededPrefix = (currentSum - targetRemainder + p) % p;

    if (prefixMap.has(neededPrefix)) {
      minLength = Math.min(minLength, i - prefixMap.get(neededPrefix));
    }

    // Armazenar o prefixo mod p e o índice atual
    prefixMap.set(currentSum, i);
  }

  return minLength === nums.length ? -1 : minLength;
};
