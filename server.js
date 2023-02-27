var http = require('http');
let port = 100;
var server = http.createServer(function(req, res){
    //handle incoming requests
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<html><body><p>This is home Page.</p></body></html>')
        res.end()
    }else{
        res.end('Invalid URL');
    }
    
});

server.listen(port)

console.log('Web server is running.')