---
title: "(주) 나인스원더"
role: "Android Engineer"
period: "2023.08 ~ 2024.08"
order: 3
summary: "We웃 앱의 핵심 Android 개발자로서 아키텍처 개선(Hilt)과 UX 중심 기능 개발을 통해 서비스 안정성과 사용자 경험을 고도화하는 역할을 수행했습니다."
cover: "/assets/img/ninthwonder/01.png"
---

2023.08 \~ 2024.08

## Summary

---

<div class="callout">

We웃 앱의 핵심 Android 개발자로서 아키텍처 개선(Hilt)과 UX 중심 기능 개발을 통해 서비스 안정성과 사용자 경험을 고도화하는 역할을 수행했습니다.

</div>

## Role & Responsibilities

---

- Navigation 기반 전체 화면 애니메이션 흐름 설계
- DI Framework 전환(Koin → Hilt)
- 포인트 결제·카테고리 기능 개발
- 홈 기반 지역 스탬프 투어 개발
- 사용자 경험(UX) 향상을 위한 UI·기획 협업

## Key Projects

---

### DI Framework 변환

#### Problem

- 사용하고 있던 Koin 프레임워크 사용시 91% 의 안정성 지표

#### Solution

- 사용하고 있던 라이브러리인 Koin → Hilt 전환
- 기존 App 단일 모듈 → Clean Architecture 기반 Multi-Module 설계
- 앱 빌드 시간 단축을 위한 Multi-Module Gradle Plugin 설계

#### Achievement

- 애플리케이션 Crashlytics 안정성 지표 **91% → 98% 로 향상**
- Github Action 빌드 속도 20분 → 12분으로 약 **40% 감소**

#### Tech Used

- **Dependency Injection** : Koin → Hilt
- **Module Management** : Kotlin DSL, Gradle Plugin, Version Catalog

---

### Stamp 기능 개발

#### Problem

- 지역기반 애플리케이션이지만, 지역 특화 기능의 부재
- 사용자의 체류 / 재방문 비율 낮음

#### Solution

- 지역 스탬프 개발 UI / UX 협업 및 구축
- Jetpack Compose Animation + Navigation 을 이용한 자연스러운 UX 설계
- MVI 형식으로 단방향 사이클 설계로, 사용자 액션 기반 로직 설계

#### Achievement

- 스탬프 사용자 증가로 MAU 약 **15% 증가**
- UX 변환으로 애플리케이션 평점 **3.8 → 4.0 상승**

#### Tech used

- **UI** : Jetpack Compose + AndroidX Navigation
- **UI Architecture : MVI**
- **Network** : Retrofit2

---

### Additional Contributing

#### Features

<details>
<summary>화면전환 애니메이션 획일화</summary>

We웃 애플리케이션 내 화면 이동 관련된 애니메이션을 하나로 획일화 진행

##### Tech Used

Androidx-Navigation with SafeArgs

</details>

<details>
<summary>프로필 화면 전환</summary>

- We웃 앱 프로필 화면에 현재 비즈 사용자인지 아닌지 확인하는 프로필 개선
- 바텀 시트 형식으로 되어있던 프로필 화면을 풀 스크린 화면으로 변환
- 프로필에서 현재 진행중인 미션 및 진행한 스탬프를 확인할 수 있도록 개발

##### Achievement

**프로필 진입자 40% 증가**

##### Tech Used

- **UI** : Jetpack Compose
- **Network** : Retrofit2
- **Concurrency** : Kotlin Coroutine

</details>

<details>
<summary>포인트 결제 개편</summary>

We웃 앱에서 제공하는 포인트 기능의 기획 전반부터, UI / 네트워크 서버 개발 진행

##### Tech Used

- **UI** : Jetpack Compose
- **Network** : Retrofit2
- **Concurrency** : Kotlin Coroutine

</details>

<details>
<summary>카테고리 기능 개발</summary>

We웃 앱에서 추가 기능인 카테고리 관련 추가 기능 개발

##### 사용 기술

- **UI** : Jetpack Compose
- **Network** : Retrofit2
- **Concurrency** : Kotlin Coroutine

</details>
