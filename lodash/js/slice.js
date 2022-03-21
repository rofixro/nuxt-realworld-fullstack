/*
 * @Author: Calvest
 * @Date: 2022-03-18 23:50:28
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 18:11:46
 * @FilePath: /training/lodash/js/slice.js
 */
/**
 * @description: 给定一个范围，对数组进行切片，并返回一个新数组
 * @param {Array} array
 * @param {Number} begin
 * @param {Number} end
 * @return {Array} array
 */
function slice(array = [], begin = 0, end = array.length) {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        if (!array.length) {
            return array;
        } else {
            if (!Number.isInteger(begin) || !Number.isInteger(end)) {
                throw new Error("process(): Argument must be an positive integer.")
            } else {
                let result = [];
                let { length } = array;

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
        }
    }
}

