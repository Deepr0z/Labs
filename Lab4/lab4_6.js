function max(matrix) {
  let result = -Infinity

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > result) {
        result = matrix[i][j]
      }
    }
  }

  return result
}

const m = max([[3, 17, 8],
               [25, 4, 11],
               [9, 30, 6]])
console.log(m)