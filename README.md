[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🔍 About the Project
> 현재 코로나19로 인해 얼마전부터 위탁의료기관을 통한 신종 코로나바이러스 감염증(코로나19) 접종이 본격 시작되었습니다. 
이에 따라, 원하는 지역의 예방접종 위탁의료기관을 간편하게 조회할 수 있는 서비스를 개발하였습니다. 
이 프로젝트는 매 정각 1번씩 갱신되고 있는 위탁의료기관의 정보 데이터를 기반으로 제공합니다.
더불어 [카카오맵 API](https://apis.map.kakao.com/web/)를 활용하여 지도를 생성하여 그 위에 검색된 데이터들을 표시하고 
기관에 대한 정보들을 제공하는 리스트를 추가로 제공합니다. 

## 💻 User Interface 
<img src="/uploads/c003a2a8d20b368d3c0fb07c49007251/UI예시.png"  width="800" height="400">

   
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
npm install
```
3. add API key
> Fill {} with API Key
```
const $key = '{Corona Vaccination Medical Institution API key}' (app.js)
```
```
<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey={Kakao map API Key}&libraries=services"></script> (index.ejs)
```
4. Execute 
```
node app.js
```

## 💻 Project Architecture
<img src="/uploads/e100a6266d6c84863f5890fd3c54c56e/프로젝트_아키텍처.PNG"  width="800" height="400">

  
   
## ✨ Contributors 

| 김서연 | 허재경 |
| :----: | :----: |
| [@ksy991018](https://github.com/ksy991018) | [@JaeKyungHeo](https://github.com/JaeKyungHeo) |
 
