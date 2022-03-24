/*
 * @Author: Calvest
 * @Date: 2022-03-24 17:39:34
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 17:42:39
 * @FilePath: /training/js-api/array/findIndex.js
 */
/**
 * @description: findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。 
 * @param {Array} Array
 * @param {Functin} callback
 * @return {Number} number
 */
function findIndex(array = [], callback) {
    if (isArray(array)) {
        if (typeof callback !== 'function') {
            throw new TypeError("process(): Argument must be an function.");
        } else {
            if (!array.length) {
                return array;
            } else {
                for (let i = 0; i < array.length; i++) {
                    if (callback(array[i], i, array)) {
                        return i;
                    }
                }

                return -1;
            }
        }
    }
}
