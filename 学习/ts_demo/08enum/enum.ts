// typescript 枚举


// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 采用关键字enum定义，例如：enum Days{Sun,Mon,Tue,Wed,Thu,Fri,Sat}

// 使用枚举可以定义一些有名字的数字敞亮
enum Days {
  Sun = 3,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days.Sun)   // 0  3(指定默认值为3，依次累加)
console.log(Days.Sat)   // 6  9

// 枚举成员会被赋值为从0开始递增的数字，同时也会被枚举值到枚举名进行反向映射

console.log(Days)  // 枚举类型会被编译成双向映射的对象
console.log(Days[0] === 'Sun')