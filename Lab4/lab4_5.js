function sum(...args) {
  return args.reduce((result, num) => {
    return result + num
  }, 0)
}

console.log(sum(4, 5, 6))
console.log(sum())
console.log(sum(20, -5, -3, 2))