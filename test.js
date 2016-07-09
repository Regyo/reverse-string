var assert = require('assert');
var reverse = require('./reverse-string');

assert.equal(reverse('mañana mañana'), 'anañam anañam');
assert.equal(reverse('foo 𝌆 bar'), 'rab 𝌆 oof');
