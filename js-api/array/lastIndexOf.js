/*
 * @Author: Calvest
 * @Date: 2022-03-26 01:49:23
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-27 01:38:45
 * @FilePath: /training/js-api/array/lastIndexOf.js
 */
/**
 * @description: lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。 
 * @param {Array} array
 * @param {*} value
 * @param {Number} fromIndex
 * @return {Number}
 */
function lastIndexOf(array = [], value, fromIndex = array.length - 1) {
    if (isArray(array)) {
        if (isInteger(fromIndex)) {
            if (!array.length) {
                return -1;
            } else {
                const { length } = array;

                if (fromIndex < 0) {
                    if (-fromIndex > length) {
                        return -1;
                    } else {
                        fromIndex += length;
                    }
                }

                if (fromIndex >= length) {
                    fromIndex = length - 1;
                }

                for (let i = fromIndex; i > -1; i--) {
                    if (array[i] === value) {
                        return i;
                    }
                }

                return -1;
            }
        }
    }
}
