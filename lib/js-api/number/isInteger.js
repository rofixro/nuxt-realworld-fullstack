/*
 * @Author: Calvest
 * @Date: 2022-03-23 17:56:07
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-23 17:58:14
 * @FilePath: /training/lib/js-api/number/isInteger.js
 */
/**
 * @description: 判断一个数字是不是整数
 * @param {Number} value
 * @return {Boolean} boolean
 */
function isInteger(value) {
    if (!Number.isInteger(value)) {
        throw new TypeError("process(): Argument must be an positive integer.");
    } else {
        return true;
    }
}
