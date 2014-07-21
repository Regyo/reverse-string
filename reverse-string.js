reverse = function (string) {

    var tab = new Array;

    for (var i = 0; i < string.length; i++) {
    tab[i]=string.substring(i,i+1);
    }

    tab.reverse();
    var result=tab.join("");


    return result;
}

module.exports = reverse