---
title: "그린랩스 파이낸셜"
role: "Android Engineer"
period: "2022.11 ~ 2023.04"
order: 4
summary: "SEED 앱의 전사 디자인 시스템 구축, 빌드 최적화, 보안 모듈 설계 등을 통해 Android 개발 생산성과 제품 일관성을 향상시켰습니다."
---

2022.11 \~ 2023.04

## Summary

---

<div class="callout">

SEED 앱의 전사 디자인 시스템 구축, 빌드 최적화, 보안 모듈 설계 등을 통해 Android 개발 생산성과 제품 일관성을 향상시켰습니다.

</div>

## Role & Responsibilities

---

- Jetpack Compose 기반 디자인 시스템 구축 및 MavenCentral 배포
- Multi-Module 기반 아키텍처 정비
- Build Script 최적화 + Custom Gradle Plugin 개발
- 금융 도메인 보안 모듈 개발
- CI/CD (Github Actions) 세팅

## Key Projects

---

### Seed-DesignSystem 배포

#### Problem

- 애플리케이션 기획 전, 차후 애플리케이션 개발을 위한 시스템 설계의 일환으로 디자인 시스템의 우선 설계가 진행

#### Solution

- Jetpack Compose 기반 Design System 설계
- 디자이너와 협업하여 Figma 기반 토큰 및 컴포넌트 구조화
- Maven Central 오픈소스로 배포됨

#### Achievement

- Maven Central Link : [https://central.sonatype.com/search?smo=true&q=com.greenlabsfin.design](https://central.sonatype.com/search?smo=true&q=com.greenlabsfin.design)
- Github Link : [https://github.com/greenlabsfin/seed-android-design-system](https://github.com/greenlabsfin/seed-android-design-system)

#### Tech Used

- **UI** : Jetpack Compose
- **Design** : Figma
- **Library Management** : Sonatype MavenCentral

---

### 금융 도메인 보안 모듈 개발

#### Problem

- 전자금융업을 위한 보안 키패드 및 인앱 보안 모듈 설계가 필요

#### Solution

- Base64 기반 인코딩과 DataStore 접목으로 유저 정보 인앱 부호/복호화
- Jetpack Compose 기반 보안 키패드 개발 진행
- 독립적인 모듈로 관리하여, 차후 재사용이 가능하도록 설계

#### Tech Used

- **UI** : Jetpack Compose
- **Security** : Cipher + Kotlinx Serialization + Base64

---

### Additional Contribution

#### Feature

<details>
<summary><strong>BuildScript 개선</strong></summary>

SEED 애플리케이션을 개발하는 과정에서 원활한 빌드를 제공하고, 그에 따른 빌드 스크립트를 관리하기 위한 스크립트 설정 진행.

##### Achievement

- 빌드 시간 4\~5분대 → 1분대 로 약 **75% 감소**
- 보일러플레이트 코드 **60% 이상 감소**

</details>

<details>
<summary><strong>SEED 애플리케이션 필터 기능 개발</strong></summary>

새로운 애플리케이션에서 제공하는 유저 필터 기능들을 개발
처음 유저가 자신의 상황을 공유하기 위한 여러 페이지를 만들고, 그 페이지에서 사용자가 선택할 수 있는 여러개의 화면을 통해서 유저의 정보를 서버에 저장하도록 설정

##### 사용 기술

- **UI:** Jetpack Compose
- **Navigation :** Accompanist Navigation
- **Architecture :** MVI + Clean Architecture
- **Concurrency:** Kotlin Coroutine + Kotlin Flow

</details>

<details>
<summary><strong>SEED 애플리케이션 로그인 개발</strong></summary>

새로운 애플리케이션에서 회원을 관리하기 위해 로그인 및 회원가입, 탈퇴 관련 로직 개발

##### 사용 기술

- **Design** : Figma + Seed Design System
- **UI :** Jetpack Compose
- **Auth :** Kakao Auth SDK
- **Architecture :** MVI + Clean Architecture
- **Concurrency** : Kotlin Coroutine + Kotlin Flow

</details>
