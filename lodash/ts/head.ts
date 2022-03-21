/*
 * @Author: Calvest
 * @Date: 2022-03-21 23:30:12
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:32:21
 * @FilePath: /training/lodash/ts/head.ts
 */
/**
 * @description: 获取数组的第一个元素
 * @param {Array} array
 * @return {*}
 */
function head(array: any[] = []): any {
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
