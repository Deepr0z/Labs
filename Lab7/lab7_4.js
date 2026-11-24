function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item))
}

const array1 = [7, -2, 10, 5, 0]
const array2 = [0, 10]
const result = difference(array1, array2)
console.log(result)

const a1 = ['Beijing', 'Kiev']
const a2 = ['Kiev', 'London', 'Baghdad']
console.log(difference(a1, a2))