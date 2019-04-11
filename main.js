var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    console.log(req.url)
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is !NEW! home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is !NEW! student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is !NEW! admin Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

var port = process.env.PORT || 8092;
server.listen(port); //6 - listen for any incoming requests

console.log(`Node.js web server at port ${port} is running..`)
