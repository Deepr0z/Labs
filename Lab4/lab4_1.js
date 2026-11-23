function sum(...args) {
  let a = 0
  for (let i = 0; i < args.length; i++) {
    a += args[i]
  }
  return a
}

console.log(sum(4, 5, 6))
console.log(sum())
console.log(sum(20, -5, -3, 2))