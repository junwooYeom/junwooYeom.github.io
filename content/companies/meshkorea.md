---
title: "(주) 메쉬코리아"
role: "Android Engineer"
period: "2021.04 ~ 2022.06"
order: 6
summary: "물류·배송 시스템의 모바일 기반을 구축하기 위해 기사·매니저·TMS 앱 개발과 전사 디자인 시스템(VDS)을 담당하며 대규모 서비스의 Android 구조를 정비했습니다."
tags: ["Kotlin", "Java", "Mavericks", "MvRx", "Multi-Module", "Clean Architecture", "DataBinding", "Custom View", "RxJava", "Kotlin Coroutine", "Retrofit2", "Nexus Repository"]
cover: "/assets/img/meshkorea/01.jpeg"
---

![메쉬코리아](/assets/img/meshkorea/01.jpeg)

[부릉 기사앱 - Google Play 앱](https://play.google.com/store/apps/details?id=com.vroong2.agentapp)

## Summary

<div class="callout">

물류·배송 시스템의 모바일 기반을 구축하기 위해 기사·매니저·TMS 앱 개발과 전사 디자인 시스템(VDS)을 담당하며 대규모 서비스의 Android 구조를 정비했습니다.

</div>

## Role & Responsibilities

- VDS(디자인 시스템) 설계·제작
- TMS 기사 앱 개발
- Custom View 기반 UI 컴포넌트화
- Multi-Module + Mavericks 기반 아키텍처 구성

## Projects

---

### TMS 기사 애플리케이션 개발

#### Problem

- 신규 사업으로 물류 배송 기사용 앱이 필요함
- 상차부터 운반 지도, 길찾기, 배송량 설정까지 기능 범위가 넓음

#### Solution

- GPS 기반 현재 위치 탐색
- 서버와의 실시간 통신으로 물자 현황과 배송 상태 연동

#### Achievement

- TMS 기사 전용 앱 출시

#### Tech Used

- **UI** : XML + DataBinding
- **UI Architecture** : Mavericks + Clean Architecture with Multi-Module
- **Concurrency** : RxJava + Kotlin Coroutine

---

### VDS ( Vroong Design System ) 개발

#### Problem

- 기사앱 / 매니저 앱 / TMS / POS 등 여러 앱이 각자의 디자인 컴포넌트를 사용

#### Solution

- 디자이너와 시스템 토큰을 함께 설계하고, Custom View 로 공통 컴포넌트 구현
- 사내 라이브러리로 배포해 모든 사내 앱이 같은 컴포넌트를 쓰도록 함

#### Achievement

- 전사 UI 일관성 확보, TMS 앱 개발과 동시에 디자인 시스템 적용

#### Tech Used

- **Design** : Figma
- **UI** : XML + Custom View Attr

---

### Additional Contribution

<details>
<summary>그 밖의 기능 개발</summary>

- 매니저 앱 단건배송 관제 지도: 기사의 단건배송 수행 여부에 따라 표시를 달리하고 배차를 제한 ([Play Store](https://play.google.com/store/apps/details?id=com.vroong2.managerapp))
- 매니저 앱에서 상점 앱으로 공지를 보내는 상점 공지 기능 ([Play Store](https://play.google.com/store/apps/details?id=net.meshkorea.pos))
- 기사앱 · 매니저앱 · TMS 앱 유지보수 및 리팩토링 (Kotlin, Java)

</details>
