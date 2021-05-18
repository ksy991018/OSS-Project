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
const $page=1;
const $perPage=30000;

const $api_url = $base_url + '?serviceKey='+$key+'&page='+$page+'&perPage='+$perPage;
console.log($api_url);

//해당 URL로 요청 
app.post('/',function(req,res,next){
    const searchWord = req.body.region; //지역 키워드 

    request($api_url,function(err,response,body){
        if(err) throw err;
     
        //data부분만 추출
        var obj = JSON.parse(body).data;

        // console.log(obj);

        //검색한 지역 포함한 모든 data 담기
        let searchList = obj.filter(searchList => {
            return searchList.orgZipaddr.includes(searchWord);
          });
        
        // console.log(searchList);
        
        //result라는 변수에 담아 결과 보내기 
        res.render('main', {result:searchList});
    })

})


app.listen(3000,function(){
    console.log('Connected 3000 port!');
});

app.get('/',function(req,res){
    res.render('main');
})