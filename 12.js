const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Welcome to our Hompage")
        res.end()
    }
    if(req.url === '/about'){
        res.end('Developed By : Akash')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Error 404 not Found</p>
        <a href="/"> Home </a>`)
})

server.listen(5000)