/*
 * @Author: Calvest
 * @Date: 2022-03-21 17:42:40
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 18:25:27
 * @FilePath: /training/lodash/ts/slice.ts
 */
/**
 * @description: 给定一个范围，对数组进行切片，返回一个新数组
 * @param {Array} array
 * @param {Number} begin
 * @param {Number} end
 * @return {Array} array
 */
function slice(array: any[] = [], begin: number = 0, end: number = array.length): any[] {
    if (!array.length) {
        return array;
    }

    if (!Number.isInteger(begin) || !Number.isInteger(end)) {
        throw new Error("process(): Argument must be an positive integer.")
    }

    let result: any[] = [];
    let { length: number } = array;

    if (begin < 0) {
        begin = -begin > length ? 0 : (begin + length);
    }

    if (end > length) {
        end = length;
    }

    if (end < 0) {
        end += length;
    }

    length = begin > end ? 0 : (end - begin);

    for (let i = 0; i < length; i++) {
        result[i] = array[begin + i];
    }

    return result;
}


