# API 명세

## /api
- 아무 기능도 하지 않음

## /api/blog
- GET
- 블로그 전체 글 조회
- 리턴: 제목, 본문 미리보기

### /api/blog/{id}
- GET
- 블로그 {id}번째 글 조회
- 전달: id
- 리턴: 제목, 본문

### /api/blog/create
- POST
- 블로그 글 새로 작성
- 전달: 제목, 본문
- 리턴: id

## /api/presentation
- GET
- 발표자 명단 
- 리턴: 발표자, 발표시간, 발표주제, 발표위치

### /api/presentation/