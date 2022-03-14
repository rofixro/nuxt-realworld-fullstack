/*
 * @Author: Calvest
 * @Date: 2022-03-15 01:58:42
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-15 02:09:42
 * @FilePath: /training/lodash/test/compact.test.js
 */
describe("Compact", () => {
    it("预期 compact() 过滤数组为 []", () => {
        expect(compact()).toEqual([]);
    })

    it("预期 compact(true) 过滤数组会报错，因为传入的参数不是数组", () => {
        const compactThrow = () => {
            compact(true);
        }

        expect(compactThrow).toThrow();
    })

    it("预期 compact([1, true, 0, ' ', {}, false, null]) 过滤数组为 [1, true, ' ', {}]", () => {
        expect(compact([1, true, 0, ' ', {}, false, null])).toEqual([1, true, ' ', {}]);
    })
})