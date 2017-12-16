module.exports.testCallback = function(callback){
  callback()
}

module.exports.testExistFunction = function(){
  let object = {
    name:'jeff'
  }
  return object 
}

module.exports.testMock = function(){
  return 123
}

module.exports.testMockwithArg = function(name){
  return 'hell' + name
}