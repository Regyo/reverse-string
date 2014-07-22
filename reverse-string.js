function reverse(string) {
  var result = string.split('');
  result.reverse();
  return result.join('');
}

module.exports = reverse;
