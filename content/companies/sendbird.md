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

## Projects

---

### SDK 구조 리팩토링

#### Problem

- 기능이 누적되며 하드코딩된 문자열이 많아지고, String 기반 처리로 속도 저하
- 테스트 작성 시 불필요한 분기 코드가 필요함

#### Solution

- 하드코딩된 문자열을 StringSet 으로 통합
- 열거형으로 표현 가능한 데이터는 Enum 으로 전환

#### Achievement

- CircleCI 테스트 성공률 약 **5% 증가**, 유지보수성·일관성 개선

#### Tech Used

- **Network** : Okhttp3
- **UnitTest** : Android UnitTest
- **Automation** : CircleCI

---

### Additional Contribution

<details>
<summary>SDK 기능 개발 · 테스트</summary>

- MyLastSeen: 다른 유저의 마지막 Online 상태 확인 기능
- Message Search: SDK 에서 메시지 검색 기능 제공
- Delivery Receipt: 메시지가 정확히 전송되었는지 표시하는 기능
- 위 기능의 테스트케이스 작성 (2019.08 · 2019.11 · 2020.06), CircleCI 로 자동화해 SDK 릴리즈에 포함

</details>

<details>
<summary>Guideline &amp; Sample implementation</summary>

- WhatsApp 형태의 앱을 SendBird SDK 로 구현한 샘플과 Guideline 을 고객에게 제공
- Delivery Receipt 샘플 제작
- 샘플 제공으로 기술지원 비용 감소, 이후 UIKit 개선으로 연결

</details>
