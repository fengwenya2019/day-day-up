console.log('----------例子1-----------')
function makeFunc() {
  var name = "tianxin";
  function displayName() {
      console.log(name);
  }
  return displayName;  // makeFunc函数的返回值是displayName函数
}

// console.log(makeFunc()) //打印出来是 displayName函数

makeFunc()() // 相当于执行displayName()，打印出来是‘tianxin’

console.log('----------例子2-----------')
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
