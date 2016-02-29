module.exports = {
  testFunc: function(dice) {
      var d20Result = Math.floor(Math.random()*20+1);
      if( /^[1-9]$|^0[1-9]$|^1[0-9]$|^20$/.test(d20Result)){
        return true;
  }
}
};
