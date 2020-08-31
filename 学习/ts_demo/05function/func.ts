// TypeScript函数类型

// 1.声明式函数
// 函数约束：有函数本身的参数约束，也有返回值约束，还有函数本身赋值的变量的约束
function funcType1(name: string, age: number): number {
  return age   //返回值约束为number类型
}
var ageNum1: number = funcType1("张三", 18)

// 函数参数不确定的情况下
function funcType2(name: string, age: number, sex?: string): number {
  return age
}
var ageNum2: number = funcType2("张三", 18, "男")

// 函数参数的默认值
function funcType3(name: string = "张三", age: number = 18): number {
  return age
}

// 2.表达式类型的函数
var funcType4 = function (name: string, age: number): number {
  return age
}

var funcType5: (name: string, age: number) => number = function (name: string, age: number): number {
  return age
}

interface func6 {
  (name: string, age: number): number
}
// func6相当于上一个例子的(name: string, age: number) => number
var funcType6: func6 = function (name: string, age: number): number {
  return age
}


// 可采用重载的方式才支持联合类型的函数关系（对于联合类型的函数，可以采用重载的方式)
// 输入是number，输出也是number
// 输入是string，输出也是string
function getValue(value: number): number;  // 重载1
function getValue(value: string): string;  // 重载2
function getValue(value: string | number): string | number {
  return value
}

// let a:number = getValue(1)  // 报错。不能将类型“string | number”分配给类型“number”。
let d: number = getValue(1)
let e: string = getValue("1")