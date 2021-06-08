var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var app =express();

app.set('view engine','ejs');
app.set('views','./views')
app.use(express.urlencoded( {extended : false } ));
app.locals.pretty=true;

//?page=페이지번호&?perPage=페이지당 데이터수
const $base_url = `https://api.odcloud.kr/api/apnmOrg/v1/list`;
const $key = '';
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
        //검색한 지역 포함한 모든 data 담기
        let searchList = obj.filter(searchList => {
            return searchList.orgZipaddr.includes(searchWord);
          });
        
        //result라는 변수에 담아 결과 보내기 
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


  
