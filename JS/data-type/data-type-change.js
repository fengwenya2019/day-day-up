// 类型转换

// 一、字符串转换

// 1、将数字转换为字符串
// String()
console.log('String(768)=' + String(768))
// toString()
const num2 = 999
console.log('num2.toString()=' + num2.toString())

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