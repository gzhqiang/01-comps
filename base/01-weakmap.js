// Set构造函数
// const s = new Set()
// ;[1, 2, 1, 3, 4].forEach(item => s.add(item))
// console.log(s)

// // s.forEach(item => {
// //   console.log(item)
// // })
// console.log(Set)
// console.log(s.size)
// console.dir(Set.prototype)

// // Array.from将Set转换为数组
// const arr = Array.from(s)
// console.log(arr)

function Person(name, age) {
  this.name = name
  this.age = age
  this.show = () => {
    console.log(this)
    console.log(this.name)
    return () => {
      // 一直往上找this
      console.log(this)
    }
  }
}

const p = new Person('刘德华', 18)
const fun = p.show()
fun()

const obj = {
  name: 'zqguo',
  age: this.name,
  add: () => {
    console.log(this.name)
  },
  show() {
    // console.log(this.name, this.age)
    console.log(this === this.age, this.age)
  }
}
// obj里面没有this属性的，对对对!!! <==> {}里面是没有this属性的
obj.add()
obj.show()

class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  show = () => {
    console.log(this) // 往上查找 Student是有this的, 指向的是当前的对象
  }
}

// console.log(Student.this)
const stu = new Student('zhangsan', 11)
stu.show()
