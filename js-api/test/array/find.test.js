/*
 * @Author: Calvest
 * @Date: 2022-03-24 17:22:47
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-24 17:28:50
 * @FilePath: /training/js-api/test/array/find.test.js
 */
describe("Find", () => {
    it("预期 find() 会报错，因为传入的参数不是函数", () => {
        const findThrow = () => {
            find();
        }

        expect(findThrow).toThrow();
    })

    it("预期 find([1,2,3], (element, index, array) => element > 1) 会返回 2", () => {
        expect(find([1, 2, 3], (element, index, array) => element > 1)).toEqual(2);
    })
})