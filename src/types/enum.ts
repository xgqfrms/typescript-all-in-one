"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-10-21
 * @modified
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

function logString(msg: string): void {
  log(`message =`, msg)
}

function logNumber(msg: number): void {
  log(`message =`, msg)
}


// 👍 number enum
enum DirectionNumber {
  Up,
  Down,
  Left,
  Right
}
// 👎 number enum with change index
enum DirectionIndex {
  Up = 3,
  Down,
  Left,
  Right
}

// 👎 string & number mixed enum
enum DirectionMixed {
  Up = "up",
  Down = 1,
  Left,
  Right
}

// 👍 string enum
enum Level {
  A = "perfect",
  B = "good",
  C = "bad",
}

// 👍 const enum, 编译后不会生成对象
const enum Roles {
  Admin,
  User,
  Operator,
}

// 👍 computed enum ❌ const bug
// const enum DynamicConstBug {
//   role = Roles.User,
//   level = Level.A,
//   time = Date.now(),
//   timestamp = new Date().getTime(),
//   random = Math.random(),
//   value = 1 + 2,
//   len = "123".length,
// }
// const enum member initializers can only contain literal values and other computed enum values.

// 👍 computed enum ✅
enum Dynamic {
  role = Roles.User,
  level = Level.A,
  time = Date.now(),
  timestamp = new Date().getTime(),
  random = Math.random(),
  value = 1 + 2,
  len = "123".length,
}

//number enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// TypeScript enum 枚举实现原理，反向映射
// Direction ={
//   1: "Up", 2: "Down", 3: "Left", 4: "Right",
//   Up: 1, Down: 2, Left: 3, Right: 4,
// }

logString(Level.A);

logNumber(Direction.Down);

logNumber(Roles.Admin);
// console.log(0 /* Admin */);
