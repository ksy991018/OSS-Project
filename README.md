[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🔍 About the Project
> 현재 코로나19로 인해 얼마전부터 위탁의료기관을 통한 신종 코로나바이러스 감염증(코로나19) 접종이 본격 시작되었습니다. 
이에 따라, 원하는 지역의 예방접종 위탁의료기관을 간편하게 조회할 수 있는 웹서비스를 개발하였습니다. 
이 프로젝트는 카카오맵을 활용하여 매 정각 1번씩 갱신되고 있는 위탁의료기관의 데이터(점심시간,진료시간,휴무여부,주소,연락처 등)를 제공합니다.

## ✅ Open API
- [카카오맵 API](https://apis.map.kakao.com/web/)
- [공공데이터 포털에서 제공하는 코로나19 예방접종 위탁의료기관 정보 API](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15081240)

## 💻 User Interface 
<img src="https://user-images.githubusercontent.com/72537563/121006539-f48b7200-c7cb-11eb-8c69-26acaad5adcb.png"  width="1000" height="500">
<img src="https://user-images.githubusercontent.com/72537563/121006567-fce3ad00-c7cb-11eb-8ce5-77729f903d72.png"  width="1000" height="500">
   
## 📋 기술 스택
- Nodejs
- Html(-> ejs(Embedded JavaScript))
- Css
- JavaScript
- Express
- AWS EC2
 

## ✏️ 프로젝트 사용 방법
1. cloning
```
http://khuhub.khu.ac.kr/2018103585/Corona_Vaccination_Medical_Institution.git
```

2. install npm packages
```
cd Corona_Vaccination_Medical_Institution
npm install
```
3. add API key
> Fill {} with API Key
```
const $key = '{Corona Vaccination Medical Institution API key}' //(app.js)
```
```
<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey={Kakao map API Key}&libraries=services"></script> //(index.ejs)
```
4. Execute 
```
node app.js
```

## 💻 Project Architecture
<img src="https://user-images.githubusercontent.com/72537563/121006863-58159f80-c7cc-11eb-95a9-d269cfba4309.png"  width="1000" height="500">

  
   
## ✨ Contributors 

| 김서연 | 허재경 |
| :----: | :----: |
| [@ksy991018](https://github.com/ksy991018) | [@JaeKyungHeo](https://github.com/JaeKyungHeo) |
 
