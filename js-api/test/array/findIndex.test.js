/*
 * @Author: Calvest
 * @Date: 2022-03-24 17:43:49
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 17:47:32
 * @FilePath: /training/js-api/test/array/findIndex.test.js
 */
describe("FindIndex", () => {
    it("预期 findIndex() 会报错，因为传入的参数不是函数", () => {
        const findIndexThrow = () => {
            findIndex();
        }

        expect(findIndexThrow).toThrow();
    })

    it("预期 findIndex([1,2,3], (element, index, array) => element === 2) 返回 1", () => {
        expect(findIndex([1, 2, 3], (element, index, array) => element === 2)).toEqual(1);
    })
})