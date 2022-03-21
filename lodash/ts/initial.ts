/*
 * @Author: Calvest
 * @Date: 2022-03-21 23:08:17
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:12:05
 * @FilePath: /training/lodash/ts/initial.ts
 */
/**
 * @description: 返回一个数组除最后一位的剩余部分
 * @param {Array} array
 * @return {Array} array
 */
function initial(array: any[] = []): any[] {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.")
    } else {
        return slice(array, 0, -1);
    }
}
