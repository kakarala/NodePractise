const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

exports.loader = function(req, res){
    let path = url.parse(req.url).path;
    if(path !== '/favicon.ico'){
        switch(path){
            case '/first':
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                fs.readFile('./src/views/first/index.html',function(err, data){
                    if(err){
                        res.end(err.toString());
                    }else{
                        res.write(data.toString());
                        res.end();
                    }
                });
                break;
            case '/upload':
                let data = '';
                req.on('data',function(chunk){
                    data += chunk;
                });
                req.on('end',function(){
                    res.setHeader('Content-Type','text/plain;charset=utf-8');
                    let obj = querystring.parse(data);
                    res.end(JSON.stringify(obj));
                });
                break;
            case '/imgs/react-es6.jpg':
                fs.readFile('./src/static/imgs/react-es6.jpg',function(err, data){
                    if(err){
                        res.end(err.toString());
                    }else{
                        res.write(data);
                        res.end();
                    }
                });
                break;
            default:
                res.end('404了啊');
        }
    }else{
        res.end();
    }
}