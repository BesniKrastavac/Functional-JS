module.exports = (fun, iterations = fun.length) => argument => (iterations === 1) ? fun(argument) : module.exports(fun.bind(this, argument), iterations - 1)
