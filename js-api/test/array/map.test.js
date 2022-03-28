/*
 * @Author: Calvest
 * @Date: 2022-03-28 23:35:34
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-28 23:42:59
 * @FilePath: /training/js-api/test/array/map.test.js
 */
describe("Map", () => {
    it("预期 map() 会报错，因为传入的参数不是函数", () => {
        const mapThrow = () => {
            map();
        }

        expect(mapThrow).toThrow();
    })

    it("预期 map([1,2,3], (element, index, array) => element * 2) 返回 [2,4,6]", () => {
        expect(map([1, 2, 3], (element, index, array) => element * 2)).toEqual([2, 4, 6]);
    })
})