// typescript class类的修饰符

// public private protected

// public修饰的属性或者方法是共有的，可以在任何地方被访问到，默认所有属性或者方法都是public的

// private 修饰的属性或者方法是私有的，不能在声明它的类外面访问

// protected 修饰的属性或者方法是受保护的，它和private类似


// 创建Person类
class Person {
  private name = "张三"
  // private age = 18
  protected age = 18
  say() {
    console.log("我的名字是：" + this.name + ",我的年龄是：" + this.age)
  }
}

// 创建Person的实例
var p = new Person()
// p.say()
// private属性只能在类的内部可以访问：
// console.log(p.name)  // 当一个类成员变量没有修饰的时候，外界是可以进行访问的，默认就是public进行修饰
// console.log(p.age)   // 属性“age”受保护，只能在类“Person”及其子类中访问。


// 创建Child子类
// 一旦父类将属性定义成私有的之后，子类就不能进行访问了
// 父类的属性定义成受保护的之后，可以在子类的里边可以访问。
class Child extends Person {
  callParent() {
    console.log(super.age)
    super.say()
  }
  static test() {
    console.log("test")
  }
}
var cc = new Child()
cc.callParent()
// console.log(cc.age)  // 子类继承了父类，但是没有办法直接获取到父类私有的属性或者受保护的属性
// console.log(cc.say())  // 子类继承了父类，子类就可以继承父类公开的属性或者方法了.


// console.log(Child.callParent())  // 报错类型“typeof Child”上不存在属性“callParent”。t
console.log(Child.test())   // 类的静态方法里边，不可以用this