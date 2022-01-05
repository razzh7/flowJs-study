function method(x, y) {
  console.log(x + y);
}

method(1, 2);
/** 只允许接受数字2作为参数 */

function acceptsTwo(value) {}

acceptsTwo(2); // successful
// acceptsTwo(3) // fail
// acceptsTwo('2') // fail

/** 规定函数返回类型 */

function returnType(value1, value2) {
  var n = value1 + value2;
  console.log('类型', typeof n, '输出的值', n); // 类型 string 输出的值 12

  return n;
}

returnType(1, '2');
/**
 * 混合类型
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
  console.log('泛型值', value);
  return value;
}

generics(1);