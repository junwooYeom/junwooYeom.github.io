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

## Key Projects

### TMS 기사 애플리케이션 개발

#### Problem

- 새로운 사업의 일환으로, 물류 배송을 위한 기사 애플리케이션 개발
- 배송 차량의 상차부터 시작하여, 운반 지도 설계 및 운반 길찾기, 배송량 설정 등 많은 기능이 존재

#### Solution

- GPS 위치 설게를 통한 현재 위치 탐색
- 서버와의 실시간 통신을 통한, 현재 물자 파악 및 상태 실시간 연동 진행

#### Tech used

- **Design** : Zeplin
- **UI** : XML + DataBinding
- **UI Architecture** : Mavericks + Clean Architecture with Multi-Module
- **Network** : Retrofit2
- **Concurrency** : RxJava + Kotlin Coroutine

---

### VDS ( Vroong Design System ) 개발

#### Problem

- 기사앱 / 매니저 앱 / TMS / POS 등 굉장히 많은 애플리케이션이 각각의 디자인 컴포넌트를 사용
- TMS 애플리케이션을 제작하면서, 동시에 Design System 연동 진행

#### Solution

- Custom View 를 이용한 UI 설계
- 디자이너와 협업하여 시스템 토큰 설계 협업 진행
- 회사 내부 Nexus Repository 로 관리하여, 모든 사내 애플리케이션이 접근하도록 허용

#### Tech Used

- **Design** : Figma
- **UI** : XML + Custom View Attr
- **Library Management** : Nexus Repository

---

### Additional Contribution

<details>
<summary>상점 애플리케이션 상점 공지 기능 개발</summary>

배달을 관제하는 매니저 애플리케이션에서 상점 애플리케이션으로 직접 공지 메시지를 작성하여 상점으로 전송하게 해주는 기능을 디자이너, PM 과 협업하여 개발

#### Achievement

- Play Store 주소 : [Play Store](https://play.google.com/store/apps/details?id=net.meshkorea.pos)

#### Tech Used

- **Design** : Zeplin
- **UI** : XML + DataBinding
- **Architecture** : MvRx + Multi-Module
- **Network** : Retrofit2
- **Concurrency** : RxJava + Kotlin Coroutine

</details>

<details>
<summary>매니저 앱 단건배송 관제 관련 지도 기능 개발</summary>

배달을 관제하는 매니저 애플리케이션에서 기사가 단건배송을 수행중인지 아닌지에 따라 다르게 보여주고 배차가 불가능하도록 하는 기능을 디자이너, PM 과 협업하여 개발

#### Achievement

- Play Store 주소 : [Play Store](https://play.google.com/store/apps/details?id=com.vroong2.managerapp)

#### Tech Used

- **Design** : Zeplin + Figma
- **UI**: XML + DataBinding
- **Architecture**: MvRx + Multi-Module
- **Concurrency** : Kotlin Coroutine

</details>

<details>
<summary>애플리케이션 리팩토링</summary>

메쉬코리아에서 직접적으로 관리하는 각종 애플리케이션의 유지보수 진행 ( 기사앱, 매니저앱, TMS앱 등등 )

언어 : Kotlin ( 기사앱, 매니저앱 ), Java ( 이전 TMS 애플리케이션 )

#### Achievement

- PlayStore : [Play Store](https://play.google.com/store/apps/details?id=com.vroong2.agentapp)

#### Tech Used

- **Design** : Zeplin + Figma
- **UI** : XML + DataBinding
- **Architecture** : MvRx + Multi-Module
- **Concurrency** : Kotlin Coroutine

</details>
