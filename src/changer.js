function Changer() {

}

Changer.prototype.giveChange = function(amount) {
  if(amount > 4){
      return ['5p']
    }else if (amount > 1) {
      return ['2p']
    }else{
      return ['1p']
    }
}

module.exports = Changer
// 1p, 2p, 5p, 10p, 20p, 50p, 1£, 2£
