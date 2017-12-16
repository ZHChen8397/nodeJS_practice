const mocha = require('mocha')
const assert = require('assert')
let sinonM = require('../modules/sinon.js')
let sinon = require('sinon') 
describe('sinon test',function(){
  it('should creating a spy as an anonymous function',function(){
    let s = sinon.spy()
    sinonM.testCallback(s)
    assert.ok(s.called)
  })

  it.only('should using a spy to wrap an existing method',function(){
    let s = sinon.spy(sinonM,'testExistFunction')
    let obj = sinonM.testExistFunction()
    assert.ok(s.calledOnce)
    assert.equal(s.getCall(0).returnValue.name,'jeff')
  })
})

