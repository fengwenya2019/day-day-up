// 类型转换

// 一、字符串转换（String、toString、+'abc'）

// 1、将数字转换为字符串
// String()
console.log('String(768)=' + String(768))
// toString()
const num2 = 999
console.log('num2.toString()=' + num2.toString())
// +字符串
const num3 = 66
console.log(typeof (num3 + 'test'))

// 2、将布尔值转换为字符串
const isShow = false
// String()
console.log('String(isShow)=' + String(isShow))
// toString()
console.log('isShow.toString()=' + isShow.toString())

// 3、将时间转为字符串
const time = new Date()
console.log(time, typeof (time)) // "object"
console.log(String(time), typeof (String(time)))  // "string"
console.log(time.toString(), typeof (time.toString()))  // "string"

console.log('------------------------------------------')

// 二、数值转换（-、+、Number、parseFloat、parseInt）

// 1、将字符串转为数值
const str1 = +'88'
console.log(typeof (str1), str1)

const str2 = '888'
console.log(typeof (Number(str2)), Number(str2))

const str3 = '8888'
console.log(typeof (Number.parseFloat(str3)), Number.parseFloat(str3))

const str4 = '88888'
console.log(typeof (parseInt(str4)), parseInt(str4))

const str5 = '10'
console.log(str5 - 6)

// 2、将布尔值转为数值
// Number(false) === 0 , Number(true) === 1
console.log(Number(false), Number(true))

// 3、将日期转为数值
const date = new Date()
console.log(date)
console.log(Number(date))
console.log(date.getTime())

// 4、其他
console.log(null + 1)
console.log('6' - 1)

console.log('------------------------------------------')

// 三、布尔值转换（Boolean）
// 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false。
// 其他值变成 true

console.log(Boolean(0))
console.log(Boolean(1))

console.log(Boolean(''))
console.log(Boolean('hello'))
console.log('0')

console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

