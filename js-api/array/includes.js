/*
 * @Author: Calvest
 * @Date: 2022-03-25 15:02:47
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 16:09:14
 * @FilePath: /training/js-api/array/includws.js
 */
/**
 * @description: includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
 * @param {Array} array
 * @param {*} value
 * @param {Number} fromIndex
 * @return {Boolean} boolean
 */
function includes(array = [], value, fromIndex = 0) {
    if (isArray(array)) {
        if (isInteger(fromIndex)) {
            if (!array.length) {
                return false;
            } else {
                if (fromIndex >= array.length) {
                    return false;
                }

                const { length } = array;

                if (fromIndex < 0) {
                    fromIndex = -fromIndex > length ? 0 : (fromIndex + length);
                }

                function sameValueZero(x, y) {
                    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                }

                for (let i = fromIndex; i < length; i++) {
                    if (sameValueZero(array[i], value)) {
                        return true;
                    }

                    if (array[i] === value) {
                        return true;
                    }
                }

                return false;
            }
        }
    }
}
