---
title: "(주) 쓰리아이"
role: "Android Engineer"
period: "2024.11 ~ 2025.12"
order: 2
summary: "BLE 기기와 연동된 모션트래킹 Android SDK 와 애플리케이션을 개발하며, 안드로이드 리드로서 아키텍처/미디어 처리/성능 최적화/팀 개발 문화를 이끌었습니다."
cover: "/assets/img/threei/01.jpeg"
---

2024.11 \~ 2025.12

- [Pivo Track - Google Play 앱](https://play.google.com/store/apps/details?id=app.pivo.android.capture)

## Summary

<div class="callout">

BLE 기기와 연동된 모션트래킹 Android SDK 와 애플리케이션을 개발하며, 안드로이드 리드로서 아키텍처/미디어 처리/성능 최적화/팀 개발 문화를 이끌었습니다.

</div>

## Role & Responsibilities

- BLE 트래킹 기기와 연동되는 Android SDK 설계 및 개발
- CameraX + LiteRT 기반 실시간 카메라/ML 파이프라인 구축
- Multi-Module + Clean Architecture 기반의 앱 아키텍처 설계
- Android 미디어 권한 정책 변화 대응
- 안드로이드 리드로서 기술 방향성, 코드 리뷰, 개발 플로우 관리

## Projects

---

### Horse 모델 변환

#### Problem

- 기존 말 추적 모델의 성능이 좋지 않고, 사용 시 발열과 배터리 소모가 큼

#### Solution

- Third-party 라이브러리 → LiteRT ( First-Party ) 로 변경
- 동기 방식의 트래킹을 비동기 방식으로 바꾸고, C++ 연계로 이미지 버퍼 변환 속도 개선

#### Achievement

- 말 추적 시 메모리 사용량 **50% 이상 감소**, 관련 CS 약 **60% 감소**

#### Tech Used

- **Concurrency** : Kotlin Coroutine / Flow
- **Machine Learning** : Custom YOLOv11 Model, LiteRT
- **Language** : C++

---

### Camera 파이프라인 재설계

#### Problem

- OpenGL 기반 구조로 GPU 소모가 크고, 특정 기기에서 ANR 발생
- 여러 화면이 각자의 트래킹 파이프라인을 써서 중복 처리 발생

#### Solution

- OpenGL + ImageReader → CameraX + ImageAnalysis 구조로 전환
- 트래킹 파이프라인을 하나로 통일하고 버퍼 관리 최적화

#### Achievement

- 카메라 사용 시 발열 약 **75% 이상 감소 ( Pixel 기준 )**, Pixel 기기 ANR 제거

#### Tech Used

- **Camera** : CameraX + Camera2
- **Concurrency** : Kotlin Coroutine / Kotlin Flow

---

### Media 권한 관련 REJECTION 해결

#### Problem

- Android 13 의 READ_MEDIA 권한 정책으로 Play Store 심사에서 반복 Reject
- 권한을 빼면 기존에 저장된 파일에 접근할 수 없음

#### Solution

- READ_MEDIA 권한을 제외하고, SAF 로 디렉토리 한정 접근하도록 변경

#### Achievement

- READ_MEDIA 권한 없이 Play Store 배포 가능

#### Tech Used

- **File Management** : MediaStore + SAF

---

### Additional Contribution

<details>
<summary>그 밖의 기능 개발</summary>

- 영상 통화 Cloud Recording 기능 개발 (Jetpack Compose)
- BLE · 모션 트래킹 관련 C++ 버그 수정 → Crashlytics 안정성 **94% → 98%**
- Pivo Pod 연동 SDK 개발 및 MavenCentral 배포 ( [BasicSDK](https://central.sonatype.com/artifact/app.pivo.android.basicsdk/basicsdk) · [ProSDK](https://central.sonatype.com/artifact/app.pivo.android.basicsdk/prosdk) )

</details>

<details>
<summary>팀 리드 · 협업</summary>

- 코드 리뷰 문화 정착, 기술 방향성 논의 및 개진
- 기술 문서화 및 가이드 제작
- 기기별 테스트 · 메모리 프로파일링 전략 수립

</details>
