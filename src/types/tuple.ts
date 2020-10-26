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

// 元组
let tuple: [string, number, boolean];

tuple = ["string", 1, true];

// tuple = ["string", 1];
// Type '[string, number]' is not assignable to type '[string, number, boolean]'.
// Source has 2 element(s) but target requires 3.

// tuple = ["string", "1", false];
// Type 'string' is not assignable to type 'number'.

log(`tuple =`, tuple)
log(`tuple =`, tuple[0].substring(1))
// log(`tuple =`, tuple[1].substring(1));
// Property 'substring' does not exist on type 'number'.

// tuple[3] = 3;
// Type '3' is not assignable to type 'undefined'.

// log(`tuple =`, tuple[5].substring(1));
// Object is possibly 'undefined'.
