/*
 * @Author: Calvest
 * @Date: 2022-03-25 17:21:47
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 21:39:05
 * @FilePath: /training/js-api/array/join.js
 */
/**
 * @description: join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
 * @param {Array} array
 * @param {String} separator
 * @return {String} string
 */
function join(array = [], separator = ",") {
    if (isArray(array)) {
        if (typeof separator !== 'string') {
            throw new TypeError("process(): Argument must be an string.");
        } else {
            if (!array.length) {
                return "";
            } else {
                let result = "";
                const { length } = array;

                for (let i = 0; i < length; i++) {
                    result += `${array[i]}${i !== length - 1 ? separator : ''}`
                }

                return result;
            }
        }
    }
}
