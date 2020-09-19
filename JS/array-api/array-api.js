// array-api

console.log('--------join---------')
// 1、【join】：将数组的元素拼接成字符串。 不改变原数组，返回值为string
const arr = ['a', 'b', 'c']
const arr1 = arr.join('')
console.log(arr1, '...arr1')

const arr2 = arr.join('-')
console.log(arr2, '...arr2')

console.log('--------slice---------')
// 2、【slice】：截取数组的一段，不取数组的右区间。不改变原数组，返回值为截取的数组
const arr3 = [1, 'd', 9, 0, 'color']
const arr4 = arr3.slice(1, 3)
console.log(arr4, arr3)

console.log('--------sort---------')
// 3、【sort】：给数组排序。改变原数组，返回值为排序后的数组
const arr5 = [1, 3, 5, 2, 3, 5, 3, 5, 7]
const arr6 = arr5.sort()
console.log(arr5, '...arr5')

const arr7 = [
  'sd',
  99,
  'oi',
  'iods',
  'adf',
  0,
  89,
  '...',
  '数',
  '学',
  '好',
  '在',
  '一',
  '难',
]
arr7.sort()
console.log(arr7, '...arr7')

console.log('--------forEach---------')
// 4、【forEach】遍历
const arr8 = ['apple', 'banana', 'orange', 'peach']
let arr8_test = []
arr8.forEach((item, index) => {
  //   console.log(item, index)
  arr8_test.push({ item: `剩余${index + 3}个` })
})
console.log(arr8_test, '...arr8_test')

console.log('--------map---------')
// 5、【map】遍历
const arr9 = [1, 2, 3, 'test']
const arr10 = arr9.map((item, index) => {
  console.log(item, index)
  return item + '90'
})
console.log(arr9, arr10)

console.log('--------filter---------')
// 6、【filter】过滤，过滤出返回值。不改变原数组，返回值为通过过滤条件的数组
const arr11 = [
  {
    name: 'tx',
    age: 18,
  },
  {
    name: 'xm',
    age: 13,
  },
  {
    name: 'lj',
    age: 18,
  },
  {
    name: 'xg',
    age: 16,
  },
  {
    name: 'zq',
    age: 12,
  },
]
const arr12 = arr11.filter((item) => item.age === 18)
console.log(arr12, '...arr12')

console.log('--------reduce---------')
// 7、【reduce】对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)

const arr13 = [1, 2, 3, 4]
const reducer = (acc, cur) => acc + cur
const res = arr13.reduce(reducer)
console.log(res, '...res')

console.log('--------from---------')
// 【from】从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
console.log(Array.from([1, 2, 3], (x) => x + 10))

const set = new Set(['foo', 'bar', 'baz', 'foo'])
console.log(set, '...set')
console.log(Array.from(set))

const mapper = new Map([
  [1, 3],
  [2, 4],
  [4, 8],
])
console.log(mapper)
console.log(Array.from(mapper.values()))
console.log(Array.from(mapper.keys()))

function f() {
  return Array.from(arguments)
}
console.log(f(3, 4, 5))

console.log('--------isArray---------')
// 【isArray】用于确定传递的值是否是一个Array
console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray('foobar'))
