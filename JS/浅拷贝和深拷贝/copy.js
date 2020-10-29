// 浅拷贝的意思就是只复制引用（指针），而未复制真正的值。
console.log('-------浅拷贝------')

const fruitsObj = {
  apple:'12个',
  banana:'10个',
  orange:{
    big:'10个',
    little:'20个'
  },
}
const  shallowClone = originObj=> {
  var targetObj = {};
  for(let key in originObj) {
      if (originObj.hasOwnProperty(key)) {
        targetObj[key] = originObj[key];
      }
  }
  return targetObj;
}
const _fruitsObj = shallowClone(fruitsObj) // 浅拷贝
console.log(_fruitsObj===fruitsObj,'..._fruitsObj===fruitsObj')  // false
_fruitsObj.apple='22个' // 第一层，原对象第一层没有改变
_fruitsObj.orange.big='5个' // 第二层，原对象第二层改变了

// 只复制了索引，没有复制真正的值，修改复制的对象的值，原对象的值也发生变化。



// 深拷贝就是对目标的完全拷贝，不像浅拷贝那样只是复制了一层引用，就连值也都复制了。
// console.log('-------深拷贝------')

// 目前实现深拷贝的方法不多，主要是两种：

// --1、利用 JSON 对象中的 parse 和 stringify --- 性能最快
// console.log('-----利用 JSON 对象中的 parse 和 stringify-----')
// const animalObj = {
//   birds:['chicken','duck'],
//   lactation:['dog','cat'],
// }
// const _animalObj =JSON.parse(JSON.stringify(animalObj))  // 深拷贝

// console.log(_animalObj===animalObj,'..._animalObj===animalObj') // false

// _animalObj.lactation=['pig']   // 修改_animalObj中lactation的值

// console.log(_animalObj,animalObj) // _animalObj更改了，animalObj没有更改

// 但是有些情况不能使用：
// a、具有循环引用的对象时，报错
// b、当值为函数、undefined、或symbol时，无法拷贝


// --2、利用递归来实现每一层都重新创建对象并赋值
// console.log('-----利用递归来实现每一层都重新创建对象并赋值-----')

// function deepClone(originObj){
//   const targetObj = originObj.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
//   for(let keys in originObj){ // 遍历目标
//     if(originObj.hasOwnProperty(keys)){       // // hasOwnProperty判断是否为自身属性
//       if(originObj[keys] && typeof originObj[keys] === 'object'){ // 如果值是对象，就递归一下
//         targetObj[keys] = originObj[keys].constructor === Array ? [] : {}
//         targetObj[keys] = deepClone(originObj[keys]);
//       }else{ // 如果不是，就直接赋值
//         targetObj[keys] = originObj[keys]
//       }
//     }
//   }
//   return targetObj
// }

// const PetsObj = {
//   cat:'猫咪',
//   pig:['小猪佩奇','乔治'],
//   dog:{
//     1:'柯基',
//     2:'藏獒'
//   },
//   snake:()=>{
//     console.log('一条蓝色的小蛇')
//   },
//   milk:undefined,
//   sheep:Symbol()
// }
// const _PetsObj = deepClone(PetsObj)
// console.log(_PetsObj===PetsObj) //false
// _PetsObj.pig='小猪佩奇'
// console.log(_PetsObj,PetsObj) // PetsObj没有更改

// javascript中拷贝的函数

// 1、concat只是对数组的第一层进行深拷贝。
// const obj1 = ['a',{b:'c'},'d']
// const _obj1 = [].concat(obj1)
// console.log(_obj1===obj1)  // false
// _obj1[0]='aaa'
// _obj1[1].b='ccc'
// console.log(obj1) // ['a',{b:'ccc'},'d'] 
// 第一层没有更改为深拷贝，其他更改为浅拷贝

// 2、slice 只是对数组的第一层进行深拷贝。
// const obj2 = ['a',{b:'c'},'d']
// const _obj2 = obj2.slice()
// console.log(obj2===_obj2) // false
// _obj2[0]='aaa'
// _obj2[1].b='ccc'
// console.log(obj2) // ['a',{b:'ccc'},'d'] 

// 3、Object.assign()是浅拷贝。 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
// const obj3 = {
//   a:'1',
//   b:{
//     c:1
//   }
// }
// const _obj3 = Object.assign(obj3)
// console.log(obj3===_obj3,'....obj3===_obj3') // true
// _obj3.a = '111'   // 第一层
// _obj3.b.c = {d:'123'}  // 第二层
// console.log(obj3) // {a:'111',b:{c:{d:'123}}}  // 都更改了

// 4、... 展开运算符，... 实现的是对象第一层的深拷贝。后面的只是拷贝的引用值。
// const obj4 = {
//   a:'1',
//   b:{
//     c:1
//   }
// }
// const _obj4 = {...obj4}
// console.log(_obj4===obj4) // false
// _obj4.a = '111'   // 第一层
// _obj4.b.c = {d:'123'}  // 第二层
// console.log(obj4)   // {a:'1',b:{c:{d:'123}}}


// 浅拷贝
// let obj1 = {
//   name : '浪里行舟',
//   arr : [1,[2,3],4],
//   info:{
//     age:12,
//     gender:'girl'
//   }
// };
// let obj3=shallowClone(obj1)
// obj3.name = "阿浪";
// obj3.arr[1] = [5,6,7] ; // 新旧对象还是共享同一块内存
// obj3.info.age=18

// // 这是个浅拷贝的方法,只遍历了第一层
// function shallowClone(source) {
//   var target = {};
//   for(var i in source) {
//       if (source.hasOwnProperty(i)) {
//         console.log(i)
//           target[i] = source[i];
//       }
//   }
//   return target;
// }
// console.log('obj1',obj1) // obj1 { name: '浪里行舟', arr: [ 1, [ 5, 6, 7 ], 4 ] }
// console.log('obj3',obj3) // obj3 { name: '阿浪', arr: [ 1, [ 5, 6, 7 ], 4 ] }
// // 第一层没有改变为深拷贝，其他层为浅拷贝
