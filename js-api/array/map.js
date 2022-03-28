/*
 * @Author: Calvest
 * @Date: 2022-03-28 23:28:36
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-28 23:34:31
 * @FilePath: /training/js-api/array/map.js
 */
/**
 * @description: map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
 * @param {Array} array
 * @param {Function} callback
 * @return {Array} array
 */
function map(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== "function") {
            throw new TypeError("process(): Argument must be an function.");
        } else {
            let result = [];

            for (let i = 0; i < array.length; i++) {
                result.push(callback(array[i], i, array));
            }

            return result;
        }
    }
}
