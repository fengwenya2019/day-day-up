"use strict";
// 任意值（Any）用来表示允许赋值为任意类型
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
var num3 = 1;
num3 = "1";
num3 = true;
num3 = null;
num3 = undefined;
// 变量如果在声明的时候，未指定其类型，那么他就会呗识别为任意值。
var num4; // 没有赋值操作 就会被认为任意值类型  等价于  var num4:any;
num4 = 1;
num4 = "2";
num4 = true;
// TypeScript中的类型推论
// TypeScript会依照类型推论的规则推断出一个类型
var b = 1;
b = 2;
// b = "3"; // 报错。不能将类型“"3"”分配给类型“number”。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查
var c; // 没有给c赋初始值，就是any。  var c:any;
c = 1;
c = "2";
c = false;
