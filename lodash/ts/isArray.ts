/*
 * @Author: Calvest
 * @Date: 2022-03-21 22:59:05
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:01:15
 * @FilePath: /training/lodash/ts/isArray.ts
 */
/**
 * @description: 判断一个变量是不是数组
 * @param {Array} array
 * @return {Array} array
 */
function isArray(array: any[] = []): any[] {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        return array;
    }
}
