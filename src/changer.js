function Changer() {

}

Changer.prototype.giveChange = function(amount) {
  return ['1p']
}

module.exports = Changer
// 1p, 2p, 5p, 10p, 20p, 50p, 1£, 2£
