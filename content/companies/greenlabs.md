---
title: "그린랩스 파이낸셜"
role: "Android Engineer"
period: "2022.11 ~ 2023.04"
order: 4
summary: "SEED 앱의 전사 디자인 시스템 구축, 빌드 최적화, 보안 모듈 설계 등을 통해 Android 개발 생산성과 제품 일관성을 향상시켰습니다."
---

2022.11 \~ 2023.04

## Summary

<div class="callout">

SEED 앱의 전사 디자인 시스템 구축, 빌드 최적화, 보안 모듈 설계 등을 통해 Android 개발 생산성과 제품 일관성을 향상시켰습니다.

</div>

## Role & Responsibilities

- Jetpack Compose 기반 디자인 시스템 구축 및 MavenCentral 배포
- Multi-Module 기반 아키텍처 정비
- Build Script 최적화 + Custom Gradle Plugin 개발
- 금융 도메인 보안 모듈 개발
- CI/CD (Github Actions) 세팅

## Projects

---

### Seed-DesignSystem 배포

#### Problem

- 앱 개발에 앞서, 이후 화면들이 공통으로 쓸 디자인 시스템이 먼저 필요함

#### Solution

- 디자이너와 협업해 Figma 기반 토큰·컴포넌트를 구조화하고 Jetpack Compose 로 구현
- Maven Central 에 오픈소스로 배포

#### Achievement

- [Maven Central](https://central.sonatype.com/search?smo=true&q=com.greenlabsfin.design) · [GitHub](https://github.com/greenlabsfin/seed-android-design-system) 공개, UI 일관성 확보

#### Tech Used

- **UI** : Jetpack Compose
- **Design** : Figma
- **Library Management** : Sonatype MavenCentral

---

### 금융 도메인 보안 모듈 개발

#### Problem

- 전자금융업 요건에 맞는 보안 키패드와 인앱 보안 기능이 필요함

#### Solution

- 보안 기능을 독립 모듈로 분리해, 필요한 기능·도메인 단위로 적용할 수 있도록 설계
- Jetpack Compose 기반 보안 키패드 개발

#### Tech Used

- **UI** : Jetpack Compose

---

### Additional Contribution

<details>
<summary>빌드 개선</summary>

- 빌드 스크립트 최적화 → 빌드 시간 4\~5분대 → 1분대로 약 **75% 감소**
- Custom Gradle Plugin 으로 빌드 스크립트 보일러플레이트 **60% 이상 감소**

</details>

<details>
<summary>그 밖의 기능 개발</summary>

- 사용자 상황을 입력받는 필터 화면 개발 (Compose, MVI + Clean Architecture)
- 로그인 · 회원가입 · 탈퇴 개발 (Kakao Auth SDK, Seed Design System)

</details>
