<?php
header('Content-Type: application/json; charset=UTF-8');

$json = file_get_contents('../test/test.json');
$data = json_decode($json, true);

if(isset($data))
echo "###############\n";

echo $data['address']['city'];
echo "\n\n###############\n";

$data2 = json_encode(json_decode($json, true), JSON_PRETTY_PRINT);
echo $data2;
echo "\n###############\n";

if (defined("CRYPT_BLOWFISH")&&CRYPT_BLOWFISH)
    echo "CRYPT_BLOWFISH is enabled!";
else
    echo"CRYPT_BLOWFISH is not available";

# passwd는 255 이상으로
echo password_hash("rasmuslerdorf", PASSWORD_DEFAULT);

### TODO list
## pass 암/복호 함수
# password_hashing

## js xss csrf preventing
# https://rios.tistory.com/entry/JS-XSS-CSRF-%EA%B3%B5%EA%B2%A9-%EA%B0%80%EB%8A%A5%EC%84%B1-%EB%A7%89%EA%B8%B0%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

## html purifier
# https://velog.io/@inhalin/html-purifier

## 비속어 필터
# https://github.com/VaneProject/bad-word-filtering

## 추가 및 삭제만 (삭제시 비밀번호 :/input)
# click시 더보기 방식

# mobile 입장 제한 스크립트 (naver redirect)
# 카카오페이 연결링크 분기처리하여 계좌노출 설정
# 주소창 색 설정
# f12 키 무효화, 우클릭 무효화
# 확대는 허용 scale =1
# 사진 클릭시 slider 활성화 modal library searching
# 모바일 해상도는 최적화해서 맞춘다
# reference site -> https://developer.mozilla.org/ko/docs/Web/API/Window/devicePixelRatio[완]
# https://github.com/amirshnll/custom-device-emulation-chrome [완]
# 모바일 기기에서만 접근하도록 제한
# mobile device detecting library -> https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90-%EC%A0%91%EC%86%8D%ED%95%98%EB%8A%94-%EA%B8%B0%EA%B8%B0%EB%AA%A8%EB%B0%94%EC%9D%BC%ED%83%9C%EB%B8%94%EB%A6%BFPC-%EA%B5%AC%EB%B6%84%ED%95%98%EA%B8%B0#mobile-detect_%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC

## lightsail x github actions auto mr & push catching
## resource들 optimization, jsdelivr 참조 referencing
## loading time check
## progress bar (if required)


###
/* -nginx, 화면로딩 chatgpt 참고-
meta 설정
성욱,나윤 결혼합니다 title
2024년 3월 30일 17시20분 더베뉴지서울 강서 description
400x400 og:image

404, 500, 503 page html free template
index.html 복제후 asdf.html 생성->기존은 !!only author allow!!
https://sweet-myo.tistory.com/168 - 첫화면 페이딩인
https://www.wsgvet.com/web/243 -nginx cache
https://codyhouse.co/ds/components/effects?page=3&show=all ->스크롤이펙트 component case

화면 로드시 부드럽게 노출 
body color 설정
우 상단 mute 배경음악 기능 float
[단어들은 fadein raiseup]

첫화면 마우스 스크롤액션
환영합니다
blabla
blabla
썸네일 큰거 bg가 사이즈에 맞게 축소 그리고 fixed
올리면 하얀배경의 화면이 나오면서
정성욱 ㅁ 강나윤
wedding march
사진
[날짜 장소 시간 안내 이거 상단 플로팅 하자]
하연배경 내 테두리표시 및 그림자 약간
영상 스크롤액션 
가운데 결혼관련 이미지 + 하단 아래 설명 문구 

-달력표시-
setinterval
예식 시간까지
00일 00시간 00분 00초 <-코드블락 배경색 틱마다 변경
달력의 원색도 같이 틱마다 변경
-갤러리-
img_slide_test.html 파일 참고
-주차 안내-
건물 주차장을 이용해주세요
000대 자리 완비 및 2시간 무료 주차
-오시는길-
상세 도로주소명 표시
다음맵 api연결
네이버,카카오,티맵 연결
지하철
[0번출구 나오자마자 직진 도보 1분] <- 코드블락 처리
버스
-마음전할곳(파라미터로 신랑,신부 따로 보여줄 링크제작)-
카카오페이 송금 api,
(복사이미지)계좌번호 복사
(정성욱 · 신한 · 0000-00-0000)
신랑측
신부측
{우상단 클릭gif}

english version [string들을 배열로 놓고 html에서 호출
카피라이트 css화려한거 하나

부모님용 만들고 
*/


//$__rawBody = file_get_contents("php://input"); // 본문을 불러옴
//$__getData = array(json_decode($__rawBody)); // 데이터를 변수에 넣고
//
///*
//처리부
//*/
//
//echo json_encode(array('result_code' => '200', 'result'=>$__getData));
