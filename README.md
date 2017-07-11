
<h1 align="center">conqueue</h1>
<div align="center">
  <strong>Simple add only async task queue with concurrency support</strong>
</div>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/conqueue">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/conqueue.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/@tiaanduplessis/conqueue">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/conqueue.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/conqueue">
    <img src="https://img.shields.io/travis/tiaanduplessis/conqueue.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/conqueue/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiaanduplessis/conqueue.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/conqueue/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/conqueue.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/conqueue/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/conqueue.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20conqueue!%20https://github.com/tiaanduplessis/conqueue%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/conqueue.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/conqueue/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install @tiaanduplessis/conqueue
# OR
$ yarn add @tiaanduplessis/conqueue
```

## Usage

```js

const Conqueue = require('conqueue')

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

// a - done
// c - done
// b - done
// e - done
// f - done
// a - done
// d - done
// c - done
// b - done
// e - done
// f - done
// d - done
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/conqueue/issues).

## License

Licensed under the MIT License.
