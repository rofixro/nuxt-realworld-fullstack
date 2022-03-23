/*
 * @Author: Calvest
 * @Date: 2022-03-22 01:54:36
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-23 12:55:38
 * @FilePath: /training/js-api/array/concat.js
 */
/**
 * @description:  concat() 方法用于合并两个或多个数组或值。此方法不会更改现有数组，而是返回一个新数组。注意所有一维数组都将被合并。
 * @param {Array} array
 * @param {...*} values
 * @return {Array} array
 */
function concat(array = [], ...values) {
    if (isArray(array)) {
        if (!array.length && !values.length) {
            return array;
        }

        let result = [...array];

        if (values.length) {
            values.forEach(item => {
                if (Array.isArray(item)) {
                    result.push(...item);
                } else {
                    result.push(item);
                }
            })
        }

        return result;
    }
}
