"use strict";
// TypeScript类型断言
var num1 = "10";
num = 20;
// console.log(num.length)  // 报错。类型“number”上不存在属性“length”。
// 类型断言，可以用来手动指定一个值的类型
// 语法：  （1）<类型>值  （2）值as类型
function getAssert(name) {
    // return (<string>name).length
    return name.length;
}
// ** 在jsx语法（React的jsx语法的ts版）必须采用第二种（as）
// ** 类型断言不是类型转换。 断言成一个联合类型中不存在的类型是不允许的。
function getAssert2(name) {
    // return (name as boolean).length    // 报错。
}
