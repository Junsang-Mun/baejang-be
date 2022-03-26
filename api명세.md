# API 명세
version 0.1


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

### /api/blog/update
- PUT
- 블로그 글의 수정
- 전달: id, 제목, 본문
- 리턴: pass/fail

### /api/blog/delete
- DELETE
- 블로그 글의 삭제
- 전달: id
- 리턴: pass/fail

## /api/presentation
- GET
- 발표 명단 
- 리턴: id, 발표자/팀, 발표시간, 발표주제, 발표위치

### /api/presentation/{id}
- GET
- {id}번째 발표 상세 조회
- 리턴: 발표자/팀, 발표주제, 발표시간, 발표위치

### /api/presentation/search
- GET
- 특정 조건과 일치하는 발표 세션 검색
- 전달: 쿼리조건(발표자/팀, 발표주제 中 하나), 쿼리
- 리턴: 쿼리와 일치하는 발표 세션(id, 발표자/팀, 발표주제, 발표시간, 발표위치) 혹은 404