function sum(...args) {
  let result = 0
  let i = 0
  while (i < args.length) {
    result += args[i]
    i++
  }
  return result
}

console.log(sum(4, 5, 6))
console.log(sum())
console.log(sum(20, -5, -3, 2))