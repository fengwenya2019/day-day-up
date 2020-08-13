// 运算符


// 一、基本运算符

console.log(1 + 2)
console.log('just ' + 'do ' + 'it')

console.log('1' + 2)
console.log('3' - 1)
console.log(+'88')

console.log('----------------------------')

// 二、值的比较
console.log('1 < 2 :', 1 < 2)
console.log('2 <= 3 :', 2 <= 3)
console.log('2 > 2 :', 2 > 2)
console.log('2 >= 2 :', 2 >= 2)

console.log('1 == 1 :', 1 == 1)
console.log('1 === 1 :', 1 === 1)

console.log("'1' == '1' :", '1' == '1')
console.log("'1' === '1' :", '1' === '1')

console.log("1 == '1' :", 1 == '1')
console.log("1 === '1'", 1 === '1')

console.log('----------------------------')
console.log('null与undefined的比较')
console.log('----------------------------')

console.log('null == null:', null == null)
console.log('null === null:', null === null)

console.log('undefined == undefined:', undefined == undefined)
console.log('undefined === undefined:', undefined === undefined)

console.log("null == undefined:", null == undefined)
console.log("null === undefined:", null === undefined)

console.log('----------------------------')

console.log("'' == null:", '' == null)
console.log("'' === null:", '' === null)

console.log("0 == null:", 0 == null)
console.log("0 === null:", 0 === null)

console.log("[]== null:", [] == null)
console.log("[]=== null:", [] === null)

console.log('{} == null:', {} == null)
console.log('{} === null:', {} === null)

console.log("0 == false:", 0 == false)
console.log("'' == false:", '' == false)

console.log('----------------------------')
console.log('相等性判断（Object.is()）')
console.log('----------------------------')
// 三、相等性判断（Object.is()） 相当于 ==
// Object.is(value1, value2)

console.log("Object.is(1, 1):", Object.is(1, 1))
console.log("Object.is('1', '0'):", Object.is('1', '0'))
console.log("Object.is([], []):", Object.is([], []))

Object.is('foo', 'foo');     // true
Object.is(window, window);   // true
Object.is('foo', 'bar');     // false
Object.is([], []);           // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false
Object.is(null, null);       // true
// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0 / 0);         // true
