# junwooYeom.github.io

염준우의 이력서·포트폴리오 사이트입니다. https://junwooyeom.github.io

## 구조

- `content/profile.json`: 메인 이력서(연락처, 스킬, 경력 요약, 학력, 자격증)
- `content/companies/*.md`, `content/activities/*.md`: 회사·활동 상세 페이지. 앞머리(front matter)의 `order`로 순서를 정합니다.
- `assets/`: 스타일, 스크립트, 이미지
- `build.mjs`: `content/`를 읽어 `_site/`에 정적 HTML을 만듭니다.

디자인 토큰은 DesignMD의 `cursor` 디자인 시스템을 따릅니다.

## 로컬에서 보기

```bash
npm install
npm run serve
```

`main`에 push하면 GitHub Actions가 빌드해 GitHub Pages로 배포합니다.
