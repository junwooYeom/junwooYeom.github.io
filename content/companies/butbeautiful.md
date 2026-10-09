---
title: "(주) 벗뷰티풀"
role: "Android Engineer"
period: "2026.01 ~ 현재"
order: 1
summary: "소셜 모임 앱 truloop 의 Android 개발을 맡아 v2.0 핵심 플로우 리뉴얼과 클럽(커뮤니티) 도메인 구축을 주도했습니다."
cover: "/assets/img/butbeautiful/01.jpg"
---

- [truloop 츄룹 · 링크 하나로 약속 끝 - Google Play 앱](https://play.google.com/store/apps/details?id=co.butbeautiful.truloop)
- [츄룹 truloop 앱 - App Store](https://apps.apple.com/app/id6741502835)

## Summary

<div class="callout">

소셜 모임 앱 truloop 의 Android 개발을 맡아 v2.0 핵심 플로우 리뉴얼과 클럽(커뮤니티) 도메인 구축을 주도했습니다. 같은 기능을 iOS(SwiftUI)에도 함께 구현해 두 플랫폼에 동시 출시했고, 아키텍처·빌드·CI/CD 를 정비했습니다.

</div>

## Role & Responsibilities

- Android 앱 기능 개발 전반 (모임 생성·일정 조율·RSVP, 사진·미디어, 실시간 채팅, 클럽)
- iOS 앱 병행 개발: 같은 기능을 두 플랫폼에 동시 출시
- 앱 아키텍처 전환 주도 (ViewModel → Presenter, 데이터 레이어 단순화)
- 빌드 최적화, CI/CD 구축과 릴리즈 운영
- 코드 규약 자동화 (커스텀 detekt 룰, 아키텍처 문서)

## Projects

---

### 클럽(커뮤니티) 도메인 구축 (Android · iOS)

#### Problem

- 1회성 모임 중심의 앱에서, 반복해서 모이는 커뮤니티를 운영할 수단이 없음
- 가입·승인·운영진 권한처럼 정책이 많은 도메인을 두 플랫폼에 같은 동작으로 내야 함

#### Solution

- 초대·가입 신청·승인 흐름과 운영진 역할, 클럽 설정을 설계·구현
- Android 와 iOS 를 같은 이슈 단위로 짝 지어 구현해 두 플랫폼의 동작 차이를 없앰

#### Achievement

- 클럽 생성부터 가입·운영·모임 개설까지 이어지는 커뮤니티 기능을 두 플랫폼에 동시 출시

<div class="gallery">

![클럽 만들기, 이름 기반 커버 추천](/assets/img/butbeautiful/01.jpg)
![클럽 홈, 내 클럽 프로필·멤버·채팅](/assets/img/butbeautiful/02.jpg)
![클럽 모임 참여 전 미리보기](/assets/img/butbeautiful/03.jpg)

</div>

#### Tech Used

- **Android** : Jetpack Compose, Navigation 3, Hilt, Room
- **iOS** : SwiftUI

---

### 앱 크기 최적화 (R8 · 리소스 축소 · Baseline Profile)

#### Problem

- 근거 없이 넓게 잡힌 keep 룰 때문에 R8 최적화 효과가 제한되고, 리소스 축소와 Baseline Profile 이 없음

#### Solution

- R8 설정 분석 리포트로 불필요한 keep 룰을 찾아 제거
- 리소스 축소 활성화, Baseline / Startup Profile 적용

#### Achievement

- R8 최적화 비율 **82% → 91%**, APK 크기 **41.1MB → 38.0MB**

#### Tech Used

- **Build** : R8, Baseline Profile

---

### 데이터 레이어 단순화 & 읽기 경로 단일화

#### Problem

- 구현체가 하나뿐인 interface·class 가 많아 데이터 레이어가 비대함
- 화면마다 데이터를 읽는 방식이 달라, 진입 순간 잘못된 상태가 잠깐 보였다가 바뀌는 깜빡임 발생

#### Solution

- DataSource·Repository 계층을 함수 조립 구조로 바꾸고, 화면은 Room 을 관찰하는 한 가지 방식으로 통일
- 큰 리팩터링을 여러 단계의 작은 PR 로 나눠 리뷰 부담을 낮춤
- 같은 구조가 다시 생기지 않도록 detekt 룰 추가

#### Achievement

- DataSource **36개 → 0개**, RepositoryImpl **25개 → 2개**, 진입 시 상태 깜빡임 제거

#### Tech Used

- **Architecture** : Room, Kotlin Flow, Hilt
- **Static Analysis** : Custom detekt rules

---

### ViewModel → Presenter 아키텍처 마이그레이션

#### Problem

- 거대 ViewModel 에 상태·부수효과·네비게이션이 섞여 있어 테스트와 리뷰가 어려움

#### Solution

- 커스텀 detekt 룰로 새 ViewModel 추가를 막고, 기존 화면을 Reducer + Presenter 구조로 하나씩 이전
- 테스트 기반을 먼저 갖춘 뒤 이전해 회귀를 방지

#### Achievement

- 레거시 ViewModel **52개 → 0개**, Reducer 단위 테스트와 Compose UI 테스트를 표준으로 정착

#### Tech Used

- **UI Architecture** : Compose Presenter, Reducer
- **Testing** : JUnit, Turbine, Compose UI Test

---

### 위치 기반 도착 자동확정

#### Problem

- 참석자가 도착 여부를 직접 눌러야 해서 도착 정보가 잘 쌓이지 않음

#### Solution

- 위치 모듈을 새로 만들어 Geofence·권한 흐름을 캡슐화하고, 모임 장소 진입을 감지해 도착을 자동 확정
- Foreground Service 정책에 맞춰 백그라운드 동작 설계

#### Tech Used

- **Location** : Play Services Geofencing, FusedLocationProvider
- **Background** : Foreground Service

---

### 미디어 업로드 안정화

#### Problem

- 대용량 영상 업로드가 실패하면 재시도가 몰리고, 서버가 중복 요청을 걸러내지 못함

#### Solution

- Sentry 로 원인을 추적해 중복 방지 키 생성 방식을 바로잡고, 지수 백오프 재시도 적용

#### Achievement

- 같은 업로드의 재시도가 하나로 처리되어 재시도 폭주 제거

#### Tech Used

- **Background** : WorkManager
- **Monitoring** : Sentry

---

### Media3 기반 오디오 재생 · 영상 변환

#### Problem

- 모임 배경음악(BGM)의 미리듣기와 상세 재생이 겹치지 않아야 하고, 영상 변환은 써드파티 라이브러리에 의존함

#### Solution

- Media3 ExoPlayer 를 앱 전역 단일 플레이어로 설계해 중복 재생을 구조적으로 차단하고, 백그라운드 전환 시 자동 일시정지
- 영상 변환을 Media3 Transformer 로 이관하고, 실패 시 원본으로 폴백

#### Achievement

- 모임 BGM 기능 출시, 영상 처리 경로를 Media3 로 통일

#### Tech Used

- **Media** : Media3 ExoPlayer, Media3 Transformer

---

### Additional Contribution

<details>
<summary>그 밖의 기능 개발</summary>

- 모임 만들기·일정 조율·RSVP 플로우 리뉴얼 (v2.0)
- 모임 상세 장소 섹션과 전체 지도 시트 (Android · iOS)
- 초대 플로우 개편: 친구·클럽 멤버 초대, 공유 채널 (Android · iOS)
- 얼굴인식 동의 플로우 (Android · iOS)
- 실시간 채팅 고도화: 답장·수정·멘션·반응
- 오프라인에서도 열리는 홈 화면 캐시
- 폴더블·태블릿 대화면 2-pane 레이아웃
- Compose 피드 스크롤 jank 해결

<div class="gallery">

![모임 상세 장소 섹션](/assets/img/butbeautiful/04.jpg)
![초대장 보내기 시트](/assets/img/butbeautiful/05.jpg)
![얼굴인식 동의 화면](/assets/img/butbeautiful/06.jpg)

</div>

</details>

<details>
<summary>개발 환경 · 협업</summary>

- CI/CD 를 GitHub Actions 로 이전하고 배포·알림 자동화, 릴리즈 매니저 역할 수행
- Sentry 도입으로 크래시 모니터링 체계 구축
- 커스텀 detekt 룰과 아키텍처 문서로 코드 규약 자동화
- 큰 변경은 작은 단계의 PR 로 나누고, 결정 근거와 검증 방법을 PR 에 기록
- Android · iOS 를 같은 이슈로 짝지어 진행하며 두 플랫폼의 동작을 맞춤

</details>
