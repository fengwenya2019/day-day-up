// TypeScript中对象类型-接口
// 可描述类的一部分抽象行为，也可描述对象的结构形状
// 接口名字一般首字母大写，有的编程语言上建议接口的名称加上前缀I（大写I）
// 赋值的时候，变量的形状必须要跟接口的形状保持一致

// 定义接口  强约束规范
interface Istate {
  name: string,
  age: number
}
var obj1: Istate;
// obj1 = {};  // 报错。 'name' is declared here.
obj1 = { name: "张三", age: 18 }


// 接口中可定义 可选属性、只读属性、任意属性
// 可选属性
interface Istate2 {
  name: string,
  age?: number
}
var obj2: Istate2;
obj2 = { name: "张三", age: 18 }
obj2 = { name: "张三" }

// 任意属性：属性个数不确定的时候 【any必须是任意类型】
interface Istate3 {
  name: string | number,
  age?: number,
  [propName: string]: any
}
var obj3: Istate3 = { name: "张三", age: 10, sex: "男", isMarry: true }
var obj3: Istate3 = { name: 1, age: 10, sex: "男", isMarry: true }

// 只读属性
interface Istate4 {
  name: string,
  readonly age: number   // 只读：一旦定义不可修改。
}
var obj4: Istate4 = { name: "张三", age: 18 }
obj4.name = "李四";
// obj4.age = 20;  // 报错。Cannot assign to 'age' because it is a read-only property.