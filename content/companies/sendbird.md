---
title: "Sendbird Inc."
role: "Android SDK Engineer, Messaging"
period: "2019.01 ~ 2021.04"
order: 7
summary: "SendBird Chat SDK의 핵심 기능 설계·개발과 테스트 자동화를 통해 SDK 품질과 개발자 경험(DX)을 향상시키는 플랫폼 레벨의 Android 엔지니어 역할을 수행했습니다."
tags: ["Android SDK", "Java", "OkHttp3", "Android UnitTest", "CircleCI", "SharedPreference"]
cover: "/assets/img/sendbird/01.png"
---

![Sendbird](/assets/img/sendbird/01.png)

## Summary

<div class="callout">

SendBird Chat SDK의 핵심 기능 설계·개발과 테스트 자동화를 통해 SDK 품질과 개발자 경험(DX)을 향상시키는 플랫폼 레벨의 Android 엔지니어 역할을 수행했습니다

</div>

## Role & Responsibilities

- Message Search, LastSeen, Delivery Receipt 기능 개발
- SDK 구조 리팩토링(Enum 전환, StringSet 통합)
- CircleCI 기반 테스트 자동화 구축
- 고객사 샘플·가이드 제작

## Key Projects

### SDK 구조 리팩토링

#### Problem

- 많은 기능 누적으로 인한 하드코딩 다수 존재
- String 기반 검색으로 인한 기능의 속도 저하
- 테스트 코드 작성 시 필요없는 else 코드 생성 필요

#### Solution

- 하드코딩으로 진행되고 있던 StringSet 형식을 StringSet 기반 통합
- 열거형 형식으로 가능한 데이터에 한해, 열거형으로 진행할 수 있도록 변경

#### Achievement

- CircleCI 테스트 성공률 약 **5% 증가**

#### Tech Used

- **Network :** Okhttp3
- **UnitTest :** Android UnitTest
- **Automation :** CircleCI

---

### Additional Contribution

<details>
<summary>MyLastSeen 프로퍼티 개발</summary>

다른 유저의 마지막 Online 상태를 확인할 수 있도록 하는 기능 개발

#### Tech Used

- **Network :** Okhttp3
- **UnitTest :** Android UnitTest
- **Automation :** CircleCI

</details>

<details>
<summary>Message Search 쿼리 개발</summary>

메시지를 찾는 기능을 SDK 에서 제공할 수 있도록 해주는 기능개발

#### Tech Used

- **Network :** Okhttp3
- **UnitTest :** Android UnitTest
- **Automation :** CircleCI

</details>

<details>
<summary>SDK Test Cases Implementation</summary>

SDK 를 만들면서 생겨날 수 있는 테스트들을 작성, SDK 의 안정성 향상 이바지

SendBird SDK 에서 사용되는 myLastSeen, Message Search, Delivery Receipt 등의 기능에서 테스트코드를 작성, 현재 SDK 에 릴리즈되어 사용중에 있음

<details>
<summary>My Last Seen : 2019.08</summary>

- 현재 유저의 마지막 Online 상태 현황을 보여주는 기능인 MyLastSeen에 대해 테스트케이스 작성

</details>

<details>
<summary>Message Search : 2019.11</summary>

- SendBird SDK 에서 제공하는 Message Search 기능을 라이브러리 형태에서 제공할 수 있도록 하는 기능에 대해 테스트케이스를 작성 후 테스트

</details>

<details>
<summary>Delivery Receipt : 2020.06</summary>

- 유저가 전송한 메시지가 정확히 전송이 되었다는 것을 나타내는 기능에 대해서 테스트케이스 개발

</details>

#### 사용 기술

- **네트워크 :** Okhttp3
- **테스트 :** Android UnitTest
- **자동화 :** CircleCI

</details>

<details>
<summary>Guideline &amp; Sample implementation</summary>

SendBird 의 채팅 API 를 이용한 샘플 제작과 특정 Customer 가 사용할 수 있도록 하는 Guideline 제작

<details>
<summary>What's App Sample Guideline</summary>

- What'sApp 애플리케이션을 SendBird SDK 로 사용방법을 Implementation 후 GuildeLine과 샘플을 Customer 에게 제공

</details>

<details>
<summary>Delivery Receipt Sample</summary>

- 유저가 전송한 메시지가 정확히 전송이 되었다는 것을 나타내는 기능에 대해서 샘플로 제작

</details>

#### Tech Used

- **Network :** Okhttp3
- **UnitTest :** Android UnitTest
- **Automation :** CircleCI
- **Database :** Android SharedPreference

</details>
