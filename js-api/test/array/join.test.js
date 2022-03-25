/*
 * @Author: Calvest
 * @Date: 2022-03-25 17:52:39
 * @LastEditors: Calvest
 * @LastEditTime: 2022-03-26 00:47:19
 * @FilePath: /training/js-api/test/array/join.test.js
 */
describe("Join", () => {
    it("预期 join() 返回 ''", () => {
        expect(join()).toEqual("");
    })

    it("预期 join([1,2,3])) 返回 '1,2,3'", () => {
        expect(join([1, 2, 3])).toEqual('1,2,3');
    })

    it("预期 join(['a', 1, true, [], {}, function(){}, NaN, null, undefined]) 返回 'a,1,true,,[object Object],function () {},NaN,null,undefined'", () => {
        expect(join(['a', 1, true, [], {}, function () { }, NaN, null, undefined])).toEqual("a,1,true,,[object Object],function () { },NaN,null,undefined");
    })
})