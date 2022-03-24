/*
 * @Author: Calvest
 * @Date: 2022-03-24 15:47:27
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 16:14:03
 * @FilePath: /training/js-api/array/fill.js
 */
/**
 * @description: fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
 * @param {Array} array
 * @param {*} value
 * @param {Number} start
 * @param {Number} end
 * @return {Array} array
 */
function fill(array = [], value, start = 0, end = array.length) {
    if (isArray(array)) {
        if (isInteger(start) && isInteger(end)) {
            if (!array.length) {
                return array;
            } else {
                const { length } = array;

                if (start < 0) {
                    start = -start > length ? 0 : (start + length);
                }

                if (end > length) {
                    end = length;
                }

                if (end < 0) {
                    end += length;
                }

                for (let i = start; i < end; i++) {
                    array[i] = value;
                }

                return array;
            }
        }
    }
}