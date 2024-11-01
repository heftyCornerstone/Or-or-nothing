# Or or nothing

## 요구사항과 구현 내용

## 요구사항

### 기본 요구사항

**프로젝트 폴더 생성**
* `vite`를 이용하여 프로젝트 폴더 생성하기

**메달**
* 메달 기록 CRUD 로직 완성하기
* 메달 기록을 추가하는 부분은 `form`태그 활용 
* 메달 정렬 내림차순, 금메달 갯수를 기준으로 삼음, 데이터 변동시 자동 재정렬

**컴포넌트**
* 컴포넌트 활용, 구조 분리하기
* 분리한 컴포넌트에 대해 README 파일에 설명을 추가

**레이아웃**
* 전체 레이아웃의 최대 너비는 1200px, 최소 너비는 800px, 가운데 정렬

<br>

### 도전과제

* 중복 국가 처리
-동일한 국가가 이미 리스트에 있을 경우, alert

* 존재하지 않는 국가 알림
-사용자가 수정하려는 나라 이름이 리스트에 없을 경우, alert

* 총 메달 수 정렬
-각 국가의 금, 은, 동메달 수를 합산하여 총 메달 수를 계산
-사용자가 원하는 기준(금메달 수, 총 메달 수...)으로 정렬할 수 있도록 옵션 추가

* 로컬 스토리지 활용
-국가와 메달 정보를 로컬 스토리지에 저장

<br>


## 구현

기본 요구사항과 도전과제가 모두 반영되었습니다.

<br><br>

## 레이아웃

<img src='https://github.com/user-attachments/assets/8ba46a54-2ae2-4780-a285-40395e3db96b', width='60%'>

<br>

* 제목
* 메달 기록 표를 정렬할 수 있는 드롭다운 메뉴
* 메달 기록 입력란
* 메달 기록 표

<br><br>


## 특이사항
새로운 메달 기록 추가시 정렬 드롭다운 메뉴에서 설정한 순서에 맞게 메달 기록 표에 기입됩니다.

<img src='https://github.com/user-attachments/assets/b3fef935-129c-4ab5-81a9-d8cc51c3b8c2', width='60%'>
