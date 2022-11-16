# study-w-icecrao2

- [1](1.md)

> [goryangju-website](https://jaewoong-goryangju.netlify.app/)

- [설치 및 실행](#설치-및-실행)
- [목표](#목표)
- [사용 기술](#사용-기술)
- [조사필요](#조사필요)
- [레이아웃](#레이아웃)
- [기능](#기능)
- [트러블 슈팅](#트러블-슈팅)

## 설치 및 실행

- 설치

```shell
npm
```

- 실행

```shell
npm start
```

## 목표

- react.js 를 이용하여 **고량주 사이트** 만들기!
- github 협업해보기!

## 사용 기술
 _________________________________________________________________
| [javascript](https://javascript.info/js)                        |
| [tailwind](https://tailwindcss.com/)                            |
| [netlify](https://www.netlify.com//)                            |
 _

## 조사필요

- netlify 배포방법
- git pull request 하는방법 알아보기

## 레이아웃

- 헤더
- 사이드
    - 추가버튼, 술 목록
- 글 목록
    - 술 이름, 내용, 사진 url

![레이아웃](/public/img/page.PNG)

## 기능

- 내용 입력
- ![mordal](/public/img/mordal.PNG)
- 내용 보기
- 반응형(색깔 변형) 
- ![color](/public/img/responsible.PNG)

## 트러블 슈팅

- github pull request에서 **there isn't anything to compare** 오류 발생
    - google에 검색해서 문제 해결법 찾아봄
    - 원본 repository를 다시 다운받은 후 다시 pr을 올려보니 잘 실행됐음

## 배포후 관리

1. 불필요한 코드 변경 및 수정
  1.  components/MainComponent.jsx -> Main.jsx, Mordal.jsx, Side.jsx 등으로 분할
    - 분할 한 이유 -> 한 파일에 모든 컴포넌트들 다 작성하다 보니 필요한 코드가 잘 보이지 않음
  2. handler 함수 이름 수정 기존 *handler 이름의 함수를 handle* 이름의 함수로 수정
    - 수정 한 이유 -> 다른 사람들의 코드 관행이 handle*을 사용하여 똑같이 수정해봄
  3. 불필요한 hook 제거
    - 제거 한 이유 -> 딱히 별 다른 로직이 없는 hook들을 쓸데없이 추상화 한 경향이 심했음
    - 새롭게 배운것 -> react의 hook은 마운트 되기 전과 마운트 된 후 그 사이에 실행됨 
    그러므로 그 사이에 실행되어야만 하는 로직을 커스텀 hook으로 사용해야만 함.

## 새롭게 배운점

1. react 환경에서 css 스타일 코드를 작성하면 비즈니스 로직이 쉽게 묻힌다는 것을 알게됨
이러한 문제를 위해 tailwind의 스타일 클래스를 작성하는 스타일 파일을 따로 제작하여 사용하면 좋다는것을 배움.