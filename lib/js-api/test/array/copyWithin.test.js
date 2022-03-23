/*
 * @Author: Calvest
 * @Date: 2022-03-23 17:23:33
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-23 17:52:32
 * @FilePath: /training/lib/js-api/test/array/copyWithin.test.js
 */
describe("CopyWithin", () => {
    it("预期 copyWithin() 会返回 []", () => {
        expect(copyWithin()).toEqual([]);
    })

    it("预期 copyWithin({}) 会报错，因为传入的参数不是数组", () => {
        const copyWithinThrow = () => {
            copyWithin({});
        }

        expect(copyWithinThrow).toThrow();
    })

    it("预期 copyWithin([], true) 会报错，因为传入的参数不是正整数", () => {
        const copyWithinThrow = () => {
            copyWithin([1, 2, 3], true);
        }

        expect(copyWithinThrow).toThrow();
    })

    it("预期 copyWithin([1,2,3], 5) 会返回 [1,2,3]", () => {
        expect(copyWithin([1, 2, 3], 5)).toEqual([1, 2, 3]);
    })

    it("预期 copyWithin([1,2,3], -2) 会返回 [1,1,2]", () => {
        expect(copyWithin([1, 2, 3], -2)).toEqual([1, 1, 2]);
    })

    it("预期 copyWithin([1,2,3], 0, 1, 5) 会返回 [2,3,3]", () => {
        expect(copyWithin([1, 2, 3], 0, 1, 5)).toEqual([2, 3, 3]);
    })
})