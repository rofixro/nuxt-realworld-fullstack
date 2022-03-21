/*
 * @Author: Calvest
 * @Date: 2022-03-21 23:19:21
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:24:42
 * @FilePath: /training/lodash/test/head.test.js
 */
describe("Head", () => {
    it("预期 head() 分割数组会返回 undefined", () => {
        expect(head()).toEqual(undefined);
    })

    it("预期 head(123) 分割数组会报错，因为传入的参数不是数组", () => {
        const headThrow = () => {
            head(123);
        }

        expect(headThrow).toThrow();
    })

    it("预期 head([1,2,3]) 分割数组会返回 1", () => {
        expect(head([1,2,3])).toEqual(1);
    })
})