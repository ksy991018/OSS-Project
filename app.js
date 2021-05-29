var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var app =express();
app.set('view engine','ejs');
app.set('views','./views')
app.use(express.urlencoded( {extended : false } ));
app.use(express.static(__dirname + '/public'));
app.locals.pretty=true;

// app.set('view engine','pug');

app.use(express.static('public'));
var http = require('http');
var fs = require('fs');

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
        // console.log(body);
        //data부분만 추출
        var obj = JSON.parse(body).data;
        // console.log(obj);
        //검색한 지역 포함한 모든 data 담기
        let searchList = obj.filter(searchList => {
            return searchList.orgZipaddr.includes(searchWord);
          });
        
        // console.log(searchList);
        //result라는 변수에 담아 결과 보내기 
        // var hey = searchList[0].orgZipaddr.split(',');
        var timeList=[];
        for(var i=0; i<searchList.length; i++){ //시간정보 파싱 
            var eachtime=[];
            console.log(searchList[i]);
            if(searchList[i].lunchSttTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].lunchSttTm.substr(0,2));
            if(searchList[i].lunchSttTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].lunchSttTm.substr(2,2));
            if(searchList[i].lunchEndTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].lunchEndTm.substr(0,2));
            if(searchList[i].lunchEndTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].lunchEndTm.substr(2,2));
            if(searchList[i].sttTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].sttTm.substr(0,2));
            if(searchList[i].sttTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].sttTm.substr(2,2));
            if(searchList[i].endTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].endTm.substr(0,2));
            if(searchList[i].endTm == null)
                eachtime.push('');
            else
                eachtime.push(searchList[i].endTm.substr(2,2));
            if(eachtime == null)
                eachtime.push('');
            else
                timeList.push(eachtime);
        }
        res.render('index', {result:JSON.stringify(searchList),info:searchList ,timeList:timeList});

    })

})

app.get('/',function(req,res){
    res.render('index');
})

app.listen(3000,function(){
    console.log('Connected 3000 port!');
});

