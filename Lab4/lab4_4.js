function sum(...args) {
  let result = 0
  let i = 0
  if (args.length === 0) return result
  do {
    result += args[i]
    i++
  } while (i < args.length)
  return result
}

console.log(sum(4, 5, 6))
console.log(sum())
console.log(sum(20, -5, -3, 2))