"use strict";
const v = "Hi!  I'm a strict mode script!";
console.log(v)

var a = 1
console.log(a)

const b = 9

// const b = 10

const myFunction = () => {
  "use strict";
  // c = 13
}

myFunction()

// delete myFunction

// var x = 010

// var y = \010

var obj = {
  y: 'sweet',
};

Object.defineProperty(obj, "x", { value: 1, writable: false });   // writable: false,只读不可修改
Object.defineProperty(obj, "y", { value: 'no', writable: false });

// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

// obj.x = 3.14 //赋值无效，因为‘x’是只读属性，启用严格，模式控制台报错。

// obj.y = 'tx'

console.log(obj)

var obj2 = {
  a: 10,
  get x() {
    return '000'
  }
}

console.log(obj2)

obj2.a = 3.14;
// obj2.x = 3.14;  // 不允许对一个使用getter方法读取的属性进行赋值


