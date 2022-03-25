/*
 * @Author: Calvest
 * @Date: 2022-03-25 15:21:51
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 16:00:27
 * @FilePath: /training/js-api/test/array/includes.test.js
 */
describe("Includes", () => {
    it("预期 includes() 返回 fasle", () => {
        expect(includes()).toEqual(false);
    })

    it("预期 includes([1,2,3], 1, 1) 返回 false", () => {
        expect(includes([1, 2, 3], 1, 1)).toEqual(false);
    })

    it("预期 includes([1,2,3,{}], {}) 返回 false", () => {
        expect(includes([1, 2, 3, {}], {})).toEqual(false);
    })
})