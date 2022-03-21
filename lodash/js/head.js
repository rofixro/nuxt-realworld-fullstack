/*
 * @Author: Calvest
 * @Date: 2022-03-21 23:16:16
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:29:45
 * @FilePath: /training/lodash/js/head.js
 */
/**
 * @description: 获取数组的第一个元素
 * @param {Array} array
 * @return {*} 
 */
function head(array = []) {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        if (!array.length) {
            return undefined;
        } else {
            return array[0];
        }
    }
}
