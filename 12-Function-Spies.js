module.exports = (target, method) => {
    // return value must be object, reason is reference
    let objectForReference = { count: 0 }
    // must be keep original method
    const fun = target[method];
    target[method] = (...args) => objectForReference.count++ && fun(args)
    return objectForReference
}