// Static site build: content/ (JSON + markdown) → _site/
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';

const OUT = '_site';
const SITE_URL = 'https://junwooyeom.github.io';

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = (s = '') => marked.parseInline(String(s));

// Minimal YAML front matter: `key: "value"`, `key: 3`, `key: ["a", "b"]`.
function parseDoc(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*?)\s*(#.*)?$/);
    if (!kv) continue;
    let [, key, value] = kv;
    if (value.startsWith('[')) {
      try { meta[key] = JSON.parse(value); } catch { meta[key] = []; }
    } else if (/^-?\d+(\.\d+)?$/.test(value)) {
      meta[key] = Number(value);
    } else {
      meta[key] = value.replace(/^["']|["']$/g, '');
    }
  }
  return { meta, body: m[2] };
}

function loadCollection(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { meta, body } = parseDoc(readFileSync(join(dir, f), 'utf8'));
      // The cover already shows in the page header/card; drop it when it also leads the body.
      let trimmed = meta.cover ? body.replace(new RegExp(`^\\s*!\\[[^\\]]*\\]\\(${meta.cover.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)\\s*`), '') : body;
      // Same for the summary, which the header shows as the lede.
      if (meta.summary && trimmed.trimStart().startsWith(meta.summary)) trimmed = trimmed.trimStart().slice(meta.summary.length);
      return { slug: f.replace(/\.md$/, ''), ...meta, html: marked.parse(trimmed) };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

const profile = JSON.parse(readFileSync('content/profile.json', 'utf8'));
const companies = loadCollection('content/companies');
const activities = loadCollection('content/activities');
const companyBySlug = Object.fromEntries(companies.map((c) => [c.slug, c]));

const themeToggle = `<button class="theme-toggle" type="button" aria-label="테마 전환" data-theme-toggle>
  <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
  <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
</button>`;

function layout({ title, description, body, path = '/' }) {
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE_URL}${path}">
<meta property="og:image" content="${SITE_URL}${profile.photo}">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/assets/css/site.css">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}</script>
</head>
<body>
<header class="topbar">
  <div class="wrap topbar-inner">
    <a class="wordmark" href="/">${esc(profile.nameEn)}</a>
    <nav class="topnav" aria-label="섹션">
      <a href="/#experience">경력</a>
      <a href="/#activities">활동</a>
      <a href="/#skills">스킬</a>
      ${themeToggle}
    </nav>
  </div>
</header>
<main>
${body}
</main>
<footer class="footer">
  <div class="wrap footer-inner">
    <span>© ${new Date().getFullYear()} ${esc(profile.name)}</span>
    <span class="footer-links">${profile.contacts.map((c) => `<a href="${esc(c.href)}">${esc(c.label)}</a>`).join('')}</span>
  </div>
</footer>
<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}

function renderIndex() {
  const contacts = profile.contacts
    .map((c) => `<li><span class="label">${esc(c.label)}</span><a href="${esc(c.href)}">${esc(c.text)}</a></li>`)
    .join('');

  const skills = profile.skills
    .map((g) => `<div class="skill-group"><h3>${esc(g.group)}</h3><ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`)
    .join('');

  const experience = profile.experience
    .map((e) => {
      const hasDetail = Boolean(companyBySlug[e.slug]);
      return `<article class="job">
  <div class="job-meta">
    <img class="logo" src="${esc(e.logo)}" alt="" width="48" height="48" loading="lazy">
    <span class="period">${esc(e.period)}</span>
  </div>
  <div class="job-body">
    <h3>${esc(e.company)} <span class="role">${esc(e.role)}</span></h3>
    <p class="summary">${inline(e.summary)}</p>
    <ul class="highlights">${e.highlights.map((h) => `<li>${inline(h)}</li>`).join('')}</ul>
    ${e.note ? `<p class="note">${esc(e.note)}</p>` : ''}
    ${hasDetail ? `<a class="more" href="/companies/${e.slug}/">프로젝트 자세히 보기 <span aria-hidden="true">→</span></a>` : ''}
  </div>
</article>`;
    })
    .join('');

  const activityCards = activities
    .map((a) => `<a class="card" href="/activities/${a.slug}/">
  <div class="card-cover">${a.cover ? `<img src="${esc(a.cover)}" alt="" loading="lazy">` : `<span class="card-cover-text">${esc(a.title)}</span>`}</div>
  <div class="card-body">
    <h3>${esc(a.title)}</h3>
    ${a.period || a.role ? `<p class="card-meta">${[a.role, a.period].filter(Boolean).map(esc).join(' · ')}</p>` : ''}
    ${a.summary ? `<p class="card-summary">${inline(a.summary)}</p>` : ''}
    ${a.tags?.length ? `<ul class="tags">${a.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
  </div>
</a>`)
    .join('');

  const body = `<section class="hero wrap">
  <div class="hero-text">
    <p class="eyebrow">${esc(profile.role)}</p>
    <h1>${esc(profile.name)}</h1>
    <blockquote class="quote">
      <p>“${esc(profile.quote)}”</p>
      <cite>— ${esc(profile.quoteBy)}</cite>
    </blockquote>
    <p class="intro">${esc(profile.intro)}</p>
    <ul class="contacts">${contacts}</ul>
  </div>
  <img class="portrait" src="${esc(profile.photo)}" alt="${esc(profile.name)} 프로필 사진" width="250" height="313">
</section>

<section class="section wrap" id="skills">
  <h2 class="section-title">스킬</h2>
  <div class="skills">${skills}</div>
</section>

<section class="section wrap" id="experience">
  <h2 class="section-title">경력</h2>
  <div class="jobs">${experience}</div>
</section>

${activities.length ? `<section class="section wrap" id="activities">
  <h2 class="section-title">활동</h2>
  <div class="cards">${activityCards}</div>
</section>` : ''}

<section class="section wrap split" id="education">
  <div>
    <h2 class="section-title">학력</h2>
    ${profile.education.map((e) => `<div class="edu"><h3>${esc(e.school)} <span class="role">${esc(e.major)}</span></h3><p class="period">${esc(e.period)}</p></div>`).join('')}
  </div>
  <div>
    <h2 class="section-title">자격증</h2>
    <ul class="plain">${profile.certificates.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
  </div>
</section>`;

  return layout({
    title: `${profile.name} — ${profile.role}`,
    description: `${profile.name} · ${profile.role} 이력서와 포트폴리오`,
    body,
  });
}

function renderDetail(item, kind, list) {
  const idx = list.findIndex((x) => x.slug === item.slug);
  const prev = list[idx - 1];
  const next = list[idx + 1];
  const base = kind === 'companies' ? '/companies' : '/activities';
  const backHash = kind === 'companies' ? '#experience' : '#activities';
  const exp = profile.experience.find((e) => e.slug === item.slug);
  const meta = [item.role || exp?.role, item.period || exp?.period].filter(Boolean);

  const body = `<article class="detail wrap-narrow">
  <a class="back" href="/${backHash}"><span aria-hidden="true">←</span> 이력서로 돌아가기</a>
  <header class="detail-head">
    ${exp?.logo ? `<img class="logo" src="${esc(exp.logo)}" alt="" width="56" height="56">` : ''}
    <div>
      <h1>${esc(item.title)}</h1>
      ${meta.length ? `<p class="detail-meta">${meta.map(esc).join(' · ')}</p>` : ''}
    </div>
  </header>
  ${item.summary ? `<p class="lede">${inline(item.summary)}</p>` : ''}
  ${item.tags?.length ? `<ul class="tags">${item.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
  <div class="prose">
${item.html}
  </div>
  <nav class="pager" aria-label="이전·다음">
    ${prev ? `<a href="${base}/${prev.slug}/"><span class="label">이전</span>${esc(prev.title)}</a>` : '<span></span>'}
    ${next ? `<a class="next" href="${base}/${next.slug}/"><span class="label">다음</span>${esc(next.title)}</a>` : '<span></span>'}
  </nav>
</article>`;

  return layout({
    title: `${item.title} — ${profile.name}`,
    description: item.summary || `${profile.name} 포트폴리오 · ${item.title}`,
    body,
    path: `${base}/${item.slug}/`,
  });
}

function write(path, html) {
  mkdirSync(join(OUT, path), { recursive: true });
  writeFileSync(join(OUT, path, 'index.html'), html);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('assets', join(OUT, 'assets'), { recursive: true });
writeFileSync(join(OUT, '.nojekyll'), '');
write('', renderIndex());
for (const c of companies) write(`companies/${c.slug}`, renderDetail(c, 'companies', companies));
for (const a of activities) write(`activities/${a.slug}`, renderDetail(a, 'activities', activities));
writeFileSync(join(OUT, '404.html'), layout({
  title: `페이지를 찾을 수 없습니다 — ${profile.name}`,
  description: '404',
  body: `<section class="section wrap-narrow"><h1>페이지를 찾을 수 없습니다</h1><p><a class="more" href="/">이력서로 돌아가기 →</a></p></section>`,
}));

console.log(`built: index + ${companies.length} companies + ${activities.length} activities → ${OUT}/`);
