function Changer() {
  this.coins = {
    200: '2£',
    100: '1£',
    50: '50p',
    20: '20p',
    10: '10p',
    5: '5p',
    2: '2p',
    1: '1p'
  }

}

Changer.prototype.giveChange = function(amount) {
  var change = []
  var amountLeft = amount
  Object.keys(this.coins).reverse().forEach(key => {
    while (amountLeft >= key && amountLeft > 0){
      amountLeft = amountLeft - key
      change.push(this.coins[key]);
    }
  });
  return change
}

module.exports = Changer
// 1p, 2p, 5p, 10p, 20p, 50p, 1£, 2£
