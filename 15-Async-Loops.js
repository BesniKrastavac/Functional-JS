module.exports = (userIds, load, done) => userIds.reduce((acc, curr) => (load(curr, user => acc[curr] = user)) && ((curr === userIds.length - 1) ? acc : done(acc)), [])

