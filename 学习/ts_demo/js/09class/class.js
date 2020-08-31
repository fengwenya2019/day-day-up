"use strict";
// typescript class类的修饰符
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public private protected
// public修饰的属性或者方法是共有的，可以在任何地方被访问到，默认所有属性或者方法都是public的
// private 修饰的属性或者方法是私有的，不能在声明它的类外面访问
// protected 修饰的属性或者方法是受保护的，它和private类似
// 创建Person类
var Person = /** @class */ (function () {
    function Person() {
        this.name = "张三";
        // private age = 18
        this.age = 18;
    }
    Person.prototype.say = function () {
        console.log("我的名字是：" + this.name + ",我的年龄是：" + this.age);
    };
    return Person;
}());
// 创建Person的实例
// var p = new Person()
// p.say()
// private属性只能在类的内部可以访问：
// console.log(p.name)  // 当一个类成员变量没有修饰的时候，外界是可以进行访问的，默认就是public进行修饰
// 创建Child子类
// 一旦父类将属性定义成私有的之后，子类就不能进行访问了
// 父类的属性定义成受保护的之后，可以在子类的里边可以访问。
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.callParent = function () {
        console.log(_super.prototype.age);
        _super.prototype.say.call(this);
    };
    return Child;
}(Person));
var c = new Child();
c.callParent();
// console.log(c.age)  // 子类继承了父类，子类就可以继承父类公开的属性或者方法了
console.log(c.say());
