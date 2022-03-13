/*
 * @Author: Calvest
 * @Date: 2022-03-13 15:38:16
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-13 19:20:55
 * @FilePath: /training/Lodash/test/chunk.test.js
 */
describe("Chunk", () => {
    it("预期 chunk() 分割数组为 []", () => {
        expect(chunk()).toEqual([]);
    });

    it("预期 chunk({}) 分割数组会报错，因为传入的参数不是数组", () => {
        const chunkThrow = () => {
            chunk({});
        };

        expect(chunkThrow).toThrow();
    })

    it("预期 chunk([1, 2, 3], { name: 'Calvest' }) 分割数组会报错，因为传入的参数不是正整数", () => {
        const chunkThrow = () => {
            chunk([1, 2, 3], { name: 'Calvset' })
        }

        expect(chunkThrow).toThrow();
    })

    it("预期 chunk([1, 2, 3], 1.5) 分割数组会报错，因为传入的参数不是正整数", () => {
        const chunkThrow = () => {
            chunk([1, 2, 3], 1.5);
        }

        expect(chunkThrow).toThrow();
    })

    it("预期 chunk([1, 2, 3], 5) 分割数组为 [1,2,3]", () => {
        expect(chunk([1, 2, 3], 5)).toEqual([1, 2, 3]);
    });

    it("预期 chunk([1, 2, 3], 2) 分割数组为 [[1,2], [3]]", () => {
        expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    });
});