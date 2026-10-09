---
title: "OFF-BASE"
role: ""
period: ""
order: 1
summary: "주한미군들을 위한 부동산 매물 확인 플랫폼"
tags: ["Compose Multiplatform", "Supabase", "Ktor", "Kotlin Coroutine", "Kotlin Flow"]
cover: "/assets/img/off-base/01.png"
---

주한미군들을 위한 부동산 매물 확인 플랫폼

<div class="gallery">

![OFF-BASE 스크린샷 1](/assets/img/off-base/01.png)
![OFF-BASE 스크린샷 2](/assets/img/off-base/02.png)

</div>

## TECH

- **운영체제** : Compose MultiPlatform
- **서버 및 Storage** : Supabase
- **네트워킹** : Ktor
- **비동기처리** : Kotlin Coroutine, Kotlin Flow

## EXPERIENCE

### 홈 화면

- 기본적인 지도 + 리스트 형식으로 제작되어 있습니다.

### 소셜 로그인 기능 개발

- Supabase 에서 제공하는 auth-kt 를 활용
- Google, Kakao, Apple 로그인을 각각 구현 후 SignUp 퍼널을 추가하도록 설정하였습니다.

### 매물 등록 기능 개발

- 매물 등록에 필요한 화면들을 Funnel 형식으로 만들어, 공인중개사가 애플리케이션을 통해서 매물을 등록할 수 있도록 기능 개발 진행
