"use strict";
// TypeScript数组类型
// 数组表示法
// 类型+方括号
var arr1 = [1, 2, 3];
var arr2 = ["1", "2", "3"];
var arr3 = [1, "2", true];
// 数组泛型Array<elementType>表示法
var arrType1 = [1, 2, 3];
var arrType2 = ["1", "2", "3"];
var arrType3 = [1, "2", true];
var arrType4 = [1, 2, 3];
// var arrType5:IArr2 = [1,2,3] // 报错。不能将类型“number”分配给类型“Istate”
var arrType6 = [{ username: "张三", age: 10 }];
// 接口+泛型
var arrType7 = [{ username: "张三", age: 10 }];
// 接口+（类型+方括号）
var arrType8 = [{ username: "张三", age: 10 }];
