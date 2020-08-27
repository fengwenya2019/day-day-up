// 循环

// 1、while
console.log('---------while-------')
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n, x)
}


// 2、do...while
console.log('---------do...while-------')
var i = 1
do {
  i += 2;
  console.log(i)
} while (i < 5)

// 3、for循环
console.log('---------for循环-------')
for (let index = 0; index < 10; index++) {
  console.log(index)
}

// 4、break 
// break终止循环
console.log('---------break-------')
function testBreak(x) {
  var i = 0;
  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }
  return i * x;
}
console.log(testBreak(2))

// 5、continue 
// ontinue 声明终止当前循环或标记循环的当前迭代中的语句执行，并在下一次迭代时继续执行循环。 
// 与 break 语句的区别在于， continue 并不会终止循环的迭代，而是
console.log('---------continue-------')
i = 0;    // 1,1  2,3  3,3  4,7  5,12  
n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
}
console.log(i, n)

