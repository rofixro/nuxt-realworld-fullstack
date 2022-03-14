/*
 * @Author: Calvest
 * @Date: 2022-03-15 01:37:09
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-15 01:57:37
 * @FilePath: /training/lodash/js/compact.js
 */
/**
 * @description: 新建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param {Array} array
 * @return {Array} array
 */
function compact(array = []) {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        if (!array.length) {
            return array;
        } else {
            return array.filter(item => item);
        }
    }
}