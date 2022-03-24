/*
 * @Author: Calvest
 * @Date: 2022-03-24 14:55:07
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 15:29:23
 * @FilePath: /training/js-api/array/every.js
 */
/**
 * @description: every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
 * @param {Array} array
 * @param {Function} callback
 * @return {Boolean} boolean 
 */
function every(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== "function") {
            throw new TypeError("process(): Argument must be an function.");
        } else {
            if (!array.length) {
                return true;
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (!callback(array[i], i, array)) {
                        return false;
                    }
                }

                return true;
            }
        }
    }
}