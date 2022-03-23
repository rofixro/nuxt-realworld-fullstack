/*
 * @Author: Calvest
 * @Date: 2022-03-22 00:05:37
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-22 01:52:26
 * @FilePath: /training/js-api/array/at.js
 */
/**
 * @description: at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。建议负数使用此方法。
 * @param {Array} array
 * @param {Number} index
 * @return {*}
 */
function at(array = [], index = 0) {
    if (isArray(array)) {
        if (!Number.isInteger(index)) {
            throw new TypeError("process(): Argument must be an positive integer.");
        } else {
            if (index < 0) {
                return array[index + array.length];
            } else {
                return array[index];
            }
        }
    }
}
