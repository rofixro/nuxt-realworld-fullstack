/*
 * @Author: Calvest
 * @Date: 2022-03-24 17:18:55
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 17:25:24
 * @FilePath: /training/js-api/array/find.js
 */
/**
 * @description: find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 * @param {Array} array
 * @param {Function} callback
 * @return {*} value
 */
function find(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== 'function') {
            throw new TypeError("process(): Argument must be an function.");
        } else {
            if (!array.length) {
                return array;
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (callback(array[i], i, array)) {
                        return array[i];
                    }
                }
            }
        }
    }
}
