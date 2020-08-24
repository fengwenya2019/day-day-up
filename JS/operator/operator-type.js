// 运算符类型

// 1、条件运算符：if 和 三目运算符


// 1)if语句
const isAlert = false
if (isAlert) {
  console.log('isAlert为true')
} else {
  console.log('isAlert为false')
}

// 数字 0、空字符串 ""、null、undefined 和 NaN 都会被转换成 false
const num = 0
if (num) {
  console.log(num, 'a为true')
} else {
  console.log(num, 'a为false')
}

// 2）三目运算符  条件 ? 结果1 : 结果2 
// 条件成立，为结果1，条件不成立，为结果2

const shopArr = null
console.log(shopArr ? 1 : 0)


const num1 = 12
const num2 = 10

console.log(num1 === num2 ? 'num1，num2相同' : 'num1，num2不同')

// 2、逻辑运算符: ! || &&  

// ! “非”运算符
const test1 = false
console.log('!test1', !test1)

// || “或”运算符：有一个值为真，返回true
const test2 = 0 || 1
console.log('test2', test2)

const test3 = false || true
console.log('test3', test3)

// && “且运算符”：两个值都为真，返回true
const test4 = false && true
console.log('test4', test4)

const test5 = true && true
console.log('test5', test5)


console.log('---------布尔值转换1---------')
// 布尔值转换

const a = false
const b = true

// a || b === !(a && b)
console.log('a || b', a || b)
console.log('!(!a && !b)', !(!a && !b))
console.log('a || b === !(!a && !b)', a || b === !(!a && !b))
console.log(!(!a && !b))

console.log('---------布尔值转换2---------')
console.log('a && b === !(!a || !b)', a && b === !(!a || !b))


// 注意：与运算 && 的优先级比或运算 || 要高。 
// 所以代码 a && b || c && d 完全跟 && 表达式加了括号一样：(a && b) || (c && d)。