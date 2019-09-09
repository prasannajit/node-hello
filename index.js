const fs = require('fs');
const http = require('http');

// const file1 = fs.createWriteStream('./demo_copy.txt');
// file.pipe(file1).on('close',()=>{
//   console.log('done');
// });
const port = process.env.PORT || 3000;
const reqHandler = (req,res)=>{
    const file = fs.createReadStream('./demo.html');
    file.pipe(res);
};
const server = http.createServer(reqHandler);
server.listen(port,()=>{
    console.log(`server listening on ${port}`);
})