const Conqueue = require('./')

const tasks = new Conqueue(2) // Allow 2 tasks to be done concurrently

const a = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('a - done')
      resolve(1)
    }, 1000)
  )
const b = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('b - done')
      resolve(2)
    }, 2000)
  )
const c = () => {
  console.log('c - done')
  return 3
}

const d = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('d - done')
      resolve(4)
    }, 5000)
  )
const e = () =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log('e - done')
      resolve(5)
    }, 3000)
  )
const f = () => {
  console.log('f - done')
  return 36
}

tasks.add(a).add(b).add(c).add(d).add(e).add(f)
// or
tasks.add([a, b, c, d, e, f])
