function Changer() {

}

Changer.prototype.giveChange = function(amount) {
  var change = []
  if(amount > 9){
      change.push('10p') ;
    }else if (amount > 4) {
      change.push('5p');
    }else if (amount > 1) {
      change.push('2p');
    }else{
      change.push('1p');
    }
    return change
}

module.exports = Changer
// 1p, 2p, 5p, 10p, 20p, 50p, 1£, 2£
