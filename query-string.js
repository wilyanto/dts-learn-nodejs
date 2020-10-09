var http = require('http')
var url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    var q = url.parse(req.url, true).query
    var txt = 'Kata kunci: ' + q.keyword
    res.end(txt)
}).listen(8000)

console.log('Server running on http://localhost:8000')