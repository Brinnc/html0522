//숫자 출력 시 자릿수 처리
//두자리 미만일 경우 앞에 문자 '0'을 붙이자
//n은 문자열 처리 대상이 되는 숫자
function numString(n) { //(n) 매개변수
    let result = "";

    if (n < 10) { //한자리수라면
        result = "0" + n;
    } else {
        result = n;
    }
    //console.log("함수 호출 결과는", result);
    return result;
}

//랜덤한 정수 반환받기
//호출자는 본인이 반환받길 원하는 수에 +1을 더해서 호출해야함
//0~9를 반환받길 원할 경우, getRandom(10)
function getRandom(max) { //(max) 매개변수, 다른 html문서에서 불러서 사용할 때 해당 문서에서 사용하는 값이 투입됨
    let r = Math.random(); //0.0xxx~0.9xxx, 즉, 1보다 작은 수를 반환
    let n = r * max; //0.xxx * 10 = 0부터 9사이의 실수가 반환 
    return parseInt(n);
}

/*----------------------------
두 수의 합을 구하는 함수 정의
----------------------------*/
function getResult(n1, n2) {
    let result = parseInt(n1) + parseInt(n2);
    //아래와 같은 함수를 라이브러리에 적용하면 안되는 이유
    //document.write(result);
    //이 함수를 어떠한 UI를 호풀할지 예측할 수 없으므로, js와 관련된 모든 페이지에서 이 함수를 재사용하기 위해선
    //함수는 !중립적!일 수록 좋다
    //따라서 반환값을 적극 활용하면 좋다
    //즉, 함수를 호출한자가 무엇을 할지 예측할 수 없기에, 반환된 데이터를 가지고 무얼할지에 대한 결정을 호출자에게 맡기자
    return result;
}