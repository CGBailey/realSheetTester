var myFunctions = require('../lib/app.js');

describe("checks that each dice roller functions properly", function(){
  it('rolls a random integer between one and twenty',function(){
    expect(myFunctions.testFunc()).toEqual(true);
  })
})
