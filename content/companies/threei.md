---
title: "(주) 쓰리아이"
role: "Android Engineer"
period: "2024.11 ~ 2025.12"
order: 2
summary: "BLE 기기와 연동된 모션트래킹 Android 와 애플리케이션을 개발하며, 안드로이드 리드로서 아키텍처/미디어 처리/성능 최적화/팀 개발 문화를 이끌었습니다."
cover: "/assets/img/threei/01.jpeg"
---

2024.11 \~ 2025.12

- [Pivo Track - Google Play 앱](https://play.google.com/store/apps/details?id=app.pivo.android.capture)

## Summary

<div class="callout">

BLE 기기와 연동된 모션트래킹 Android 와 애플리케이션을 개발하며, 안드로이드 리드로서 아키텍처/미디어 처리/성능 최적화/팀 개발 문화를 이끌었습니다.

</div>

## Role & Responsibilities

- BLE 트래킹 기기와 연동되는 Android SDK 설계 및 개발
- CameraX + LiteRT 기반 실시가 카메라/ML 파이프라인 구축
- Multi-Module + Clean Architecture 기반의 앱 아키텍처 설계
- SAF, PhotoPicker, MediaStore 등 Android 권한 정책 변화 대응
- Video Recording, Preview Pipeline 최적화 및 GPU/CPU 부담 줄이기
- 팀 리드로서 기술 방향성, 코드 리뷰, 개발 플로우 관리
- 성능 테스트 및 기기별 최적화 전략 확립

## Projects

---

### Horse 모델 변환

#### Problem

- 기존에 가지고 있던 말 추적 모델이 성능상 좋지 않음
- 추적 모델 사용시 큰 발열과 많은 배터리 소모가 발생

#### Solution

- 기존 Third-party 라이브러리 → LiteRT ( First-Party ) 로 변경
- 동기 방식으로 진행되던 트래킹을 비동기 방식으로 변경 후 Multi-Thread 관리
- 독립적인 Interpreter 사용으로 관리가 쉬운 코드로 변경
- C++ 코드와의 연계로, 더욱 빠른 이미지 버퍼 변환 진행

#### Achievement

- 사용자 말 추적 관련 CS 1.7% → 0.6% 로 약 **60% 이상 감소**
- 말 추적 시 CPU 소모량 약 55% → 14% 로 75% 이상 감소. 메모리 약 840MB → 435MB 약 **50% 이상 감소**

#### Tech used

- **Concurrency** : Kotlin Coroutine / Flow
- **Machine Learning Model** : Custom YOLOv11 Model
- **Model Interpreter** : LiteRT
- **Language** : C++

---

### Camera 파이프라인 재설계

#### Problem

- 기존에 OpenGL 형식 기반을 사용하여 굉장히 큰 GPU 용량 소모
- Buffer 관련하여 수많은 변환 공식으로 인한 보일러플레이트 코드 존재
- 각각의 제작사 별 UI 가 사용하는 기본 GPU 사용량으로 인한 특정 기기의 ANR 이슈가 존재.
- 여러개의 화면이 각각의 트래킹 파이프라인을 쓰게 되어, 중첩되는 현상이 발생

#### Solution

- 기존 OpenGL + ImageReader 형식 → CameraX + ImageAnalysis 형식으로 변환
- ImageAnalysis 에서 제공되는 방식에 대한 Coroutine Dispatcher 관리
- Buffer 관리 최적화 ( GC 및 스레드 관리 적용 )
- 하나의 트래킹 파이프라인으로 획일화 및 동일 VM 을 바라보도록 변경

#### Achievement

- 각각의 화면 별로 있던 보일러플레이트 코드 약 **20% 감소**
- 기존 카메라 사용 시 발열용량 약 **75% 이상 감소 ( Pixel 기준 )**
- Pixel 폰에서 발생하던 ANR 이슈 제거

#### Tech Used

- **Camera**: CameraX + Camera2
- **Concurrency**: Kotlin Coroutine / Kotlin Flow

---

### Media 권한 관련 REJECTION 해결

#### Problem

- Android 13 이후부터 생성된 READ_MEDIA_IMAGES 관련 권한으로 인한 애플리케이션의 Play Store  REJECT 발생
- 여러번의 Appeal 을 진행했지만, 지속적으로 Reject 발생으로, 로드맵에서 굉장히 큰 이슈가 발생
- READ_MEDIA 관련 권한을 제외후 사용할 수 있도록 변경이 빠른 시일 내로 필요함
- 그러나, 현재 DCIM 관련 폴더 접근이 제외되어, 현재 저장되어 있던 파일에는 접근이 불가한 상황

#### Solution

- 관련 권한 제외후 디렉토리 한정 접근 권한이 가능하도록 SAF를 사용하여 접근하도록 변경
- 파일 MediaScanner 인덱싱 전략 구축

#### Achievement

- READ_MEDIA 관련 권한 없이 Play Store publish 가능하도록 설정 완료

#### Tech Used

- **File Management**: MediaStore + SAF

---

### Additional Contribution

#### Features

<details>
<summary>Lessons Cloud Recording 기능 개발</summary>

애플리케이션 내 다른 유저와 소통할 수 있는 Voice / Video Call 기능에서, Cloud Recording 기능을 이용하여, 내 클라우드에 녹화된 영상을 볼 수 있는 기능 개발

##### Tech Used

- **UI** : Jetpack Compose
- **Network** : Retrofit2
- **Concurrency** : KotlinX Coroutine + Flow
- **Architecture** :

</details>

<details>
<summary>C++ Bugfixes</summary>

기존 BLE 및 모션 트래킹과 연결된 C++ 기반 버그들로 인해 Crashlytics 안정성 지표가 낮게 책정됨
그로 인한 Bugfixes 진행

##### Achivement

Firebase Crashlytics 안정성 지표 **94% → 98%** 로 상승

</details>

<details>
<summary>SDK Releases</summary>

현재 BLE 기반 Pivo Pod 과 연결하여, 외부에서 사용할 수 있도록 SDK 기능 개발 및 외부 SDK 배포 진행

##### Achievement

- BasicSDK : [https://central.sonatype.com/artifact/app.pivo.android.basicsdk/basicsdk](https://central.sonatype.com/artifact/app.pivo.android.basicsdk/basicsdk)
- ProSDK : [https://central.sonatype.com/artifact/app.pivo.android.basicsdk/prosdk](https://central.sonatype.com/artifact/app.pivo.android.basicsdk/prosdk)

##### Tech Used

- **Library Management** : Sonatype MavenCentral

</details>

#### Contribution

- 안드로이드 리드 ( 코드리뷰 문화 정착, 기술의 방향성 논의 및 개진 )
- 기술 문서화 및 가이드 제작
- 기기별 테스트 / 메모리 프로파일링 전략 수립
