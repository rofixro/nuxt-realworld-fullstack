/*
 * @Author: Calvest
 * @Date: 2022-03-15 13:25:01
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-15 18:00:44
 * @FilePath: /training/lodash/js/concat.js
 */
/**
 * @description: 创建一个新数组，将 array 与任何数组或值连接在一起。
 * @param {Array} array
 * @param {...*} values
 * @return {Array} array
 */
function concat(array, ...values) {
    if (!Array.isArray(array)) {
        throw new Error("process(): Argument must be an array.");
    } else {
        if (!values.length) {
            return array;
        } else {
            let result = [...array];

            values.forEach(item => {
                if (Array.isArray(item)) {
                    item.forEach(el => {
                        result.push(el);
                    })
                } else {
                    result.push(item);
                }
            })

            return result;
        }
    }
}