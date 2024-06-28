# Toy_Project_Team-1

토이 프로젝트 1\_사내 인트라넷 시스템 개발을 위한 1팀의 레포지토리입니다.

vite 기반 프론트앤드 프로젝트 구조와 express 기반 node 서버를 포함하고 있습니다.

## 설치

```
npm install
```

## 실행

### 서버 실행

```
npm run server
```

### 클라이언트 실행

```
npm run dev
```

## 컨벤션

### 브랜치 컨벤션

깃플로우 | main→dev→feature

```
feat/a||u||p/login/#24
```

### 커밋 메시지 컨벤션

```
feat: 경매품 업로드 기능 구현 #8
body가 있다면 feat(!): 비교, 변경 전후의 내용을 알려야하는 경우

<body>
```

- type (유형)

  - `feat`: 새로운 기능 추가
  - `design`: 레이아웃, HTML, CSS
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `style`: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
  - `chore`: 기타 변경사항 (빌드 업무, 패키지 매니저 설정 등)
  - `refactor`: 코드 리팩토링
