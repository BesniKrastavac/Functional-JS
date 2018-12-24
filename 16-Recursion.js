module.exports = tree => {
    const data = (Object.entries((tree && tree.dependencies) || []).reduce((acc,curr) => acc.push(curr[0] + '@' + curr[1].version) && (curr[1].dependencies) ? acc.concat(module.exports(curr[1])) : acc, []))
    return data.filter((elem,index) => data.indexOf(elem) === index).sort()
}
