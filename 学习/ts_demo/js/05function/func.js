"use strict";
// TypeScript函数类型
// 1.声明式函数
// 函数约束：有函数本身的参数约束，也有返回值约束，还有函数本身赋值的变量的约束
function funcType1(name, age) {
    return age; //返回值约束为number类型
}
var ageNum1 = funcType1("张三", 18);
// 函数参数不确定的情况下
function funcType2(name, age, sex) {
    return age;
}
var ageNum2 = funcType2("张三", 18, "男");
// 函数参数的默认值
function funcType3(name, age) {
    if (name === void 0) { name = "张三"; }
    if (age === void 0) { age = 18; }
    return age;
}
// 2.表达式类型的函数
var funcType4 = function (name, age) {
    return age;
};
var funcType5 = function (name, age) {
    return age;
};
// func6相当于上一个例子的(name: string, age: number) => number
var funcType6 = function (name, age) {
    return age;
};
function getValue(value) {
    return value;
}
// let a:number = getValue(1)  // 报错。不能将类型“string | number”分配给类型“number”。
var d = getValue(1);
var e = getValue("1");
