/*
 * @Author: Calvest
 * @Date: 2022-03-22 01:00:51
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-22 01:30:02
 * @FilePath: /training/js-api/test/array/at.test.js
 */
describe("At", () => {
    it("预期 at() 会返回 undefined", () => {
        expect(at()).toEqual(undefined);
    })

    it("预期 at({}) 会报错，因为传入的参数不是数组", () => {
        const atThrow = () => {
            at({});
        }

        expect(atThrow).toThrow();
    })

    it("预期 at([1,2,3], true) 会报错，因为传入的参数不是正整数", () => {
        const atThrow = () => {
            at([1, 2, 3], true)
        }

        expect(atThrow).toThrow();
    })

    it("预期 at([1,2,3], 2) 会返回 3", () => {
        expect(at([1, 2, 3], 2)).toEqual(3);
    })

    it("预期 at([1,2,3], -1) 会返回 3", () => {
        expect(at([1, 2, 3], -1)).toEqual(3);
    })

    it("预期 at([1,2,3], 5) 会返回 undefined", () => {
        expect(at([1, 2, 3], 5)).toEqual(undefined);
    })

    it("预期 at([1,2,3], -5) 会返回 undefined", () => {
        expect(at([1, 2, 3], -5)).toEqual(undefined);
    })
})