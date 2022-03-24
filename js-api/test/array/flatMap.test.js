/*
 * @Author: Calvest
 * @Date: 2022-03-25 00:49:50
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-25 00:59:41
 * @FilePath: /training/js-api/test/array/flatMap.test.js
 */
describe("FlatMap", () => {
    it("预期 flatMap() 会报错，因为传入的参数不是函数", () => {
        const flatMapThrow = () => {
            flatMap();
        }

        expect(flatMapThrow).toThrow();
    })

    it("预期 flatMap([1,2,3,[4]], square) 会返回 [2,4,6,8]", () => {
        const square = (element, index, array) => {
            if (Array.isArray(element)) {
                return element[0] * 2;
            } else {
                return element * 2;
            }
        }

        expect(flatMap([1, 2, 3, [4]], square)).toEqual([2, 4, 6, 8]);
    })
})