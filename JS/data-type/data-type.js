// 一、认识八大数据类型

// number string boolean null undefined symbol object bigint(新)
// number 用于任何类型的数字：整数或浮点数，在 ±2 范围内的整数。
// bigint 用于任意长度的整数。
// string 用于字符串：一个字符串可以包含一个或多个字符，所以没有单独的单字符类型。
// boolean 用于 true 和 false。
// null 用于未知的值 —— 只有一个 null 值的独立类型。
// undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型。
// symbol 用于唯一的标识符。
// object 用于更复杂的数据结构。

// 1、Number，用于任何类型的数字：整数或浮点数，在 ±2 范围内的整数。
const num1 = 10
console.log(num1, typeof (num1))

// 2、BigInt，新的数据类型，也是新的数字数据类型
// 2^53-1=9007199254740991，number类型表示的数字的最大范围是-9007199254740991 ～ 9007199254740991
console.log(9999999999999999) // 数字过大导致失去精度，打印出来是10000000000000000
// 而BigInt可以表示大于-(2^53-1)～(2^53-1)范围的数字

/** 使用方法 */
const theBigIntNumber = 9999999999999999n
console.log(theBigIntNumber, typeof (theBigIntNumber))

const alsoHuge = BigInt(99999999999999999);
console.log(alsoHuge, typeof (alsoHuge))

// 3、String，用于字符串：一个字符串可以包含一个或多个字符，所以没有单独的单字符类型。
const str = 'sweet'
console.log(str, typeof (str))

// 4、Boolean，用于 true 和 false。
const isShow = true
console.log(isShow, typeof (isShow))

// 5、Null，用于未知的值 —— 只有一个 null 值的独立类型。
const arr = null
console.log(arr, typeof (arr))

// 6、Undefined，用于未定义的值 —— 只有一个 undefined 值的独立类型。
const test = undefined
console.log(test, typeof (test))

// 7、Symbol，用于唯一的标识符。
// symbol 是一种基本数据类型 （primitive data type）。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法
const symbol1 = Symbol()
console.log('symbol1', symbol1, typeof (symbol1))

const symbol2 = Symbol('data')
console.log('symbol2', symbol2, typeof (symbol2))
console.log(Symbol('data') === Symbol('data'))

const symbol3 = Symbol(99)
console.log('symbol3', symbol3, typeof (symbol3))

// 8、Object 用于更复杂的数据结构。
const obj1 = {
  a: '1',
  b: '3',
}
console.log(obj1, typeof (obj1))

const obj2 = [1, 2.3, 'yes']
console.log(obj2, typeof (obj2), obj2.length) //  "object"

const obj3 = {
  fruits: ['apple', 'orange', 'banana'],
  count: [2, 2, 5],
  saler: 'tianxin'
}
console.log(typeof (obj3), typeof (obj3.fruits))

console.log('---------我是分割线----------')

// 二、检测数据类型
console.log(NaN, typeof (NaN))  // NaN是

console.log([0, 10, 'ha'], typeof ([0, 10, 'ha']))

console.log(Math, typeof (Math))  // "object"  (1) Math 是一个提供数学运算的内建 object。

console.log(null, typeof (null))  // "object"  (2) JavaScript 语言的一个错误，null 不是一个 object。null 有自己的类型，它是一个特殊值。

console.log(alert, typeof (alert)) // "function"  (3) alert 在 JavaScript 语言中是一个函数。