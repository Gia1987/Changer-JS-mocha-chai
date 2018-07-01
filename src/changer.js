function Changer() {

}

Changer.prototype.giveChange = function(amount) {
  var change = []
  if(amount > 199){
      change.push('2£') ;
    }else if (amount > 99 ) {
      change.push('1£');
    }else if (amount > 49) {
      change.push('50p');
    }else if (amount > 19) {
      change.push('20p');
    }else if(amount > 9){
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
