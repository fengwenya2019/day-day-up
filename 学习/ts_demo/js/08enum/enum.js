"use strict";
// typescript 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 采用关键字enum定义，例如：enum Days{Sun,Mon,Tue,Wed,Thu,Fri,Sat}
// 使用枚举可以定义一些有名字的数字敞亮
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 4] = "Mon";
    Days[Days["Tue"] = 5] = "Tue";
    Days[Days["Wed"] = 6] = "Wed";
    Days[Days["Thu"] = 7] = "Thu";
    Days[Days["Fri"] = 8] = "Fri";
    Days[Days["Sat"] = 9] = "Sat";
})(Days || (Days = {}));
console.log(Days.Sun); // 0  3(指定默认值为3，依次累加)
console.log(Days.Sat); // 6  9
// 枚举成员会被赋值为从0开始递增的数字，同时也会被枚举值到枚举名进行反向映射
console.log(Days); // 枚举类型会被编译成双向映射的对象
console.log(Days[0] === 'Sun');
