var http = require('http');
var fs = require('fs');

function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./map/map.html', null, function(err,data){
        if(err){
            res.writeHead(404);
            res.write('error');
        }
        else{
            console.log('complete!');
            res.write(data);
        }
        res.end();
    });
}

http.createServer(onRequest).listen(3000);