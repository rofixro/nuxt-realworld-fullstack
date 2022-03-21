/*
 * @Author: Calvest
 * @Date: 2022-03-22 00:44:37
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-22 00:59:22
 * @FilePath: /training/lib/js-api/array/isArray.js
 */
/**
 * @description: 判断一个变量是不是数组
 * @param {*} value
 * @return {Array} array
 */
export function isArray(value) {
    if (!Array.isArray(value)) {
        throw new TypeError("process(): Argument must be an array.");
    } else {
        return value;
    }
}
