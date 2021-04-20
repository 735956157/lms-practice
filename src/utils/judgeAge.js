/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-20 14:24:48
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-20 14:56:03
 */
function judgeAge (age, message) {
    if(age < 18) {
        console.log(message)
    }
    const str = `
    <div>age: ${age}</div>
 `
    return str
}
export default judgeAge
