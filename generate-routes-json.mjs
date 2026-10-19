import fs from 'node:fs'
import path from 'node:path'
import { navigation } from './src/lib/navigation.ts'

const routes = navigation[0].links
const routesJson = JSON.stringify(routes, null, 2)
fs.writeFileSync(path.join(import.meta.dirname, 'public', 'routes.json'), routesJson)
