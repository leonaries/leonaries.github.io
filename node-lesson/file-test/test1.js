const fs = require('fs');
const path = require('path');
const http = require('http');

const fileName = path.resolve(__dirname, 'data.txt');
const fileName2 = path.resolve(__dirname, 'data-bak.txt');
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(fileName2);

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        const readStream = fs.createReadStream(fileName)
        readStream.pipe(res)
    }
})

server.listen(8000)


// readStream.pipe(writeStream);
// readStream.on('end', () => {
//     console.log('copy done');
// })

// //读取文件内容
// fs.readFile(fileName,(err,data) => {
//     if(err) {
//         console.error(err);
//         return
//     }
//     //data 是二进制类型需要转换为字符串
//     console.log(data.toString());
// })

// const content = '这是新写入的内容\n'
// const opt = {
//     flag:'a'
// }
// fs.writeFile(fileName,content,opt, (err) => {
//     if(err) {
//         console.error(err)
//     }
// })

// fs.exists(fileName, (exist) => {
//     console.log('exist',exist)
// })