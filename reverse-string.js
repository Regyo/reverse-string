function reverse(string) {
  var result = string.split('');
  result.reverse();
  return result.join('');
}

if (typeof module != 'undefined' && module.exports) {
    module.exports = reverse;
}
