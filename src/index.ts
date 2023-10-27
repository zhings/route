import '@ungap/global-this'
import { parse, inject } from 'regexparam'
import { parsePath } from 'ufo'

const doc = globalThis.document
const win = doc.defaultView
const loc = win?.location

function route(path: string) {}
function routeTo() {}
function routeStart() {}

route.to = routeTo
route.start = routeStart

export { route }
