/*
 * @Author: Calvest
 * @Date: 2022-03-27 01:32:52
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-27 01:41:13
 * @FilePath: /training/js-api/test/array/lastIndexOf.test.js
 */
describe("LastIndexOf", () => {
    it("预期 lastIndexOf() 返回 -1", () => {
        expect(lastIndexOf()).toEqual(-1);
    })

    it("预期 lastIndexOf([0,2,3,2], 2) 返回 3", () => {
        expect(lastIndexOf([0, 2, 3, 2], 2)).toEqual(3);
    })

    it("预期 lastIndexOf([2,5,9,2], 7) 返回 -1", () => {
        expect(lastIndexOf([2, 5, 9, 2], 7)).toEqual(-1);
    })
})