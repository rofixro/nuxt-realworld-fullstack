/*
 * @Author: Calvest
 * @Date: 2022-03-25 16:21:40
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 16:53:41
 * @FilePath: /training/js-api/array/indexOf.js
 */
/**
 * @description: indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。 
 * @param {Array} array
 * @param {*} value
 * @param {Number} fromIndex
 * @return {Number} number
 */
function indexOf(array = [], value, fromIndex = 0) {
    if (isArray(array)) {
        if (isInteger(fromIndex)) {
            if (!array.length) {
                return -1;
            } else {
                const { length } = array;

                if (fromIndex >= length) {
                    return -1;
                }

                if (fromIndex < 0) {
                    fromIndex = -fromIndex > length ? 0 : (fromIndex + length);
                }

                for (let i = fromIndex; i < length; i++) {
                    if (array[i] === value) {
                        return i;
                    }
                }

                return -1;
            }
        }
    }
}
