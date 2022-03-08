
function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let summ=parseInt(a)+parseInt(b);
    return cb(summ);
}
function cb(s)
{
    print(s);
}

module.exports = RunCallback;
