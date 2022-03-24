/*
 * @Author: Calvest
 * @Date: 2022-03-23 22:41:20
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 14:13:34
 * @FilePath: /training/js-api/array/entries.js
 */
/**
 * @description: entries() 方法返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对。
 * @param {Array} array
 * @return {*}
 */
function entries(array) {
    if (isArray(array)) {
        return array[Symbol.iterator]();
    }
}