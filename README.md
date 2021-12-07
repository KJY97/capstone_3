# 세종대학교 2019년 1학기 캡스톤디자인 3팀

아두이노 미세먼지/이산화탄소 센서를 활용한 차량 공조기 제어 및 관리 내비게이션 웹앱

## 팀원

김다은, 김정윤, 송유진, 한서현

## 배경

4차 산업혁명과 함께 자동차 산업도 변하기 시작했다. 구글과 애플을 선두로 이미 자동차용 OS인 ‘애플 카 플레이’, ‘안드로이드 오토’ 등, 다양한 스마트폰 앱들을 차량에서 연동하는 서비스들을 제공하고 있다. 하지만 처음부터 차량을 위해 설계된 어플이라면 훨씬 사용하기 편할 것이다. 
또한 졸음운전에는 다양한 이유가 존재하지만 막을 수 있는 방법 중 하나로 적절한 환기가 있다. 최근 미세먼지에 대한 사람들의 관심이 증가하고 있는데, 미세먼지 또한 적절한 환기가 필요하다.

## 목적

운전자에게 도움을 줄 수 있는 앱을 만들어보자.

- 차량의 소모품 교체주기 정보 제공
- 차량의 공기를 적절하게 환기할 수 있도록 도와주는 자동 제어 서비스

## 프로젝트 일정

![image-20211208060733505-16389117573607](https://user-images.githubusercontent.com/47266337/145107506-31190859-9a1e-48cc-9fea-1048ed489523.png)

![image-20211208060742781](https://user-images.githubusercontent.com/47266337/145107522-3854a878-64e8-4b46-8b20-c84ab32dbd65.png)

![image-20211208060752399](https://user-images.githubusercontent.com/47266337/145107541-f7df00e1-56b9-44a3-b092-aa983113ab56.png)

## 시스템 구성도

- 해당 프로젝트는 목업 데이터와 오비고 시뮬레이터를 사용하여 개발하였습니다.

![image-20211208054441142](https://user-images.githubusercontent.com/47266337/145107576-2a4fe67a-dfe7-41ae-a361-922ea361569d.png)

## 개발 스크린샷

## 공조기 관리 화면

### 앱 실행 후 첫 화면

![image-20211208054737874](https://user-images.githubusercontent.com/47266337/145107593-72fe3552-3c98-4b31-9fc3-2dd08f49bad0.png)

### 내기모드 & 외기모드

스위치를 On하면 센서 측정값(미세먼지와 이산화탄소)을 이용하여 자동환기 알고리즘에 따라 내기모드/외기모드가 실행된다.

![image-20211208054924347](https://user-images.githubusercontent.com/47266337/145107614-fa521587-9612-4d35-b51b-304ed35d9d63.png)

## 차량 소모품 관리 화면

### 첫 차량 관리 셋팅

![img](https://lh4.googleusercontent.com/ABdwgG9OETwXNgelzCMzyxByka2dsL_gte-UMt3kYpF8TQAIsHJO3pUW4PnXJC7_xf6VvHpuvK_-0kQgpWEDiKrCIllg2y2zNPWvBy0r6rygwluHwYLcy6pSJMob_BOUbXsWJHg)

### 관리항목 화면

![image-20211208055839057](https://user-images.githubusercontent.com/47266337/145107633-4580447a-86e5-42d3-a1f0-517fbb6a9d97.png)

### 알림 팝업

![image-20211208060158617](https://user-images.githubusercontent.com/47266337/145107659-089ac620-6196-4964-a7e4-09b1cbae69d4.png)

### 소모품 교체했을 경우 셋팅

![image-20211208060300831](https://user-images.githubusercontent.com/47266337/145107668-5a4d16da-85d0-49cf-98fd-b87e48e201c8.png)
