const greet = require('./greet')

describe('greet', () => {
  it('greets Minsi', () => {
    expect(greet("Minsi")).toEqual('Hi, Minsi!')
  })
})