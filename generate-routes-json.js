const fs = require('fs')
const path = require('path')
const { navigation } = require('./navigation')

const routes = navigation[0].links
const routesJson = JSON.stringify(routes, null, 2)
fs.writeFileSync(path.join(__dirname, 'public', 'routes.json'), routesJson)
