module.exports = function reverse (n) {
    if (n < 0) {
        n = -(n);
    }
  let number = n.toString().split('').reverse().join('');
  return result = Number(number);
}
