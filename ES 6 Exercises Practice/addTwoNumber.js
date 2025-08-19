function addWithOR(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;           // sum without carry
    b = carry << 1;      // propagate carry
              // use OR to merge new sum
  }
  return a;
}

console.log(addWithOR(5, 3));  // 8
