# 원티드 프리온보딩 Week4 - 스위치원

<br />

## ✏️ 과제 설명

주문내역 관리 어드민 페이지 구현

<br />

## 💡 프로젝트 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-internship-1team/pre-onboarding-9th-4-1.git
npm install
npm start
```

<br />

## 📌 배포 링크

http://wanted-intenship-project3.s3-website-us-east-1.amazonaws.com/

<br />

## 🛠 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styled-component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white">

<br />

## 🎄 폴더 구조

```
📄.src
├── App.tsx
├── api
│   └── dataApi.ts
├── component
│   ├── AdminBody.tsx
│   ├── AdminFooter.tsx
│   ├── AdminHeader.tsx
│   └── common
│       ├── Button.tsx
│       ├── Header.tsx
│       ├── Layout.tsx
│       ├── Loading.tsx
│       ├── Pagination.tsx
│       ├── Table.tsx
│       ├── TableHeader.tsx
│       └── Tag.tsx
├── constants
│   ├── colors.ts
│   └── orders.ts
├── context
│   └── SearchContext.tsx
├── hooks
│   ├── useAdminParams.ts
│   ├── usePage.ts
│   ├── usePagination.ts
│   ├── useSearchQuery.ts
│   ├── useTableData.ts
│   └── useTableQuery.ts
├── index.tsx
├── pages
│   └── Mainpage.tsx
├── router
│   └── Router.tsx
├── test
│   ├── Table.test.tsx
│   ├── order.ts
│   └── search.test.tsx
├── types
│   └── data.types.ts
├── units
│   └── getDayOfWeek.ts
└── utill
    └── sortKey.ts

```

<br />

## 👏 협업 방법

주된 커뮤니케이션 툴로 [**팀 노션**](https://www.notion.so/1-48d83304b94c42ad8352fcf6e7973b9f?pvs=4) 페이지와 **디스코드**, **Google meet**를 사용했습니다.

### **노션 페이지**

1. 팀원들의 코드를 분석하고, 그 중에서 Best Practice를 정리하였습니다.
2. commit 컨벤션, git flow 전략, 네이밍을 정의하였습니다.
3. 팀원들의 역할 분담, 일정 조율을 위해 활용되었습니다.

### **Discord / Google Meet**

팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용되었습니다.

<br />

## ⭐️ 과제 구현 및 Best Practice 산정

### 전반적인 프로젝트

> - headless UI 제공으로 스타일을 자유롭게 지정할 수 있는 TanStack의 `React-table` 사용
> - AWS S3를 통해 배포하여 CI/CD 자동화 배포를 구축

<br />

#### ✅ Assignment 1

- 주어진 데이터를 이용하여 주문 목록 페이지를 구현해주세요
  - 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
  - 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
  - 데이터 중에서 오늘의 거래건만 보여지도록 해주세요
    - 여기서 오늘은 **“2023-03-08”**일을 의미합니다.

![](https://user-images.githubusercontent.com/112826154/227155915-07c27ee4-e07f-4765-983e-405bab2c8107.gif)

> **💡 Best Practice 산정 이유**
>
> - 전체적으로 재사용 가능한 컴포넌트, 커스텀훅으로 코드 계층화
> - table에 제네릭 사용 및 재사용 가능한 컴포넌트로 분리
> - 리액트쿼리의 쿼리클라이언트 prefetchQuery를 통한 페이지네이션
> - suspense를 활용한 Loading 구현

<br />
    
#### ✅ Assignment 2

- 정렬 기능을 구현해주세요
  - 기본 정렬은 ID 기준 오름차순으로 구현해주세요
  - 표에서 `주문번호`, `거래일 & 거래시간` 버튼을 누르면 각각 내림차순 정렬이 되도록 해주세요

![](https://user-images.githubusercontent.com/112826154/227154206-4041b9af-beb4-4d55-8047-903a6a3d228d.gif)

> **💡 Best Practice 산정 이유**
>
> - React-table Column 중 id, transaction_time속성에 sortingFn, enableSorting 옵션 적용
> - 오름차순, 내림차순 화살표 표시하여 직관적인 순서 파악

<br />

#### ✅ Assignment 3

3. 주문 처리 상태에 따라 filtering 기능을 구현해주세요

![](https://user-images.githubusercontent.com/112826154/227154985-b2563826-d19d-4a5c-b4ff-987e2a8b3996.gif)

> **💡 Best Practice 산정 이유** <br />
>
> - React-table Column 중 status 속성에 filterFn, enableColumnFilter 옵션 적용
> - 클릭 시 주문 처리 상태에 따라 true, false 색상 표시로 깔끔한 UI

<br />

#### ✅ Assignment 4

- 고객이름을 검색할 수 있도록 해주세요

![](https://user-images.githubusercontent.com/112826154/227155303-faa5dc3f-4d5c-4e15-a2af-fd235d471b1f.gif)

> **💡 Best Practice 산정 이유** <br />
>
> - 고객이름 검색창에 입력 시 실시간 필터링
> - 입력 시 페이지네이션 숨김처리

<br />

#### ✅ Assignment 5

- 서버에 들어온 주문을 5초마다 최신화 해주세요
  - 서버 API는 구현되어 있지 않지만, 구현되어 있다는 가정 하에 요구사항을 충족해주세요

![](https://user-images.githubusercontent.com/66045666/227150632-2d0e272f-041a-46a9-ba57-1372de55cd57.gif)

> **💡 Best Practice 산정 이유** <br />
>
> - QueryClient에 `staleTime: 5000,refetchInterval: 5000` 옵션으로 5초마다 최신화

<br />

#### ✅ Assignment 6

- 컴포넌트에 대한 **테스트 코드**를 구현해주세요

<img width="673" alt="스크린샷 2023-03-23 오후 5 38 29" src="https://user-images.githubusercontent.com/112826154/227148034-9645e4af-cd77-4cdc-bfdc-0ba52a22b4c0.png">

-> Jest와 React-Testing-Library 사용 <br />
-> 결과를 테스트 하는 방식으로 케이스 별 테스트 시나리오 작성

> **💡 Best Practice 산정 이유** <br />
>
> - 한 페이지에 오늘의 거래 건으로 50건의 주문이 보여야한다.
>   - 테이블 컴포넌트에서 screen.getAllByRole('row') 를 사용해 갯수가 51개 확인하도록 작성
>     (51개인 이유는 테이블 헤더에서 tr 태그를 사용하기 떄문)
> - 주문번호, 거래일자 버튼을 누르면 내림차순 정렬이 되어야한다.
>   - 주문번호는 한번 클릭시, 두 번 클릭시 오름차순 내림차순을 screen.getAllByRole('row'), toHaveTextContent, 정규표현식을 이용하여 3개만 검사하도록 작성 50개를 다 검사할 필요가 없다고 판단.
>   - 거래일자도 마찬가지로 주문번호와 같은 방식으로 작성
> - 주문상태를 한번 누르면 true인 데이터들만 보여져야한다.
>   - 테이블에서 screen.getAllByRole('row') 를 가져와 toHaveTextContent('true’)를 이용해 작성
> - 주문상태를 두번 누르면 false인 데이터들만 보여져야한다.
>   - 테이블에서 screen.getAllByRole('row') 를 가져와 toHaveTextContent('false')를 이용해 작성
> - 검색창에 검색하는 단어를 포함한 이름의 고객이 표에 보여져야한다.
>   - 페이지 테이블을 가져와서 렌더를 해주고 screen.getByTestId('search-box')를 활용하여 입력값을 넣어주고 toHaveTextContent('입력값')으로 해당 값이 화면에 있는지 확인하는 방식으로 작성

<br />

## 💗 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/merrybmc"><img src="https://avatars.githubusercontent.com/u/65064563?v=4" width="100px;" alt=""/><br /><sub><b>조병민(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sujeong-dev"><img src="https://avatars.githubusercontent.com/u/112826154?v=4" width="100px;" alt=""/><br /><sub><b>구수정</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rladygks329"><img src="https://avatars.githubusercontent.com/u/64533351?v=4" width="100px;" alt=""/><br /><sub><b>김요한</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sduu"><img src="https://avatars.githubusercontent.com/u/46313348?v=4" width="100px;" alt=""/><br /><sub><b>손혜수</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/SeungYn"><img src="https://avatars.githubusercontent.com/u/66045666?v=4" width="100px;" alt=""/><br /><sub><b>유승윤</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/lzns960"><img src="https://avatars.githubusercontent.com/u/78632299?v=4" width="100px;" alt=""/><br /><sub><b>박수지</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/gong25"><img src="https://avatars.githubusercontent.com/u/60168937?v=4" width="100px;" alt=""/><br /><sub><b>신공섭</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dhsimpson"><img src="https://avatars.githubusercontent.com/u/12489026?v=4" width="100px;" alt=""/><br /><sub><b>윤동희</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dobidugi"><img src="https://avatars.githubusercontent.com/u/21123166?v=4" width="100px;" alt=""/><br /><sub><b>이유태</b></sub></a><br /></td>
     <tr/>
     
  </tbody>
</table>
