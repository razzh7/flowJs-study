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
acceptsTwo(2) // successful
// acceptsTwo(3) // fail
// acceptsTwo('2') // fail

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
 * 3、参数类型和函数返回类型保持一致(泛型 generics)
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
 function generics<Number>(value: number): number {
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