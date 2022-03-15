/*
 * @Author: Calvest
 * @Date: 2022-03-15 14:10:58
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-15 14:18:16
 * @FilePath: /training/lodash/ts/concat.ts
 */
/**
 * @description: 
 * @param {Array} array
 * @param {*} values
 * @return {*} array
 */
function concat(array: any[], ...values: any[]): any[] {
    if (!Array.isArray(array)) {
        throw new Error();
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