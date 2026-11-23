function seq(...fns) {
    return function chain(value) {
        if (typeof value === 'number') {
            return fns.reduceRight((acc, fn) => fn(acc), value)
        }

        fns.push(value)
        return chain
    }
}

console.log(seq(x => x + 7)
               (x => x * 2)(5))

console.log(seq(x => x * 2)
               (x => x + 7)(5))

console.log(
    seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7)
)