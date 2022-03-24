/*
 * @Author: Calvest
 * @Date: 2022-03-25 01:17:01
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 01:24:37
 * @FilePath: /training/js-api/test/array/forEach.test.js
 */
describe("ForEach", () => {
    it("预期 forEach() 会报错，因为传入的参数不是函数", () => {
        const forEachThrow = () => {
            forEach();
        }

        expect(forEachThrow).toThrow();
    })

    it("预期 forEach([1,2,3], (element, index, array) => element * 2) 返回 undefined", () => {
        expect(forEach([1, 2, 3], (element, index, array) => element * 2)).toEqual(undefined);
    })
})