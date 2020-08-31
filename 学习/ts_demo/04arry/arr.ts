// TypeScript数组类型
// 数组表示法

// 类型+方括号
var arr1: number[] = [1, 2, 3]
var arr2: string[] = ["1", "2", "3"]
var arr3: any[] = [1, "2", true]


// 数组泛型Array<elementType>表示法
var arrType1: Array<number> = [1, 2, 3]
var arrType2: Array<string> = ["1", "2", "3"]
var arrType3: Array<any> = [1, "2", true]


// 接口表示法
interface IArr {
  [index: number]: number
}
var arrType4: IArr = [1, 2, 3]


interface Istate6 {
  username: string,
  age: number
}
interface IArr2 {
  [index: number]: Istate6
}
// var arrType5:IArr2 = [1,2,3] // 报错。不能将类型“number”分配给类型“Istate”
var arrType6: IArr2 = [{ username: "张三", age: 10 }]

// 接口+泛型
var arrType7: Array<Istate6> = [{ username: "张三", age: 10 }]

// 接口+（类型+方括号）
var arrType8: Istate6[] = [{ username: "张三", age: 10 }]

