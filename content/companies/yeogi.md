---
title: "(주) 여기어때컴퍼니"
role: "Android Engineer"
period: "2022.06 ~ 2022.09"
order: 5
summary: "공간대여 도메인에 특화된 Android 기능 개발 및 UI·정책 반영을 통해 서비스 흐름과 사용자 경험을 안정적으로 구현하는 역할을 담당했습니다."
tags: ["Kotlin", "Kotlin Flow", "Kotlin Coroutine", "DataBinding", "Server Driven UI", "Google Identity API", "Room", "Retrofit2", "Figma"]
cover: "/assets/img/yeogi/01.webp"
---

![여기어때컴퍼니](/assets/img/yeogi/01.webp)

[여기어때 - Google Play 앱](https://play.google.com/store/apps/details?id=kr.goodchoice.abouthere)

## Summary

공간대여 도메인에 특화된 Android 기능 개발 및 UI·정책 반영을 통해 서비스 흐름과 사용자 경험을 안정적으로 구현하는 역할을 담당했습니다.

## Role & Responsibilities

- Google 소셜 로그인 개발
- 찜 기능 리팩토링
- 공간대여 캘린더 커스텀 개발
- 정책 기반 UI·서버 연동 구현

## Key Projects

### 공간대여 홈 화면 및 캘린더 구조 변경

#### Problem

- 여기어때에서 공간대여를 더욱 확장하기 위해, 공간대여 관련된 기본 홈 화면을 전반적으로 개편을 진행
- 각각이 다른 서버 EndPoint 를 가지고 있어, 더욱 좋은 최적화가 필요

#### Solution

- Server Driven UI 로 내려오는 정보를 XML 과 데이터바인딩을 통해 연동
- 각 서버별 다른 EndPoint 로 인하여, 각각의 UI 모델 재정의
- 양방향 바인딩을 통한 캘린더 UI 설정

---

### Additional Contribution

<details>
<summary>Google Social Login 개발</summary>

여기어때 소셜 로그인에서, 구글 로그인을 인앱으로 진행할 수 있도록 개발 진행.

#### Tech Used

- **디자인 협업 :** Figma
- **비동기처리:** Kotlin Flow, Kotlin Coroutine
- **구글 로그인 :** Google Identity API

</details>

<details>
<summary>찜 기능 리팩토링</summary>

약 3개의 다른 도메인 에서 찜 기능을 사용 ( 숙소, 공간대여 등 ). 위를 하나의 UseCase 로 통합하여 사용할 수 있도록 리팩토링 진행

언어 : Kotlin

#### Tech Used

- **비동기 처리 :** Kotlin Flow, Kotlin Coroutine
- **로컬 데이터베이스 :** SharedPreference, Room
- **네트워크 :** Retrofit2

</details>
