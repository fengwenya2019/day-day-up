"use strict";
const v = "Hi!  I'm a strict mode script!";
console.log(v)

// 1、没有声明的变量不能赋值
a = 1

// 2、不能重复声明变量
const b = 9
// const b = 10

// 3、函数内使用严格模式
const myFunction = () => {
  "use strict";
  // c = 13
}
myFunction()

// 4、不允许删除变量或函数
// delete b;
// delete myFunction;

// 5、不允许使用八进制
// var x = 010

// 6、不允许使用转义字符
// var y = \010


// 7、不允许对只读属性赋值
var obj = {
  y: 'sweet',
};
// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
Object.defineProperty(obj, "x", { value: 1, writable: false });   // writable: false,只读不可修改
Object.defineProperty(obj, "y", { value: 'no', writable: false });
// obj.x = 3.14 //赋值无效，因为‘x’是只读属性，启用严格，模式控制台报错。
// obj.y = 'tx'
console.log(obj)

// 8、不允许对一个使用getter方法读取的属性进行赋值
var obj2 = {
  a: 10,
  get x() {
    return '000'
  }
}
console.log(obj2)
obj2.a = 3.14;
// obj2.x = 3.14;  // 不允许对一个使用getter方法读取的属性进行赋值

// 9、不能删除一个不可删除的属性
// delete Object.prototype;

// 10、由于一些安全原因，在作用域 eval() 创建的变量不能被调用：
// eval("var x = 2");
// alert(x);

// 11、禁止this关键字指向全局对象
function f1() {
  console.log(this + 'this为全局对象')
  return !this;
}
console.log(f1()) // 返回false，因为"this"指向全局对象，"!this"就是false

function f2() {
  "use strict";
  console.log(this)
  console.log("!undefined = " + !undefined)
  return !this;
}
console.log('f2() = ' + f2()) // 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。

// 使用构造函数时，如果没有new，this不在指向全局对象，而是报错。
function f3() {
  "use strict";
  this.a = 1;
};
//f3();// 报错，this未定义
new f3(); // 未报错
console.log(new f3())
