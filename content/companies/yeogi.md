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

<div class="callout">

공간대여 도메인에 특화된 Android 기능 개발 및 UI·정책 반영을 통해 서비스 흐름과 사용자 경험을 안정적으로 구현하는 역할을 담당했습니다.

</div>

## Role & Responsibilities

- 공간대여 홈 화면 · 캘린더 개발
- Google 소셜 로그인 개발
- 찜 기능 리팩토링
- 정책 기반 UI·서버 연동 구현

## Projects

---

### 공간대여 홈 화면 및 캘린더 구조 변경

#### Problem

- 공간대여 확장을 위해 홈 화면 전반의 개편이 필요함
- 영역마다 서버 EndPoint 가 달라 화면 구성이 복잡함

#### Solution

- Server Driven UI 로 내려오는 정보를 XML + DataBinding 으로 연동
- EndPoint 별 UI 모델을 재정의하고, 양방향 바인딩으로 캘린더 UI 구성

#### Tech Used

- **UI** : XML + DataBinding, Server Driven UI

---

### Additional Contribution

<details>
<summary>그 밖의 기능 개발</summary>

- 구글 소셜 로그인을 인앱으로 진행하도록 개발 (Google Identity API)
- 숙소 · 공간대여 등 여러 도메인의 찜 기능을 하나의 UseCase 로 통합하는 리팩토링

</details>
