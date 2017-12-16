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

  it('should using a spy to wrap an existing method',function(){
    let s = sinon.spy(sinonM,'testExistFunction')
    let obj = sinonM.testExistFunction()
    assert.ok(s.calledOnce)
    assert.equal(s.getCall(0).returnValue.name,'jeff')
  })

  it('should be mock by sinon mock',function(){
    let sinonMock = sinon.mock(sinonM)
    sinonMock.expects('testMock').resolves(456).once()
    let r =sinonM.testMock()
    assert.deepEqual(r,Promise.resolve (456) )
    sinonMock.verify()
    sinonMock.restore()
  })

  it.only('should be mock by sinon mock with arg',function(){
    let sinonMock = sinon.mock(sinonM)
    sinonMock.expects('testMockwithArg').withArgs('jeff').resolves('seafood noob')
    let r = sinonM.testMockwithArg('jeff')
    assert.deepEqual(r,Promise.resolve('seafood noob'))
  })
})

