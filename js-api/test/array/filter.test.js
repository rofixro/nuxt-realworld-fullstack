/*
 * @Author: Calvest
 * @Date: 2022-03-24 17:09:09
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 17:14:11
 * @FilePath: /training/js-api/test/array/filter.test.js
 */
describe("Filter", () => {
    it("预期 filter() 会报错，因为传入的参数不是函数", () => {
        const filterThrow = () => {
            filter();
        }

        expect(filterThrow).toThrow();
    })

    it("预期 filter([1,2,3], (element, index, array) => element === 2) 会返回 [2]", () => {
        expect(filter([1, 2, 3], (element, index, array) => element === 2)).toEqual([2]);
    })

    it("预期 filter([1,2,3,4], (element, index, array) => element > 10) 会返回 []", () => {
        expect(filter([1, 2, 3, 4], (element, index, array) => element > 10)).toEqual([]);
    })
})