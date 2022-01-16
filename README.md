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
