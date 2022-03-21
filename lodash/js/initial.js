/*
 * @Author: Calvest
 * @Date: 2022-03-21 18:43:54
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:08:50
 * @FilePath: /training/lodash/js/initial.js
 */
/**
 * @description: 返回一个数组除最后一位的剩余部分
 * @param {Array} array
 * @return {Array} array
 */
function initial(array = []) {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        if (!array.length) {
            return array;
        } else {
            return slice(array, 0, -1);
        }
    }
}