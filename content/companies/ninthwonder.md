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

<div class="callout">

We웃 앱의 핵심 Android 개발자로서 아키텍처 개선(Hilt)과 UX 중심 기능 개발을 통해 서비스 안정성과 사용자 경험을 고도화하는 역할을 수행했습니다.

</div>

## Role & Responsibilities

- DI Framework 전환(Koin → Hilt)과 Multi-Module 구조 설계
- 홈 기반 지역 스탬프 투어 개발
- 포인트 결제·카테고리 기능 개발
- Navigation 기반 화면 전환 애니메이션 정비
- UX 향상을 위한 UI·기획 협업

## Projects

---

### DI Framework 변환

#### Problem

- Koin 사용 환경에서 앱 안정성 지표가 91% 에 머묾

#### Solution

- Koin → Hilt 전환
- 단일 App 모듈을 Clean Architecture 기반 Multi-Module 로 재설계

#### Achievement

- Crashlytics 안정성 지표 **91% → 98%**

#### Tech Used

- **Dependency Injection** : Koin → Hilt
- **Module Management** : Kotlin DSL, Gradle Plugin, Version Catalog

---

### Stamp 기능 개발

#### Problem

- 지역 기반 앱이지만 지역 특화 기능이 없고, 체류·재방문 비율이 낮음

#### Solution

- 지역 스탬프 투어 기능을 UI / UX 협업으로 구축
- Compose Animation + Navigation 으로 자연스러운 흐름 설계, MVI 단방향 구조 적용

#### Achievement

- MAU 약 **15% 증가**, 앱 평점 **3.8 → 4.0**

#### Tech Used

- **UI** : Jetpack Compose + AndroidX Navigation
- **UI Architecture** : MVI
- **Network** : Retrofit2

---

### Additional Contribution

<details>
<summary>그 밖의 기능 개발</summary>

- 프로필 화면 개편: 바텀 시트를 풀 스크린(Compose)으로 바꾸고 미션·스탬프 현황 추가 → 프로필 진입 **40% 증가**
- 포인트 결제 개편: 기획부터 UI · 서버 연동까지 진행
- 카테고리 기능 개발
- 앱 전체 화면 전환 애니메이션 통일 (AndroidX Navigation)

</details>
