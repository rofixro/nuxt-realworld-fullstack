/*
 * @Author: Calvest
 * @Date: 2022-03-23 12:59:39
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-23 18:13:38
 * @FilePath: /training/lib/js-api/array/copyWithin.js
 */
/**
 * @description: copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。注意返回的是原来的数组。
 * @param {Array} array
 * @param {Number} target
 * @param {Number} start
 * @param {Number} end
 * @return {Array} array
 */
function copyWithin(array = [], target = 0, start = 0, end = array.length) {
    if (isArray(array)) {
        if (isInteger(target) || isInteger(start) || isInteger(end)) {
            if (!array.length) {
                return array;
            }

            const { length } = array;

            if (target >= length) {
                return array;
            }

            if (target < 0) {
                target = -target > length ? 0 : (target + length);
            }

            if (start < 0) {
                start = -start > length ? 0 : (start + length);
            }

            start = start > length ? 0 : start;

            if (end < 0) {
                end = -end > length ? length : (end + length);
            }

            end = end > length ? length : end;

            let index = 0;
            const tmp = array.slice(start, end);

            if (!tmp.length) {
                return array;
            }

            for (let i = target; i < array.length; i++) {
                if (index === tmp.length) {
                    array[i] = array[i];
                } else {
                    array[i] = tmp[index];
                    index++;
                }
            }

            return array;
        }
    }
}
