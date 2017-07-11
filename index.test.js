const Conqueue = require('./')

test('should create new queue', () => {
  expect(Conqueue).toBeDefined()
  expect(typeof Conqueue).toBe('function')
  expect(new Conqueue()).toBeInstanceOf(Conqueue)
})

test('should add task to queue', () => {
  const q = new Conqueue()
  const fn = jest.fn()

  q.add(fn)
  expect(fn).toBeCalled()
})
