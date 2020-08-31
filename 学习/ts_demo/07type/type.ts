// TypeScript类型别名
// var str1:string|number = "10"

// 类型别名可以用来给一个类型起一个新名字
// 采用关键字type 例如 type Name = string | number  那么例子中的Name就表示可设置字符串和数值类型
type strType = string | number | boolean
var str1: strType = "10"
str1 = 10
str1 = true



// 可以对于接口也采用类型别名
interface muchType1 {
  name: string
}
interface muchType2 {
  age: number
}
type muchType = muchType1 | muchType2
var obj: muchType = { name: "张三" }
var obj: muchType = { age: 10 }
var obj: muchType = { name: "张三", age: 19 }


// 也可采用type来约束取值只能是某些字符串中的一个：如 type EventNames = "click"|"scroll"|"mousemove"
type sex = "男" | "女" | "1" | "0"
function getSex(s: sex): string {
  return s
}

getSex("女")
getSex("1")

