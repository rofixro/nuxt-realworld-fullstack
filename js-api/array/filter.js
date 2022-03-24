/*
 * @Author: Calvest
 * @Date: 2022-03-24 17:03:38
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 17:07:55
 * @FilePath: /training/js-api/array/filter.js
 */
/**
 * @description: filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
 * @param {Array} array 
 * @param {Function} callback
 * @return {Array} array
 */
function filter(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== 'function') {
            throw new TypeError();
        } else {
            if (!array.length) {
                return array;
            } else {
                let result = [];

                for (let i = 0; i < array.length; i++) {
                    if (callback(array[i], i, array)) {
                        result.push(array[i]);
                    }
                }

                return result;
            }
        }
    }
}
