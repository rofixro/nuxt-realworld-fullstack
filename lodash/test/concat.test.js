/*
 * @Author: Calvest
 * @Date: 2022-03-15 14:23:52
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-15 14:36:52
 * @FilePath: /training/lodash/test/concat.test.js
 */
describe("Concat", () => {
    it("预期 concat() 拼接数组会报错，因为传入的参数不是数组", () => {
        const concatThrow = () => {
            concat();
        }

        expect(concatThrow).toThrow();
    })

    it("预期 concat([]) 拼接数组会返回 []", () => {
        expect(concat([])).toEqual([]);
    })

    it("预期 concatp([1,false, {name: '张三'}], 2, true, [3], [[{name: '李四'}], [4]]) 拼接数组会返回 [1, false, {name: '张三'}, 2, true, 3, [{name: '李四'}], [4]]", () => {
        expect(concat([1, false, { name: '张三' }], 2, true, [3], [[{ name: '李四' }], [4]])).toEqual([1, false, { name: '张三' }, 2, true, 3, [{ name: '李四' }], [4]]);
    })
})