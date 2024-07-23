# 🌱 ESG 경영 기업 TAECO 사내 인트라넷 서비스

![사용자페이지IA](/public/images/company_logo_user.png)

인트라넷 시스템은 직원들의 부재 및 출결과 관련된 결재를 관리하는 시스템입니다. 이 시스템은 프로필 관리, 연차/반차 등 부재 신청, 내역 확인, 출결관리, 그리고 각종 사내 공지를 확인할 수 있는 기능을 제공합니다.

아래 ID와 Password로 로그인하실 수 있습니다.

[사용자 페이지]<br>
User ID: user2@taeco.com<br>
User PW: 1234

[관리자 페이지]<br>
Admin ID: admin@taeco.com<br>
Admin PW: 1234<br>

---

## 프로젝트 소개

ESG 경영 기업 TAECO 사내 인트라넷 서비스

### 목표

- 직원 데이터베이스(프로필) 구축 및 관리
- 근태 및 휴가 관리 시스템 구축
- 직원들의 출결 및 휴가 관리 효율화
- 기업 공지 시스템 구축 및 관리
- 사용자 친화적인 웹 인터페이스 제공
- 내부 커뮤니케이션 및 협업 강화

### 정보구조도(IA)

추가사항, 선택사항, 필수사항을 구분하여 우선순위 선정

<img width="1024" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/2084fc33-6731-4aac-bc08-52d515e4319f">

### 기능정의서

| 유저          | 페이지        | 상세기능          | 설명                                                                                                                    |
| ------------- | ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 사용자,관리자 | 로그인        | 로그인            | 관리자가 등록시켜주면 로그인 진행. 사용자, 관리자 각각 올바른 아이디와 패스워드를 입력하면 사용자, 관리자 페이지로 이동 |
| 사용자,관리자 | -             | 로그아웃          | 로그인 후 서비스 사이드바에서 로그아웃을 진행하면 로그인 페이지로 이동                                                  |
| 사용자        | 대시보드      | 요약된 내용 확인  | 내프로필 정보, 최근 전자결재 및 공지사항 확인                                                                           |
| 사용자        | 대시보드      | 출결              | 오늘 날짜와 시간을 확인하고 출,퇴근 스탬프를 찍을 수 있음. 금주 근무 현황 확인                                          |
| 사용자        | 전자결재      | 결재신청          | 결재신청을 작성할 수 있음                                                                                               |
| 사용자        | 전자결재      | 결재신청 내역확인 | 심사중,승인,반려에 해당하는 내 부재신청 내역을 확인 가능. 카테고리 필터 및 최신순, 오래된순 필터 제공                   |
| 사용자        | 공지사항      | 공지확인          | 각 카테고리 별 공지 확인 가능. 중요공지는 상단에 배치. 검색필터 및 최신순, 오래된순 필터 제공                           |
| 사용자        | 마일리지      | 마일리지 신청     | 카테고리, 점수, 신청날짜, 증빙자료를 첨부하여 신청 가능                                                                 |
| 사용자        | 마일리지      | 적립목록          | 카테고리, 적립날짜, 점수 확인 가능                                                                                      |
| 사용자        | 마일리지      | 신청내역          | 마일리지 레벨과 기준을 확인하고 심사중, 승인, 반려 필터에 따른 신청내역 확인 가능                                       |
| 사용자        | 마이페이지    | 프로필 정보 확인  | 이름, 직급, 프로필 이미지, 이메일, 전화번호 확인 가능                                                                   |
| 사용자        | 마이페이지    | 프로필 정보 수정  | 이름, 직급, 프로필 이미지, 이메일, 비밀번호, 전화번호, 생일, 입사일 수정 가능                                           |
| 관리자        | 대시보드      | 요약된 내용 확인  | 내프로필 정보, 최근 전자결재 및 공지사항, 마일리지 적립 내역 확인                                                       |
| 관리자        | 전자결재 관리 | 결재신청 내역확인 | 심사중,승인,반려에 해당하는 직원들의 부재신청 내역을 확인 가능. 카테고리 필터 및 최신순, 오래된순 필터 제공             |
| 관리자        | 전자결재 관리 | 결재 승인 및 반려 | 결재를 승인하거나 거절사유 작성 후 반려 가능                                                                            |
| 관리자        | 직원관리      | 요약              | 금일의 생일자, 입사자 확인                                                                                              |
| 관리자        | 직원관리      | 직원 목록 확인    | 프로필 이미지, 이름, 직함, 이메일, 전화번호 확인 가능                                                                   |
| 관리자        | 직원관리      | 직원추가          | 이름, 직급, 프로필 이미지, 이메일, 전화번호, 생일, 입사일 작성 후 추가 가능. 등록 시 비밀번호는 자동으로 1234로 설정    |
| 관리자        | 마일리지 관리 | 신청내역확인      | 사용자가 신청한 내역 확인(카테고리, 이미지, 신청일)                                                                     |
| 관리자        | 마일리지      | 승인 및 거절      | 확인, 미확인 필터를 통해 미확인 내역에서 마일리지 심사 진행, 거절 시 거절사유 입력                                      |
| 관리자        | 공지사항      | 공지확인          | 각 카테고리 별 공지 확인 가능. 중요공지는 상단에 배치. 검색필터 및 최신순, 오래된순 필터 제공                           |
| 관리자        | 공지사항      | 공지작성          | 제목, 카테고리, 필수공지 여부, 첨부파일 선택, 내용작성 후 공지 등록                                                     |
| 관리자        | 공지사항      | 공지삭제          | 공지 상세페이지에서 삭제하기를 눌러 진행                                                                                |

### 개발 환경

- Front : HTML, CSS, JavaScript
- Back-end : Node.js, SQLite3
- 버전 및 이슈관리 : Github, Github Issues
- 협업 툴 : Slack, Notion, ZEP
- 디자인 : Figma

### 프로젝트 기간

6월 10일(월) ~ 7월 12일(금) (약 5주)

- 1주차: 기획 및 설계
- 2주차: HTML, CSS 작성
- 3주차: JavaScript 작성 및 SPA 구조 설계
- 4주차: JavaScript 작성 및 데이터베이스 구조 설계
- 5주차: Bug Fix 및 리팩토링

---

### 사용자 페이지 화면

#### 대시보드 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/315c6b71-8fc7-4733-90a7-943ff063147d">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/31289383-2eaa-4e81-9a63-00816aebce71">

#### 마이페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/82632c0a-eab2-4eca-90c7-1f27ff12b435">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/35db3dfd-6020-452c-9c92-a895662a68a6">

#### 전자결재 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/969e5b71-5c71-4348-b95b-1c77c092a5be">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/89f76652-e8e0-4da4-9995-32903eab442c">

#### 마일리지 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/63b36ac9-32ad-4a03-9cf2-aa730bfb5f2f">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/cec28f70-539d-4d6e-9ed4-e712c18b394f">

#### 공지(갤러리) 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/7db16cf8-d701-40b7-b9be-01d5efc4b923">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/6dc08403-04de-428a-8de5-b7b2ac1264b8">

### 관리자 페이지 화면

#### 대시보드 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/c6684d94-862d-4273-aaf9-15a714d5c9e8">

#### 직원관리 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/169e000f-e8a9-485e-bb6e-4b25a4f28fa0">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/7019c5aa-ef98-461a-a14a-1bcbcc66176c">

#### 전자결재 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/83d62b15-9283-4345-8eb6-62b2ad272a16">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/b65a3320-b029-4c3b-b056-9d05ea5e4d7c">

#### 마일리지 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/95e8b414-71bf-4990-ba7d-5809612c8a23">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/ac51b93f-ce05-4027-b431-06890a8a1928">

#### 공지사항 페이지

<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/3ac517aa-0719-43ce-afa0-90760609a72a">
<img width="420" alt="image" src="https://github.com/red-dev-Mark/TIL/assets/93127663/5e4e1ef1-7eff-4457-9042-bc942b028531">

---

## 프로젝트 팀 소개

| 권혁준                                           | 박수현                                       | 김승민                                     | 권혜지                                 |
| ------------------------------------------------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------- |
| ![red-dev-Mark](/public/images/red-dev-Mark.png) | ![suhyun9892](/public/images/suhyun9892.png) | ![miniseung](/public/images/miniseung.png) | ![hyeppyy](/public/images/hyeppyy.png) |
| @red-dev-Mark                                    | @suhyun9892                                  | @miniseung                                 | @hyeppyy                               |
| 마일리지 페이지                                  | 직원관리, 마이페이지                         | 전자결재 페이지                            | 공지사항 페이지                        |
