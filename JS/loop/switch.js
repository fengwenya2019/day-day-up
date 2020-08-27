// switch
// switch 语句用来将表达式的值与 case 语句匹配，并执行与情况对应的语句。 
// switch 语句可以替代多个 if 判断，为多个分支选择的情况提供一个更具描述性的方式。

const fruits = [
  {
    name: 'apple',
    price: 10,
  },
  {
    name: 'banana',
    price: 16,
  },
  {
    name: 'orange',
    price: 13,
  },
  {
    name: 'peach',
    price: 9,
  },
]

fruits.map(fruit => {
  switch (fruit.name) {
    case 'apple':
      console.log('apple:' + fruit.price + '元一个')
      break;
    case 'banana':
      console.log('banana:' + fruit.price + '元一个')
      break;
    case 'orange':
      console.log('orange:' + fruit.price + '元一个')
      break;
    case 'peach':
      console.log('peach:' + fruit.price + '元一个')
      break;
  }
})