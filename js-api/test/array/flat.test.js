/*
 * @Author: Calvest
 * @Date: 2022-03-24 23:09:43
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 23:31:26
 * @FilePath: /training/js-api/test/array/flat.test.js
 */
describe("Flat", () => {
    it("预期 flat() 返回 []", () => {
        expect(flat()).toEqual([]);
    })

    it("预期 flat({}) 会报错，因为传入的参数不是数组", () => {
        const flatThrow = () => {
            flat({});
        }

        expect(flatThrow).toThrow();
    })

    it("预期 flat([1,2,3,[4]]) 返回 [1,2,3,4]", () => {
        expect(flat([1, 2, 3, [4]])).toEqual([1, 2, 3, 4]);
    })

    it("预期 flat([1,2,3,,[4]], -1) 返回 [1,2,3,[4]]", () => {
        expect(flat([1, 2, 3, , [4]], -1)).toEqual([1, 2, 3, [4]]);
    })

    it("预期 flat([1, [2, [3, [4, [5]]]]], Infinity) 返回 [1,2,3,4,5]", () => {
        expect(flat([1, [2, [3, [4, [5]]]]], Infinity)).toEqual([1, 2, 3, 4, 5]);
    })
})