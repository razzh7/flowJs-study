/** 1.1 规定类型 */
function method(x, y) {
  console.log(x + y);
}

method(1, 2);
/**
 * 1.2 规定类型的值
 * 只允许接受数字2作为参数
 */

function acceptsTwo(value) {}

acceptsTwo(2); // Works.
// acceptsTwo(3) // Error.
// acceptsTwo('2') // Error.

/**
 * 1.3 规定函数返回类型的值
 */

function returnType(value1, value2) {
  var n = value1 + value2;
  console.log('类型', typeof n, '输出的值', n); // 类型 string 输出的值 12

  return n;
}

returnType(1, '2');
/**
 * 1.4 混合类型
 * 1、参数类型单一
 * 2、参数可能有多种类型
 * 3、参数类型和函数返回类型保持一致(泛型 generics)
 */
// 单一类型

function single(value) {
  return value;
} // 多种类型


function mulit(value) {
  return value;
}

mulit({}); // 泛型

function generics(value) {
  return value;
}

generics(1);
/**
 * 1.5 mixed类型
 * mixed接收所有类型, string, numbers, function, null, undefined
 * PS:如果使用value类型,一定要让flow明白mixed是什么类型,所以要进行类型判断
 */

function mixed(value) {
  if (typeof value == 'number') {
    return value + 1;
  }
}

mixed(undefined);
/**
 * 1.6 any类型 
 * 不开启类型检查,any接收任何值 
 */

function add(one, two) {
  return one + two;
}

add(1, 2); // Works.

add("1", "2"); // Works.

add({}, []); // Works.

/** 
 * 1.7 可选类型
 * 例 value: ?number 可接收三种值 number | null | undefined
 * 与value?: number的的区别在于:后者只接受string 和 undefined
 */

function maybeType(value) {}

maybeType('hello'); // Works.

maybeType(null); // Works.

maybeType(undefined); // Works.
// maybeType(1) // Error.

/**
 * 1.8 变量类型
 * 两种方式定义变量
 */

const foo
/* :number */
= 123;
const bar = 123;
let ab = 123;
var cd = 123; // var np = 42

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

function concat(a, b) {
  return a + b;
}

concat("foo", "bar"); // Works!
// $ExpectError
// concat(true, false);  // Error!
// 3种函数形式的写法

function fDefine(str, bool, nums) {
  console.log(bool);
}

fDefine('hello', 'niu'); // let arrowFc = (str, bool?: Boolean,)