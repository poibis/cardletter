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

## html purifier
# https://velog.io/@inhalin/html-purifier

## 비속어 필터
# https://github.com/VaneProject/bad-word-filtering

## 추가 및 삭제만 (삭제시 비밀번호 :/input)
# click시 더보기 방식

# mobile 입장 제한 스크립트 (naver redirect)
# f12 키 무효화
# 확대는 허용 scale =1
# 사진 클릭시 slider 활성화 modal library searching
# 모바일 해상도는 최적화해서 맞춘다
# reference site -> https://developer.mozilla.org/ko/docs/Web/API/Window/devicePixelRatio
# https://github.com/amirshnll/custom-device-emulation-chrome
# mobile device detecting library -> https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90-%EC%A0%91%EC%86%8D%ED%95%98%EB%8A%94-%EA%B8%B0%EA%B8%B0%EB%AA%A8%EB%B0%94%EC%9D%BC%ED%83%9C%EB%B8%94%EB%A6%BFPC-%EA%B5%AC%EB%B6%84%ED%95%98%EA%B8%B0#mobile-detect_%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC

## lightsail x github actions auto mr & push catching
## resource들 optimization, jsdelivr 참조 referencing
## loading time check
## progress bar (if required)



//$__rawBody = file_get_contents("php://input"); // 본문을 불러옴
//$__getData = array(json_decode($__rawBody)); // 데이터를 변수에 넣고
//
///*
//처리부
//*/
//
//echo json_encode(array('result_code' => '200', 'result'=>$__getData));
