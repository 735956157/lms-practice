/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-09 13:23:41
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-09 17:51:44
 */
const fs = require('fs');

process.stdout.write('请输入你要操作的文件名:');
process.stdin.on('data',(e) => {          //监听用户输入操作对象文件名
    let rewriteObj = '../' +  e.toString();
    let i = rewriteObj.indexOf('\r');
    rewriteObj = rewriteObj.substring(0,i); //去除用户输入的回车
    fs.readFile(rewriteObj, function (err, data) {
        if (err) {
			process.stdout.write('你输入的文件名不存在'+'\n');
            process.exit(1);
        }else {
            if(isJson(data.toString())) {
                let data1 = data.toString()   //二进制转换成字符串
                    data1 = JSON.parse(data1)       //字符串转换成json对象
                    if(data1.scripts) {
                        data1.scripts = {
                            "test": "echo \"Error: no test specified\" && exit 1",
                            "build:dev": "cross-env NODE_ENV=development node runconfig",
                            "build:test": "cross-env NODE_ENV=test node runconfig",
                            "build:pro": "cross-env NODE_ENV=pro node runconfig",
                        }
                        let str = JSON.stringify(data1, null, '\t')
                        fs.writeFile(rewriteObj, str, function(err) {   //重写json文件
                            if (err) {
                                return console.error(err);
                            }
                            process.stdout.write('重写文件成功'+'\n');
                            process.exit(1);
                        })
                    }else {
                        process.stdout.write('文件没有script依赖项,无法写入'+'\n');
                        process.exit(1);
                    } 
            }else {
                process.stdout.write('该文件不是json字符串，不能重写'+'\n');
                process.exit(1);
            }
        }
     })
})

function isJson(str){
    if(typeof str === 'string'){
        try{
            let obj = JSON.parse(str);
            if(typeof obj == 'object' && obj){
                return true;
            }else{
                console.log(444)
                return false;
            }
        }catch(e){
            console.log(e)
            return false;
        }
    }
}