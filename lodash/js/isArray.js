/*
 * @Author: Calvest
 * @Date: 2022-03-21 19:02:31
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-23 18:01:27
 * @FilePath: /training/lodash/js/isArray.js
 */
/**
 * @description: 判断一个变量是不是数组
 * @param {Array} array
 * @return {Array} array
 */
function isArray(array = []) {
    if (!Array.isArray(array)) {
        throw new TypeError("process(): Argument must be an array.");
    } else {
        return true;
    }
}