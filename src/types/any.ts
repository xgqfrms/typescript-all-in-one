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

declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked

// function getValue(key: string): any;
// Function implementation is missing or not immediately following the declaration.

const Str: string = getValue("myString");

// const str: string = getValue("myString");
// Cannot redeclare block - scoped variable 'str'.ts


let varAny: any;

varAny = "string";
varAny = 123;
varAny = true;
