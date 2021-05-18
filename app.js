var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var app =express();
app.use(express.urlencoded( {extended : false } ));
app.locals.pretty=true;
app.set('views','./views')
app.set('view engine','pug');
app.use(express.static('public'));

//?page=페이지번호&?perPage=페이지당 데이터수
const $base_url = `https://api.odcloud.kr/api/apnmOrg/v1/list`;
const $key = '4US0H%2BXj%2BmS8IR4YL0%2BUb9H4CcbTr92QxhYULfOEz1DT%2BZaaos4sRfNh6cmAD2Icli862Ysc31%2BaE4pWywDBIA%3D%3D';

//임시 매개변수 
const $page=1;
const $perPage=10;

const $api_url = $base_url + '?serviceKey='+$key+'&page='+$page+'&perPage='+$perPage;
console.log($api_url);

//해당 URL로 요청 
request($api_url,function(err,res,body){
    if(err) throw err;
 
    var obj = JSON.parse(body);
    // console.log(obj);
    for(var i=0; i<obj.data.length; i++){
        let name = obj.data[i].orgnm;
        let location = obj.data[i].orgZipaddr;
        console.log(`기관명: ${name}, 위치: ${location}\n`);
    }

    // res.render('main', {title: 'misae', data:data, pm10:pm10})

})

app.listen(3000,function(){
    console.log('Connected 3000 port!');
});

app.post('/search',function(req,res){
    res.send('내가 검색한 지역은 ' + req.body.region);
})

app.get('/',function(req,res){

    res.render('main');
})