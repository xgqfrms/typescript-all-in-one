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
var log = console.log;
function logString(msg) {
    log("message =", msg);
}
function logNumber(msg) {
    log("message =", msg);
}
// 👍 number enum
var DirectionNumber;
(function (DirectionNumber) {
    DirectionNumber[DirectionNumber["Up"] = 0] = "Up";
    DirectionNumber[DirectionNumber["Down"] = 1] = "Down";
    DirectionNumber[DirectionNumber["Left"] = 2] = "Left";
    DirectionNumber[DirectionNumber["Right"] = 3] = "Right";
})(DirectionNumber || (DirectionNumber = {}));
// 👎 number enum with change index
var DirectionIndex;
(function (DirectionIndex) {
    DirectionIndex[DirectionIndex["Up"] = 3] = "Up";
    DirectionIndex[DirectionIndex["Down"] = 4] = "Down";
    DirectionIndex[DirectionIndex["Left"] = 5] = "Left";
    DirectionIndex[DirectionIndex["Right"] = 6] = "Right";
})(DirectionIndex || (DirectionIndex = {}));
// 👎 string & number mixed enum
var DirectionMixed;
(function (DirectionMixed) {
    DirectionMixed["Up"] = "up";
    DirectionMixed[DirectionMixed["Down"] = 1] = "Down";
    DirectionMixed[DirectionMixed["Left"] = 2] = "Left";
    DirectionMixed[DirectionMixed["Right"] = 3] = "Right";
})(DirectionMixed || (DirectionMixed = {}));
// 👍 string enum
var Level;
(function (Level) {
    Level["A"] = "perfect";
    Level["B"] = "good";
    Level["C"] = "bad";
})(Level || (Level = {}));
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
var Dynamic;
(function (Dynamic) {
    Dynamic[Dynamic["role"] = 1] = "role";
    Dynamic["level"] = "perfect";
    Dynamic[Dynamic["time"] = Date.now()] = "time";
    Dynamic[Dynamic["timestamp"] = new Date().getTime()] = "timestamp";
    Dynamic[Dynamic["random"] = Math.random()] = "random";
    Dynamic[Dynamic["value"] = 3] = "value";
    Dynamic[Dynamic["len"] = "123".length] = "len";
})(Dynamic || (Dynamic = {}));
//number enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// TypeScript enum 枚举实现原理，反向映射
// Direction ={
//   1: "Up", 2: "Down", 3: "Left", 4: "Right",
//   Up: 1, Down: 2, Left: 3, Right: 4,
// }
logString(Level.A);
logNumber(Direction.Down);
logNumber(0 /* Admin */);
