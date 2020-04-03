const multi = (a, b) => (a * b)
const div = (a, b) => (a / b)

const numbers = [1, 2, 3, 4, 5]

// pattarn1 best: export as module 
module.exports = {multi, div, numbers}

//// pattarn2 better: export with properties 
// exports.func = {multi, div}

//// pattarn3 worst: export with properties 
// exports.div = div
// exports.multi = multi


