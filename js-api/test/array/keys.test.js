/*
 * @Author: Calvest
 * @Date: 2022-03-26 01:16:45
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-26 01:21:13
 * @FilePath: /training/js-api/test/array/keys.test.js
 */
describe("Keys", () => {
    it("预期 keys([1,2,3]).next().value 返回 0", () => {
        expect(keys([1, 2, 3]).next().value).toEqual(0);
    })

    it("预期 keys([1,2,3]).next().done 返回 false", () => {
        expect(keys([1, 2, 3]).next().done).toEqual(false);
    })
})