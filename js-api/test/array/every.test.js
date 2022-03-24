/*
 * @Author: Calvest
 * @Date: 2022-03-24 15:31:15
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 15:43:45
 * @FilePath: /training/js-api/test/array/every.test.js
 */
describe("Every", () => {
    it("预期 every() 会报错，因为传入的参数不是数组和函数", () => {
        const everyThrow = () => {
            every();
        }

        expect(everyThrow).toThrow();
    })

    it("预期 every([1,2,3], 123) 会报错，因为传入的参数不是函数", () => {
        const everyThrow = () => {
            every([1, 2, 3], 123);
        }

        expect(everyThrow).toThrow();
    })

    it("预期 every([1,2,3], (element, index, array) => element > 0) 会返回 true", () => {
        expect(every([1, 2, 3], (element, index, array) => element > 0)).toEqual(true);
    })
})