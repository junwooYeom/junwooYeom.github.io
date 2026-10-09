---
title: "(주) 벗뷰티풀"
role: "Android Engineer"
period: "2026.01 ~ 현재"
order: 1
summary: "소셜 모임 앱 truloop 의 Android 개발을 맡아 v2.0 핵심 플로우 리뉴얼과 클럽(커뮤니티) 도메인 구축을 주도했습니다."
cover: "/assets/img/butbeautiful/01.jpg"
---

2026.01 \~ 현재 재직 중

- [truloop 츄룹 · 링크 하나로 약속 끝 - Google Play 앱](https://play.google.com/store/apps/details?id=co.butbeautiful.truloop)
- [츄룹 truloop 앱 - App Store](https://apps.apple.com/app/id6741502835)

## Summary

<div class="callout">

소셜 모임 앱 truloop 의 Android 개발을 맡아 v2.0 핵심 플로우 리뉴얼과 클럽(커뮤니티) 도메인 구축을 주도했습니다. 같은 기능을 iOS(SwiftUI)에도 함께 구현해 두 플랫폼에 동시 출시했고, 아키텍처·빌드·CI/CD 를 정비했습니다.

</div>

## Role & Responsibilities

- Android 앱 기능 개발 전반 (모임 생성·일정 조율·RSVP, 룹 상세, 사진·미디어, 실시간 채팅, 클럽)
- iOS 앱 병행 개발 — 클럽·초대·얼굴인식 동의 등 Android 와 같은 기능을 두 플랫폼에 동시 출시
- 앱 아키텍처 전환 주도 (ViewModel → Presenter, 함수형 데이터 레이어, Room 단일 읽기 경로)
- 빌드 최적화 (R8, 리소스 축소, Baseline Profile)
- CI/CD 구축과 릴리즈 운영 (Bitrise → GitHub Actions, v1.15 \~ v2.1.9 릴리즈 관리)
- 관측성 구축 (Sentry 도입, 크래시·노이즈 정리)
- 코드 규약 자동화 (커스텀 detekt 룰, ruleset 검증, 아키텍처 문서 체계)
- Media3 기반 오디오 재생·영상 변환, 대화면(폴더블·태블릿) 레이아웃 대응

## Projects

---

### 클럽(커뮤니티) 도메인 구축 — Android · iOS

#### Problem

- 1:1 모임 중심의 앱에서, 반복해서 모이는 커뮤니티(클럽)를 운영할 수단이 없음
- 가입·승인·운영진 권한처럼 서버 정책이 많은 도메인을 두 플랫폼에 같은 동작으로 내야 함

#### Solution

- Group MVP 에서 시작해 Club 으로 도메인을 재정의하고, 초대·가입 신청·문항·승인 흐름을 설계
- 운영진·스태프 역할, 호스트 이양, 클럽 설정, 전화번호 공개 범위, 소셜 링크, 마크다운 소개 구현
- 클럽 탭·클럽 홈 리디자인, 클럽 룹 참여 전 미리보기와 딥링크, 클럽 멤버 전체 초대
- Android 와 iOS 를 같은 이슈 단위로 짝 지어 구현해 두 플랫폼의 동작 차이를 없앰

#### Achievement

- 클럽 생성부터 가입·운영·모임 개설까지 이어지는 커뮤니티 기능을 두 플랫폼에 동시 출시

<div class="gallery">

![클럽 만들기 — 이름 기반 커버 추천](/assets/img/butbeautiful/01.jpg)
![클럽 홈 — 내 클럽 프로필·멤버·채팅](/assets/img/butbeautiful/02.jpg)
![클럽 모임 참여 전 미리보기](/assets/img/butbeautiful/03.jpg)

</div>

#### Tech Used

- **Android** : Jetpack Compose, Navigation 3, Hilt, Room
- **iOS** : SwiftUI
- **Chat** : Sendbird (클럽 채팅)

---

### 앱 크기·런타임 최적화 (R8 · 리소스 축소 · Baseline Profile)

#### Problem

- 근거 없이 넓게 잡힌 keep 룰 때문에 R8 축소·최적화 비율이 82% 에 머묾
- 리소스 축소가 꺼져 있고, Baseline / Startup Profile 이 없음

#### Solution

- AGP 의 R8 설정 분석 리포트로 kept item 상위를 추적해, 근거가 확인되지 않는 keep 룰을 제거
- 리소스 축소 활성화 (OTA 로컬라이즈 문자열은 전부 보존)
- Baseline / Startup Profile 을 생성해 APK 에 포함

#### Achievement

- R8 축소 / 최적화 / 난독화 비율 **82% → 91%**
- APK 크기 **41.1MB → 38.0MB (약 7.6% 감소)**, 비압축 DEX **24.2MB → 22.1MB**
- 리소스 13,991개 중 **3,618개 제거**

#### Tech Used

- **Build** : R8, AGP 9 R8 Config Analyzer, Baseline Profile

---

### 데이터 레이어 함수형 전환 & 읽기 경로 단일화

#### Problem

- 구현체가 하나뿐인 interface·class 가 많아 데이터 레이어가 비대하고, 거대한 DataSource 가 여러 도메인을 떠안음
- 화면마다 fetch 반환값과 observe 를 섞어 읽어, 진입 순간 "권한 없음" 을 그렸다가 뒤집히는 깜빡임 발생
- 로그아웃 시 일부 Room DB 와 상태를 가진 싱글톤이 비워지지 않음

#### Solution

- 리뷰 가능한 4단계 스택 PR 로 분할 진행 (게이트·도구 → 데이터 레이어 → 실패 표현 → 읽기 경로)
- DataSource 를 원격 어댑터 / 로컬 스토어 값 번들로 바꾸고, 단일 구현 Repository 를 함수 조립으로 대체
- 화면 8개가 Room 을 observe 하고 refresh 만 트리거하도록 통일, "아직 모름" 상태를 null 로 표현
- 세션 종료 계약을 만들어 로그아웃 시 Room DB·싱글톤 상태를 함께 정리
- 같은 구조가 다시 생기지 않도록 detekt 룰·래칫 게이트 추가

#### Achievement

- DataSource **36개 → 0개**, RepositoryImpl **25개 → 2개**
- 리프레시 반환값 직접 소비처 **19곳 → 0곳**, 진입 시 권한 상태 깜빡임 제거

#### Tech Used

- **Architecture** : Functional Core, Room, Kotlin Flow, Hilt
- **Static Analysis** : Custom detekt rules

---

### ViewModel → Presenter 아키텍처 마이그레이션

#### Problem

- 거대 ViewModel 에 상태·부수효과·네비게이션이 섞여 있어 테스트와 리뷰가 어려움
- 이전 방식의 새 코드가 계속 추가되는 것을 막을 장치가 없음

#### Solution

- 커스텀 detekt 룰로 새 ViewModel 추가를 금지하고, 기존 52개 ViewModel 을 화이트리스트로 관리
- 공용 테스트 모듈과 Firebase Test Lab CI 를 먼저 구축한 뒤, Reducer + Presenter + Route 구조로 화면 단위 이전
- 가장 큰 화면(룹 상세)은 영역별 5단계로 나눠 이전

#### Achievement

- 프로덕션 ViewModel **52개 → 0개**, 화이트리스트 제거로 마이그레이션 완료
- Reducer 단위 테스트와 Compose UI 스모크 테스트를 표준으로 정착

#### Tech Used

- **UI Architecture** : Compose Presenter, Reducer
- **Testing** : JUnit, Turbine, Compose UI Test, Firebase Test Lab

---

### 위치 기반 도착 자동확정

#### Problem

- 모임 참석자가 도착했는지 일일이 직접 눌러야 해서, 도착 정보가 잘 쌓이지 않음

#### Solution

- `core/location` 모듈을 새로 만들어 Geofence·현재 위치·권한 흐름을 캡슐화
- 모임 1시간 전부터 장소 반경 **20m** 진입을 감지해 도착을 자동 확정, 수동/자동 방식을 서버에 함께 전달
- 5단계 스택 PR 로 기반 → 서비스 → 지오펜스 → 화면 연결 → 운영 안전장치 순으로 출시
- Android 16 Live Update 로 ETA 알림을 상단에 고정 노출
- Google Play 의 Foreground Service 정책에 맞춰 서비스 종료 계약을 재설계

#### Tech Used

- **Location** : Play Services Geofencing, FusedLocationProvider
- **Background** : Foreground Service, Live Update Notification

---

### 미디어 업로드 안정화

#### Problem

- 대용량 영상이 503 을 받으면 즉시 재시도를 반복하는 retry storm 발생
- 멱등 키에 매번 현재 시각을 붙여 서버가 중복 요청을 걸러내지 못하고 같은 미디어를 계속 새로 처리

#### Solution

- Sentry 이슈를 분석해 원인을 멱등 키 생성 방식으로 특정
- 업로드 생성 시점 기준의 안정적인 멱등 키로 교체
- 502/503/504·네트워크 오류에 지수 백오프(1s/2s/4s + jitter) 재시도, 이후 Retry-After·408/429 처리 추가

#### Achievement

- 같은 업로드의 재시도가 서버에서 하나로 처리되어 retry storm 제거

#### Tech Used

- **Background** : WorkManager
- **Monitoring** : Sentry

---

### Media3 기반 오디오 재생 · 영상 변환

#### Problem

- 모임에 배경음악(BGM)을 붙이는 기능이 필요했고, 생성 화면의 미리듣기와 상세 화면 재생이 서로 꺼지거나 겹치지 않아야 함
- 앱이 백그라운드로 가도 음악이 계속 재생되면 안 됨
- 영상 업로드 전 트랜스코딩이 써드파티 라이브러리에 의존하고, 취소 시점에 크래시가 발생

#### Solution

- Media3 ExoPlayer 를 감싼 `BgmPlayer` 를 앱 전역 단일 인스턴스로 설계 — 미리듣기와 상세 재생이 하나의 플레이어를 공유해 중복 재생을 구조적으로 차단
- 반복 재생, 버퍼링·재생 상태를 StateFlow 로 노출해 Compose UI 가 구독
- ProcessLifecycleOwner 를 구독해 앱이 백그라운드로 가면 자동 일시정지
- 영상 트랜스코딩을 써드파티 라이브러리에서 Media3 Transformer(퍼스트파티)로 이관하고, 변환 실패 시 원본으로 폴백
- Transformer 취소를 생성한 루퍼 스레드로 디스패치해 코루틴 취소 시점의 크래시 수정
- 사진 상세 영상 플레이어의 진행 바를 화면 단위로 끌어올려 페이지 전환에도 유지하고, 썸네일이 깨진 영상은 원본에서 프레임을 추출해 대체

#### Achievement

- 모임 BGM 선택·미리듣기·상세 재생 기능 출시
- 영상 처리 경로를 퍼스트파티 Media3 로 통일

#### Tech Used

- **Media** : Media3 ExoPlayer, Media3 Transformer
- **Lifecycle** : ProcessLifecycleOwner, DefaultLifecycleObserver
- **State** : Kotlin StateFlow, Jetpack Compose

---

### Additional Contribution

#### Features

<details>
<summary>모임 만들기·일정 조율·RSVP 플로우 리뉴얼 (v2.0)</summary>

일정 조율과 확정 플로우를 하나로 합치고, 후보일 선택·가능 시간 입력·RSVP(MAYBE, 응답 마감)·장소 최대 3개·종료 시간·커버/포스터·BGM 을 Reducer + Presenter 구조로 새로 작성했습니다.

</details>

<details>
<summary>룹 상세 장소 섹션 — 번호 레일과 전체 지도 시트 (Android · iOS)</summary>

여러 장소를 번호 레일로 보여주고, 전체 지도 시트에서 한눈에 볼 수 있게 확장했습니다.

![룹 상세 장소 섹션](/assets/img/butbeautiful/04.jpg)

</details>

<details>
<summary>초대 플로우 개편 (Android · iOS)</summary>

친구 / 클럽 멤버 세그먼트로 초대 대상을 나누고, 카카오톡·공유·QR·문자 채널과 이미 초대한 사람 표시, 멤버 목록의 초대 대기 섹션과 RSVP 상태 칩을 추가했습니다.

![초대장 보내기 시트](/assets/img/butbeautiful/05.jpg)

</details>

<details>
<summary>얼굴인식 동의 플로우 (Android · iOS)</summary>

사진 속 얼굴 자동 태그를 위한 동의 화면, 모임 참여 시 동의 플로우, 설정에서의 동의 확인·철회·재동의, 본인 얼굴 등록을 구현했습니다.

![얼굴인식 동의 화면](/assets/img/butbeautiful/06.jpg)

</details>

<details>
<summary>실시간 채팅 고도화 (Sendbird)</summary>

룹 그룹챗 도입과 채팅 UI 리뉴얼, 인용 답장·메시지 수정·삭제·@멘션·반응·클립보드 이미지 첨부를 구현했습니다. 계정 전환 시 로컬 사용자 테이블에 행이 두 개 남아 세션 토큰이 무효화되던 문제를 근본 원인부터 수정하고, 읽음 처리 rate-limit 등 안정성 문제를 정리했습니다.

</details>

<details>
<summary>오프라인 우선 홈 (Stale-While-Revalidate)</summary>

인메모리로만 동작하던 Room DB 를 디스크로 전환하고 홈 섹션 캐시를 추가해, 콜드 스타트에서 스켈레톤 대신 마지막 화면을 바로 보여주고 오프라인에서도 홈 4개 탭이 열리도록 했습니다.

</details>

<details>
<summary>대화면 대응 — 폴더블 · 태블릿 · 멀티윈도우</summary>

폴더블과 태블릿에서 채팅 목록과 대화를 나란히 보는 2-pane 레이아웃을 만들었습니다. 이후 화면마다 직접 그리던 2-pane 을 Navigation 3 의 루트 ListDetailSceneStrategy 로 통일해, 화면은 자기가 pane 안에 있는지 모르게 했습니다. 그 결과 NavDisplay 중첩 4곳 → 2곳, feature 간 의존 8개 제거, 코드 249줄이 줄었습니다.

“기기 종류가 아니라 window metrics 로 분기한다”는 원칙으로 폴더블 펼침·태블릿·멀티윈도우·DeX 대응 표준 문서를 만들었고, 폴더블과 시스템 글꼴 크기에 따라 깨지던 캘린더 UI 도 고쳤습니다.

</details>

<details>
<summary>Compose 피드 스크롤 jank 해결</summary>

Compose 컴파일러 리포트로 stability 설정의 패키지 글롭 패턴 오류를 찾아, 피드 행 전체가 매 프레임 다시 그려지던 문제를 설정 파일 하나로 해결했습니다.

</details>

<details>
<summary>CI/CD 이전과 릴리즈 자동화</summary>

Bitrise 워크플로를 GitHub Actions 로 옮기고, 빌드 번호 증가·태그·릴리즈 노트·Firebase App Distribution·Play internal 배포·Slack 알림을 자동화했습니다. Linear Release 파이프라인을 연동하고 internal 빌드와 정식 태그 파이프라인을 분리했습니다.

</details>

<details>
<summary>관측성 — Sentry 도입</summary>

Android 에 Sentry SDK 를 통합하고, 예상된 네트워크·취소 에러를 리포트에서 제외해 실제 크래시에 집중할 수 있게 정리했습니다.

</details>

#### Contribution

- **리뷰하기 쉬운 PR** : 문제·원인·결정 근거·검증 방법을 PR 본문에 남기고, 큰 리팩터링은 4\~5단계 스택 PR 로 나눠 리뷰 부담을 낮춤
- **리뷰 피드백 반영** : 리뷰에서 나온 지적을 후속 커밋·후속 PR 로 반영해 논의 과정을 기록으로 남김
- **설계를 문서로 공유** : 팀 공용 아키텍처·규약 문서와 PR 템플릿을 작성해 “왜 이 구조인가”를 팀이 같은 기준으로 판단하게 함. 대화면 대응처럼 판단이 필요한 주제는 표준을 먼저 합의한 뒤 구현
- **Android · iOS 협업** : 같은 이슈를 두 플랫폼에서 짝으로 진행하고, 동작 차이는 상대 플랫폼 PR 과 대조해 맞춤
- 커스텀 detekt 룰·ruleset 검증·아키텍처 문서 체계로 코드 규약 자동화
- 릴리즈 매니저 (v1.15 \~ v2.1.9)
- AI 에이전트 기반 개발 워크플로 구축 (에이전트 지침 문서, 격리 worktree 작업 스킬, TDD 게이트)
