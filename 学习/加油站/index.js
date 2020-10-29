var canCompleteCircuit = function(gas, cost, sum = 0, total = 0, r = 0) {
  for (var i = 0;i < gas.length; i++) {
    let tmp
    tmp = gas[i] - cost[i];
    sum = sum + tmp;
    total = total + tmp
    if (sum < 0) sum = 0, r = i + 1
    console.log(sum,total,tmp,r)
  }
  console.log(total,sum,r)
  return total >= 0 ? r : -1
}

canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])