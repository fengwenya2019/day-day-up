"use strict";
// typescript 的原始数据类型
// string  number  boolean  null  undefined  enum(枚举)  symbol  void
// 空值一般采用void来表示  void可以表示变量，也可表示函数返回值
// 五大基本类型
var num = 1;
var str = "1";
var isTrue = true;
var un = undefined;
var nul = null;
// num = "1" // 报错。不能将类型“"1"”分配给类型“number”。ts(2322)
// void用来规定函数无返回值
var callback = function () {
    // return 10   // 报错。不能将类型“10”分配给类型“void”。
};
// var num2: void = 3  // 报错。不能将类型“3”分配给类型“void”。
