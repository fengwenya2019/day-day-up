"use strict";
// TypeScript中对象类型-接口
// 可描述类的一部分抽象行为，也可描述对象的结构形状
// 接口名字一般首字母大写，有的编程语言上建议接口的名称加上前缀I（大写I）
// 赋值的时候，变量的形状必须要跟接口的形状保持一致
var obj1;
// obj1 = {};  // 报错。 'name' is declared here.
obj1 = { name: "张三", age: 18 };
var obj2;
obj2 = { name: "张三", age: 18 };
obj2 = { name: "张三" };
var obj3 = { name: "张三", age: 10, sex: "男", isMarry: true };
var obj3 = { name: 1, age: 10, sex: "男", isMarry: true };
var obj4 = { name: "张三", age: 18 };
obj4.name = "李四";
// obj4.age = 20;  // 报错。Cannot assign to 'age' because it is a read-only property.
