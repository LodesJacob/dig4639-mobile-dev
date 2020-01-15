console.log('hello world');
var x = 100;
var y = [1, 2, 3];

function scopeDemo(y1) {
    console.log(x)
    let a = 3, b = 4, c = 5;
    console.log(a);
    console.log(b);
    console.log(c);
    y1[0] = 500;
    a += y1[0];
    var x = 2;
    if(true) {
        var x = 0;
    }
    return a;
}

x = scopeDemo(y);
console.log(x);
console.log(y);a