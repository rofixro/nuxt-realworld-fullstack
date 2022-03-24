/*
 * @Author: Calvest
 * @Date: 2022-03-24 19:02:01
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 23:37:57
 * @FilePath: /training/js-api/array/flat.js
 */
/**
 * @description: flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。使用 Infinity 可以展开任意数组。
 * @param {Array} array
 * @param {Number} depth 
 * @return {Array} array
 */
function flat(array = [], depth = 1) {
    if (isArray(array)) {
        if (depth === Infinity || isInteger(depth)) {
            if (!array.length) {
                return array;
            } else {
                let index = -1;
                let result = [];

                if (depth <= 0) {
                    depth = 0;
                }

                function concat(value) {
                    index++;

                    for (let i = 0; i < value.length; i++) {
                        if (Array.isArray(value[i])) {
                            if (depth !== Infinity && index === depth) {
                                result.push(value[i]);
                            } else {
                                concat(value[i]);
                            }
                        } else {
                            if (value[i] !== undefined) {
                                result.push(value[i]);
                            }
                        }
                    }

                    return result;
                }

                return concat(array);
            }
        }
    }
}
