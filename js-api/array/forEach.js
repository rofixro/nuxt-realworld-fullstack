/*
 * @Author: Calvest
 * @Date: 2022-03-25 01:08:15
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 01:19:36
 * @FilePath: /training/js-api/array/forEach.js
 */
/**
 * @description: forEach() 方法对数组的每个元素执行一次给定的函数。
 * @param {Array} array
 * @param {Function} callback
 * @return {Undefined} undefined
 */
function forEach(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== "function") {
            throw new TypeError("process(): Argument must be an function.");
        } else {
            if (!array.length) {
                return undefined;
            } else {
                for (let i = 0; i < array.length; i++) {
                    callback(array[i], i, array);
                }
            }
        }
    }
}
