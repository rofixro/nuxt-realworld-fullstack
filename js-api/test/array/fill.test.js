/*
 * @Author: Calvest
 * @Date: 2022-03-24 16:15:00
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 16:29:57
 * @FilePath: /training/js-api/test/array/fill.test.js
 */
describe("Fill", () => {
    it("预期 fill() 会返回 []", () => {
        expect(fill()).toEqual([]);
    })

    it("预期 fill([1,2,3], true) 会返回 [true, true, true]", () => {
        expect(fill([1, 2, 3], true)).toEqual([true, true, true]);
    })

    it("预期 fill([1,2,3], false, -4, 1) 会返回 [false, 2, 3]", () => {
        expect(fill([1, 2, 3], false, -4, 1)).toEqual([false, 2, 3]);
    })
})