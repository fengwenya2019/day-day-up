function Fun(a,b,c){
  this.a = 1
  this.b = 2
  this.c = 3 
}
console.log(Fun,'...Fun构造函数')

const ins1 = new Fun()

console.log(ins1,'...ins1s实例对象')

const pro = ins1.__proto__
console.log(pro,'...pro为原型')

const cf = pro.constructor
console.log(cf,'...原型的constructor为构造函数Fun')

const protype = cf.prototype
console.log(protype,'protype，构造函数的prototype属性指向原型')


console.log(Fun.prototype === ins1.__proto__,'...Fun.prototype === ins1.__proto__，实例的__proto__属性 和 构造函数的prototype属性都指向这个实例的原型，二者相等')

console.log('以下是原型的原型和构造函数的原型的原型')
console.log(Fun.__proto__.__proto__,'...Fun.__proto__.__proto__')
console.log(ins1.__proto__.__proto__,'...ins1.__proto__.__proto__')
console.log(Fun.__proto__.__proto__ === ins1.__proto__.__proto__,'...')


