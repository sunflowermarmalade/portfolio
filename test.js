const pinned = require('./data/pinned.json')

pinned.map((obj) => obj.name = obj.name + "xxx")
console.log(pinned)