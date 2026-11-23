function sum(...args) {
  let result = 0
  for (const num of args) {
    result += num
  }
  return result
}

console.log(sum(4, 5, 6))
console.log(sum())
console.log(sum(20, -5, -3, 2))