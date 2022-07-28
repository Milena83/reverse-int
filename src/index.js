module.exports = function reverse(n) {
    let newN = n.toString().split('');
    if (newN[0] == '-') {
        newN.shift();
    }
    return newN.reverse().join('');
}
