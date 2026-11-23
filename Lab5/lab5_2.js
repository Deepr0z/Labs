function array() {
    const list = []

    function at(i) {
        return list[i]
    }

    at.push = function(item) {
        list.push(item)
    }

    at.pop = function() {
        return list.pop()
    }

    return at
}

const arr = array()

arr.push('first')
arr.push('second')
arr.push('third')

console.log(arr(0))
console.log(arr(1))
console.log(arr(2))

console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())