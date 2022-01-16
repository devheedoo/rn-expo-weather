## ~2.0

프로젝트 준비

```
$ npm i -g expo-cli
$ brew update
$ brew install watchman
$ expo init ProjectName
$ expo whoami
$ expo login
$ npm start
```

## 2.1 The Rules of Native

- StyleSheet.create 는 자동완성을 제공해준다. 단순 객체를 반환한다.
- StatusBar 같은 컴포넌트는 화면에 직접 관여하지 않는다. 상단의 시계, 배터리, 와이파이 등의 상태를 보여준다.

## 2.2 React Native Packages

- AsyncStorage, Navigator 같은 기존의 컴포넌트, API들이 사라졌다. 이유는 RN 팀이 선택과 집중을 하기 위해서다.

## 2.3 Third Party Packages

- 지원이 중단된 컴포넌트, API들은 커뮤니티에서 만들어지고, 사용된다.
- Expo의 컴포넌트, API들도 사용할 수 있다. 많은 것들을 지원해주고, 안정적이다.

## 2.4 Layout System

- RN에는 display: block, inline-block, grid가 없다. 항상 flex다.
- RN에서의 Flexbox는 웹에서와 약간 다르다. default direction이 column이다.

## 2.5 Styles

- 레이아웃: 도시 이름, 날짜, 설명 표시

## 2.6 Styles Part 2

- 레이아웃: ScrollView, Dimensions

## 2.7 Location

`$ expo install expo-location`

- expo-location 사용해서 현재 지역 정보 획득
