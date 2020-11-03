function soma(a) {
    return function(b) {
        return a + b;
    }    
}
const soma2 = soma(2);

var r1 = soma2(2);
var r2 = soma2(3);
var r3 = soma2(4);
var r4 = soma2(5);

console.log(r1) // 4
console.log(r2) // 5
console.log(r3) // 6
console.log(r4) // 7


/* 
function soma(n1,n2) {
    return n1 + n2
}

var r1 = soma(2, 2)
var r2 = soma(2, 3)
var r3 = soma(2, 4)
var r4 = soma(2, 5)

console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
*/
