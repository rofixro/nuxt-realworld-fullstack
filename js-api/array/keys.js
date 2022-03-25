/*
 * @Author: Calvest
 * @Date: 2022-03-26 01:05:14
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-26 01:14:27
 * @FilePath: /training/js-api/array/keys.js
 */
/**
 * @description: keys() 方法返回一个包含数组中每个索引键的 Array Iterator 对象。
 * @param {Array} array
 * @return {Object}
 */
function keys(array = []) {
    if (isArray(array)) {
        return {
            next: function () {
                let index = 0;

                return index < array.length ? { value: index++, done: false } : { value: undefined, done: true };
            }
        }
    }
}
