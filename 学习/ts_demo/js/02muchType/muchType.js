"use strict";
// var muchtype:string = "hello";
// muchtype = 10 // 报错。不能将类型“10”分配给类型“string”。
// *** TypeScript联合类型 ***
// 联合类型白噢是取值可以为多种类型中的一种
var muchtype = "hello";
muchtype = 10; // 报错。不能将类型“10”分配给类型“string”。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查
var muchtype2;
muchtype2 = 1;
muchtype2 = "2";
muchtype2 = true;
// 只能访问此联合类型内的所有类型里共有的属性或者方法
var muchtype3 = "hi";
muchtype3 = 10;
// console.log(muchtype3.length)  // length是string的属性或者方法
console.log(muchtype3.toString()); // toString()是string|number共有的属性或者方法
