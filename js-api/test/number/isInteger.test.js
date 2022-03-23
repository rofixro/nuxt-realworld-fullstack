/*
 * @Author: Calvest
 * @Date: 2022-03-24 00:56:07
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 01:06:18
 * @FilePath: /training/js-api/test/number/isInteger.test.js
 */
describe("IsInteger", () => {
    it("预期 isInteger() 会报错，因为传入的参数不是整数", () => {
        const isIntegerThrow = () => {
            isInteger();
        }

        expect(isIntegerThrow).toThrow();
    })

    it("预期 isInteger(NaN) 会报错，因为传入的参数不是整数", () => {
        const isIntegerThrow = () => {
            isInteger(NaN);
        }

        expect(isIntegerThrow).toThrow();
    })

    it("预期 isInteger(-1.5) 会报错，因为传入的参数不是整数", () => {
        const isIntegerThrow = () => {
            isInteger(-1.5);
        }

        expect(isIntegerThrow).toThrow();
    })

    it("预期 isInteger(0) 会返回 true", () => {
        expect(isInteger(0)).toEqual(true);
    })
})