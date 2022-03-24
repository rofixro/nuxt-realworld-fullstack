/*
 * @Author: Calvest
 * @Date: 2022-03-24 00:46:28
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 14:13:06
 * @FilePath: /training/js-api/test/array/entries.test.js
 */
describe("Entries", () => {
    it("预期 entries([1,2,3]).next().value 会返回 1", () => {
        expect(entries([1, 2, 3]).next().value).toEqual(1);
    })
})