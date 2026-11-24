function contract(fn, ...types) {
    const resultType = types[types.length - 1]
    const argTypes = types.slice(0, -1)

    return function(...args) {
        for (let i = 0; i < argTypes.length; i++) {
            if (args[i] === undefined || args[i].constructor !== argTypes[i]) {
                throw new TypeError('Wrong argument type')
            }
        }

        const result = fn(...args)

        if (result === undefined || result.constructor !== resultType) {
            throw new TypeError('Wrong result type')
        }

        return result
    }
}

const add = (a, b) => a + b
const addNumbers = contract(add, Number, Number, Number)
const res = addNumbers(2, 3)
console.dir(res)

const concat = (s1, s2) => s1 + s2
const concatStrings = contract(concat, String, String, String)
const res2 = concatStrings('Hello ', 'world!')
console.dir(res2)