const http = require('http')
// const fs = require('fs')
// const path = require('path')

// req是http.IncomingMessage实例
// res是http.ServerResponse实例

http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/' && method === 'GET') {
    //读取首页
    // fs.readFile(path.resolve('./index.html'), (err, data) => {
    //   if (err) {
    //     res.statusCode = 500;//服务器内部错误
    //     res.end('500 - Internal Sever Error')
    //     return;
    //   }
    //   res.statusCode = 200;//请求成功
    //   res.setHeader('Content-Type', 'text/html')
    //   //end方法可以使用buffer，加不加toString都可以
    //   res.end('hello http')
    // })
    res.on('close', () => {
      console.log('connection closed')
    })
    // console.log(Object.keys(req))
    // console.log('rawHeaders', req.rawHeaders)
    res.statusCode = 304;
    res.setHeader('Content-Type', 'text/plan')
    res.setHeader('Cache-Control', 'max-age=3600')
    // res.setHeader('ETag', "603f5b13-2f58af")
    // Cache-Control: max-age=31536000
    setTimeout(() => {
      res.end(`hello https ${Math.random()}`)
    }, 1000)
  }
}).listen(3000);