const compose = (...fns) => {
    const handlers = []

    function f(x) {
        let result = x
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                result = fns[i](result)
            }
        } catch (e) {
            handlers.forEach(h => h(e))
            return undefined
        }
        return result
    }

    f.on = (name, handler) => {
        if (name === 'error') handlers.push(handler)
    }

    return f
}

const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3

const f = compose(inc, twice, cube)
console.log(f(5))

const bad = x => {
    throw new Error('Something broke')
}

const g = compose(inc, bad, cube)
g.on('error', e => console.log('Error:', e.message))
console.log(g(5))