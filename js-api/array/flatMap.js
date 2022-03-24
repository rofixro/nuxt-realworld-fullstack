/*
 * @Author: Calvest
 * @Date: 2022-03-25 00:33:04
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 00:49:23
 * @FilePath: /training/js-api/array/flatMap.js
 */
/**
 * @description: flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
 * @param {Array} array
 * @param {Function} callback
 * @return {Array} array
 */
function flatMap(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== "function") {
            throw new TypeError();
        } else {
            if (!array.length) {
                return array;
            } else {
                let result = [];

                for (let i = 0; i < array.length; i++) {
                    result.push(callback(array[i], i, array));
                }

                return flat(result);
            }
        }
    }
}