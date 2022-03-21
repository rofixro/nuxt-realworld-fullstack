/*
 * @Author: Calvest
 * @Date: 2022-03-21 17:20:32
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-21 17:41:40
 * @FilePath: /training/lodash/test/slice.test.js
 */
describe("Slice", () => {
    it("预期 slice() 切片数组会返回 []", () => {
        expect(slice()).toEqual([]);
    })

    it("预期 slice({}) 切片数组会报错，因为传入的参数不是数组", () => {
        const sliceThrow = () => {
            slice({});
        }

        expect(sliceThrow).toThrow();
    })

    it("预期 slice([1,2,3,4], true) 切片数组会报错，因为传入的参数不是正整数", () => {
        const sliceThrow = () => {
            slice([1, 2, 3, 4], true)
        }

        expect(sliceThrow).toThrow();
    })

    it("预期 slice([1,2,3,4], 1) 切片数组会返回 [2，3，4]", () => {
        expect(slice([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
    })

    it("预期 slice([1,2,3,4], -3) 切片数组会返回 [2,3,4]", () => {
        expect(slice([1, 2, 3, 4], -3)).toEqual([2, 3, 4]);
    })

    it("预期 slice([1,2,3,4], -1, -3) 切片数组会返回 []", () => {
        expect(slice([1, 2, 3, 4], -1, -3)).toEqual([]);
    })
})