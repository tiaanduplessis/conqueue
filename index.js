'use strict'

const promisify = require('@tiaanduplessis/promisify')
class Conqueue {
  constructor (concurrent = 1) {
    this.concurrent = concurrent
    this.inProgress = 0
    this.queue = []
  }
  add (task) {
    Array.isArray(task) ? this.queue.push(...task) : this.queue.push(task)
    this._next()
    return this
  }

  _next () {
    while (this.inProgress < this.concurrent && this.queue.length) {
      const task = this.queue.shift()
      promisify(task)().then(() => {
        this.inProgress--
        this._next()
      })
      this.inProgress++
    }
  }
}

module.exports = Conqueue
