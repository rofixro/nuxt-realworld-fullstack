/*
 * @Author: Calvest
 * @Date: 2022-03-14 13:59:38
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-14 16:36:03
 * @FilePath: /training/lodash/ts/chunk.ts
 */
/**
 * @description: 将数组 array 拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。 
 * @param {Array} array
 * @param {Number} size
 * @return {Array} array
 */
function chunk(array: any[], size: number = 1): any[] {
    if (!Array.isArray(array)) {
        throw new Error('process(): Argument must be an array.');
    } else {
        if (!array.length) {
            return [];
        } else {
            if (size > 0 && Number.isInteger(size)) {
                if (size >= array.length) {
                    return array;
                } else {
                    let counter: number = 0;
                    let result: any[] = new Array(Math.ceil(array.length / size));

                    for (let i = 0; i < result.length; i++) {
                        result[i] = array.slice(counter, counter += size);
                    }

                    return result;
                }
            } else {
                throw new Error('process(): Argument must be an positive integer.');
            }
        }
    }
}
