/*
 * @Author: Calvest
 * @Date: 2022-03-13 12:17:44
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-13 19:24:18
 * @FilePath: /training/Lodash/js/chunk.js
 */
/**
 * @description: 将数组 array 拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。 
 * @param {Array} array
 * @param {Number} size
 * @return {Array} array
 */
function chunk(array = [], size = 1) {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        if (!array.length) {
            return array;
        } else {
            if (size > 0 && Number.isInteger(size)) {
                if (size >= array.length) {
                    return array;
                } else {
                    let index = 0;
                    let tmpArray = [];
                    let targetArray = [];
                    const remainder = array.length % size;

                    for (let i = 0; i < array.length; i++) {
                        tmpArray.push(array[i]);
                        index++;

                        if (index === size) {
                            targetArray.push(tmpArray);
                            tmpArray = [];
                            index = 0;
                        }

                        if (i === array.length - 1) {
                            if (remainder > 0) {
                                targetArray.push(tmpArray);
                            }
                        }
                    }

                    return targetArray;
                }
            } else {
                throw new Error("process(): Argument must be an positive integer.")
            }
        }
    }
}