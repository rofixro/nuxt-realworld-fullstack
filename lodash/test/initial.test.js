/*
 * @Author: Calvest
 * @Date: 2022-03-21 23:02:22
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 23:07:31
 * @FilePath: /training/lodash/test/initial.test.js
 */
describe("Initial", () => {
    it("预期 initial() 分割数组为 []", () => {
        expect(initial()).toEqual([]);
    })

    it("预期 initial(123) 分割数组会报错，因为传入的参数不是数组", () => {
        const initialThrow = () => {
            initial(123);
        }

        expect(initialThrow).toThrow();
    })

    it("预期 initial([1,2,3]) 分割数组会返回 [1,2]", () => {
        expect(initial([1, 2, 3])).toEqual([1, 2]);
    })
})