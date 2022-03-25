/*
 * @Author: Calvest
 * @Date: 2022-03-25 16:54:29
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 17:00:12
 * @FilePath: /training/js-api/test/array/indexOf.test.js
 */
describe("IndexOf", () => {
    it("预期 indexOf() 返回 -1", () => {
        expect(indexOf()).toEqual(-1);
    })

    it("预期 indexOf([1,2,3,NaN], NaN, 1) 返回 -1", () => {
        expect(indexOf([1, 2, 3, NaN], NaN, 1)).toEqual(-1);
    })

    it("预期 indexOf([1,2,3,4], 2, 2) 返回 -1", () => {
        expect(indexOf([1, 2, 3, 4], 2, 2)).toEqual(-1);
    })
})