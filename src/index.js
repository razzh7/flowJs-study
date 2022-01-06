/** @flow */
/** 1.1 规定类型 */
function method(x: number, y: number) {
  console.log(x + y)
}
method(1, 2)

/**
 * 1.2 规定类型的值
 * 只允许接受数字2作为参数
 */
function acceptsTwo(value: 2) {}
acceptsTwo(2) // Works.
// acceptsTwo(3) // Error.
// acceptsTwo('2') // Error.

/**
 * 1.3 规定函数返回类型的值
 */
function returnType(value1: number, value2: string): string {
  var n = value1 + value2
  console.log('类型', typeof n, '输出的值', n) // 类型 string 输出的值 12
  return n
}
returnType(1,'2')

/**
 * 1.4 混合类型
 * 1、参数类型单一
 * 2、参数可能有多种类型
 * 3、有时候不确定参数的类型,但又想要参数类型和函数返回类型保持一致,那么就要使用(泛型 generics)
 */

// 单一类型
function single(value: string) {
  return value
}
// 多种类型
 function mulit(value: string | number | Object) {
   return value
 }
 mulit({})
// 泛型
 function generics<T>(value: T): T {
    return value
 }
 generics(1)
/**
 * 1.5 mixed类型
 * mixed接收所有类型, string, numbers, function, null, undefined
 * PS:如果使用value类型,一定要让flow明白mixed是什么类型,所以要进行类型判断
 */
 function mixed(value: mixed) {
   if(typeof value == 'number') {
     return value + 1
   }
 }
 mixed(undefined)

 /**
  * 1.6 any类型 
  * 不开启类型检查,any接收任何值 
  */
  function add(one: any, two: any): number {
    return one + two;
  }
  
  add(1, 2);     // Works.
  add("1", "2"); // Works.
  add({}, []);   // Works.

  /** 
   * 1.7 可选类型
   * 例 value: ?number 可接收三种值 number | null | undefined
   */
  function maybeType(value: ?string) {}
  maybeType('hello') // Works.
  maybeType(null) // Works.
  maybeType(undefined) // Works.
  // maybeType(1) // Error.

  /**
   * 1.8 变量类型
   * 两种方式定义变量
   */
  const foo /* :number */ = 123
  const bar: number = 123
  let ab: number = 123
  var cd: number = 123

  // var np = 42
  /**
   * 函数/if语句会打断flow对赋值类型的判断
   */
  // function mutate() {
  //   np = true;
  //   np = "hello";
  // }
  // mutate();
// let isString: string = np

/**
 * 1.9 函数类型
 * 函数有两个可以定义类型的地方
 * 1、input(参数)
 * 2、output(返回值)
 */
// base instance
 function concat(a: string, b: string): string {
  return a + b;
}

concat("foo", "bar"); // Works!
// $ExpectError
// concat(true, false);  // Error!

/**
 * 2.0 3种函数形式的写法
 * 1、普通函数
 * 2、箭头函数
 * 3、回调函数
 * 函数的可选参数(Optional Parameters)
 * 可以在:(colon)前使用?(mark)来声明此参数为可选参数
 * 可选参数接受 missing/undefined,但不接受null
 * https://flow.org/en/docs/types/functions/#toc-optional-parameters
 * 
 * 剩余参数
 * 可以对rest Parameters采用...args: Array<type>
 * https://flow.org/en/docs/types/functions/#toc-rest-parameters
 */
function fDefine(str: string, bool?: boolean , nums: Array<number>): string {
  return str
}
let arrowFc = (str: string, bool?: boolean, nums: Array<number>): string => {
  return str
}
arrowFc('hello',undefined,[1,3,1,4])
// 可忽略参数名字
function fn(cb: (string, boolean | void, Array<number>) => string) {
  return cb
}
fn((...args) => { return args[0] })('I am ra', true, [520,521])

/** 
 * 2.1 对象语法 
 * https://flow.org/en/docs/types/objects/#toc-object-type-syntax
 * */
let obj1: { foo: boolean } = { foo: false } // Work!
// let obj2: { foo: boolean } = { foo: 'str' } // Error!
let obj2: {
  foo: number,
  bar: boolean,
  baz: string
} = {
  foo: 3521,
  bar: true,
  baz: 'ff gg'
}

/**
 * 2.1.1 对象属性undefined
 * 在js对象中,访问一个未定义属性,得到的结果是undefined
 * 在flow中,将js的结果转化成类型错误
 */
let obj3 = { nums: 3521 }
// obj3.bar // Error!

let obj4 :{ foo?: boolean, bar: number } = {}
obj4.bar = 3521

/** 
 * 2.1.2 对象方法语法 
 * flow中的对象方法属性是只读的
 * 它不允许修改函数的值
 * https://flow.org/en/docs/types/objects/#toc-object-methods
 * */
let b = {
  foo() { return 3; }
}
// b.foo = () => { return 2; } // Error!
// b.foo = 'razzh' // Error

// object methods
function objMethod(obj: {}) {}
objMethod({name: 'ff', age: 19})
// Object是any的别名Object is an alias to any
function objMethod2(obj: Object) {
  obj = 10;
}
objMethod2({ baz: 3.14, bar: "hello" })

/**
 * 2.2 接口类型(Interface Tyeps)
 * https://flow.org/en/docs/types/interfaces/
 */
class Foo5 {
  serialize() { return '[Foo]'; }
}

class Bar5 {
  serialize() { return '[Bar]'; }
}

// // $ExpectError
// const foo: Foo = new Bar(); // Error!
	
interface Serializable {
  serialize(): string
}

class G1 {
  serialize() { return '[G1]' }
}

class G2 {
  serialize() { return '[G2]' }
}

const G3: Serializable = new G1()
const G4: Serializable = new G2()

/** 
 * 全局类型
 * https://flow.org/en/docs/libdefs/creation/
 */

function gblTest(Vue: PI) {}

gblTest(123)