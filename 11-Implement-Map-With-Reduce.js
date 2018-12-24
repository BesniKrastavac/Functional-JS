module.exports = (arr, fn) => arr.reduce((acc, curr) => acc.push(fn(curr)) && acc, [])
