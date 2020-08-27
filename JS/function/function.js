// function 函数


console.log('--------1.定义一个函数--------')
// 1.定义一个函数
// 1）函数声明
function getUserInfo(userName) {
  // ...函数体
  return userName + ' is a girl'
}
console.log(getUserInfo('tianxin'))

// 2) 函数表达式
const getInfo = function (userName) {
  return userName + ' is a boy'
}
console.log(getInfo('luhan'))


console.log('--------2.函数调用--------')
// 2.函数调用：
// 使用 函数表达式 定义函数时，调用函数的方法必须写在定义之后先声明
// 1) 函数声明
console.log(changeNum(0))
function changeNum(num) {
  return num + 1
}

// 2）函数表达式
// console.log(changeName('ka')) // 会报错，Uncaught ReferenceError: Cannot access 'changeName' before initialization
const changeName = function (name) {
  return 'jacy' + name
}
console.log(changeName('ca'))   // 表达式法：先定义，再调用


console.log('--------3.函数的变量--------')
// 3.函数的变量
// 1）局部变量：函数中声明的变量只能在该函数内可见。
const getName = function () {
  let newName = 'judy'
  return newName
}
getName()
// console.log(newName) // Uncaught ReferenceError: newName is not defined


// 2）全局变量：函数内可以使用外部变量，并且可以修改外部变量的值。
// var age = 12
// const changeAge = function () {
//   age = 18
//   return age
// }
// console.log(changeAge()) // 18

let gender = 'girl'
const changeGender = function () {
  let gender = 'boy'
  return gender
}
console.log(changeGender(), gender) // 'boy'  'girl


console.log('--------4.函数的参数--------')
// 4.函数的参数
// 从ECMAScript 6开始，有两个新的类型的参数：默认参数，剩余参数。

// 1）默认参数：
// 若函数没有传入参数，则参数默认值为undefined，通常设置参数默认值是这样做的：

// 在es6之前没有默认参数
const func1 = function (a, b) {
  b = b ? b : 1
  return a * b
}
console.log(func1(2, 3))  // 6
console.log(func1(2))     // 2

// Es6,设置默认参数
const func2 = function (a, b = 1) {
  return a * b
}
console.log(func1(2, 3)) // 6
console.log(func1(2))    // 2


// 2）剩余参数:可以将参数中不确定数量的参数表示成数组
const fun3 = function (a, b, ...c) {
  console.log(c)
}
fun3(1, 2, 5, 6, 7, 9)


// 3）arguments对象
// 函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内，我们可以使用 arguments 对象获取函数的所有参数：
const fun4 = function () {
  console.log(arguments);
  console.log(arguments.length);
}
fun4('leo', 'july', 'cindy');


let argumentConcat = function (separator) {
  console.log(separator)          // ,
  console.log(arguments.length)   // 3
  console.log(arguments)          // 可以查看全部参数
  let result = '', i;
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
argumentConcat(',', 'leo', 'cindy'); //"leo,cindy,"
// console.log(argumentConcat(',', 'leo', 'cindy'))


console.log('--------5. 函数返回值--------')
// 5. 函数返回值
let sum = function (a, b) {
  return a + b;
};
let res = sum(1, 2);
console.log(res); // 3

// 默认空值的 return 或没有 return 的函数返回值为 undefined 。


// 箭头函数
// 箭头函数不存在this；
// 箭头函数不能当做构造函数，即不能用new实例化；
// 箭头函数不存在arguments对象，即不能使用，可以使用rest参数代替；
// 箭头函数不能使用yield命令，即不能用作Generator函数。 一个简单的例子：
console.log(this, '111')

function Person() {
  this.age = 0
  setInterval(() => {
    this.age++;
  }, 1000);

}
var p = new Person(); // 定时器一直在执行 p的值一直变化

console.log(p.age)