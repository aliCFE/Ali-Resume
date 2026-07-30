/* ═══════════════════════════════════════════════════════════════
   app.js — rendering, i18n/RTL, theme and interactions.
   Content comes from data.js (CV + UI). No dependencies.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  let lang = localStorage.getItem('am-lang') || 'en';
  let theme = localStorage.getItem('am-theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  /* ─────────── icons ─────────── */
  const ICONS = {
    mail:     '<path d="M3.8 6.6h16.4v10.8H3.8z"/><path d="m4.4 7.2 7.6 5.6 7.6-5.6"/>',
    phone:    '<path d="M8.4 3.6H5.2A1.6 1.6 0 0 0 3.6 5.4c0 8.3 6.7 15 15 15a1.6 1.6 0 0 0 1.8-1.6v-3.2l-4.3-1.4-2 2a13 13 0 0 1-5.7-5.7l2-2z"/>',
    linkedin: '<path d="M5.4 9.4v9.2M5.4 5.6v.1M10.2 18.6V9.4M10.2 13.4c0-2.2 1.4-3.6 3.4-3.6s3.4 1.3 3.4 3.8v5"/>',
    pin:      '<path d="M12 21s6.6-5.6 6.6-10.4A6.6 6.6 0 0 0 5.4 10.6C5.4 15.4 12 21 12 21z"/><circle cx="12" cy="10.4" r="2.4"/>',
    cap:      '<path d="m2.8 8.6 9.2-4.2 9.2 4.2-9.2 4.2z"/><path d="M6.4 10.6v4.6c0 1.6 2.6 3 5.6 3s5.6-1.4 5.6-3v-4.6M20.6 9v5.4"/>',
    trophy:   '<path d="M7.4 4.4h9.2v5a4.6 4.6 0 1 1-9.2 0z"/><path d="M7.4 6.2H4.8v1.4a3 3 0 0 0 2.6 3M16.6 6.2h2.6v1.4a3 3 0 0 1-2.6 3M9.6 19.6h4.8M12 14v5.6"/>',
    clock:    '<circle cx="12" cy="12" r="8.4"/><path d="M12 7.4V12l3 1.8"/>',
    users:    '<circle cx="9.4" cy="8.6" r="3.2"/><path d="M3.8 19.4c0-3.1 2.5-5.4 5.6-5.4s5.6 2.3 5.6 5.4"/><path d="M16.2 6.2a3 3 0 0 1 0 5.8M17.4 14.4c1.8.7 2.9 2.3 2.9 4.4"/>',
    terminal: '<rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2.2"/><path d="m7.6 9.4 2.6 2.6-2.6 2.6M13 15.2h3.6"/>',
    award:    '<circle cx="12" cy="9.2" r="5.2"/><path d="m8.6 13.6-1.2 6.8L12 18l4.6 2.4-1.2-6.8"/>',
    rocket:   '<path d="M12.4 3.6c3.6 1.4 6 5.2 6 9.4l-3 3-4.2-4.2-4.2-4.2 3-3c.8 0 1.6-.4 2.4-1z"/><path d="M9 15c-1.6 1.6-1.4 4-1.4 4s2.4.2 4-1.4M6.6 11.4 4.2 12l1.8 1.8M12.6 17.4l.6 2.4 1.8-1.8"/>',
    code:     '<path d="m8.4 8.6-4 3.4 4 3.4M15.6 8.6l4 3.4-4 3.4M13.6 5.4l-3.2 13.2"/>',
    chart:    '<path d="M4.2 19.4h15.6M7.4 16V10M11.8 16V5.8M16.2 16v-7.4"/>',
    layers:   '<path d="m12 3.6 8.4 4.2-8.4 4.2-8.4-4.2z"/><path d="m3.6 12.4 8.4 4.2 8.4-4.2M3.6 16.6l8.4 4.2 8.4-4.2"/>',
    gamepad:  '<path d="M7.4 8.4h9.2a4.6 4.6 0 0 1 4.4 5.8l-.6 2.4a2.4 2.4 0 0 1-4.2.9l-1.6-2H9.4l-1.6 2a2.4 2.4 0 0 1-4.2-.9l-.6-2.4a4.6 4.6 0 0 1 4.4-5.8z"/><path d="M7.6 11.6v2.2M6.5 12.7h2.2M15.4 12h.1M17.4 13.8h.1"/>',
    server:   '<rect x="3.4" y="4.4" width="17.2" height="6" rx="1.8"/><rect x="3.4" y="13.6" width="17.2" height="6" rx="1.8"/><path d="M7 7.4h.1M7 16.6h.1"/>',
    star:     '<path d="m12 4 2.5 5.2 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z"/>',
    heart:    '<path d="M12 20s-7.4-4.6-7.4-9.6a4.2 4.2 0 0 1 7.4-2.7 4.2 4.2 0 0 1 7.4 2.7c0 5-7.4 9.6-7.4 9.6z"/>',
    eye:      '<path d="M2.6 12S6.2 5.8 12 5.8 21.4 12 21.4 12 17.8 18.2 12 18.2 2.6 12 2.6 12z"/><circle cx="12" cy="12" r="3"/>',
    wallet:   '<path d="M3.6 7.4a2 2 0 0 1 2-2h11.8a1.6 1.6 0 0 1 1.6 1.6v1.4"/><rect x="3.6" y="7.4" width="16.8" height="11.2" rx="2"/><path d="M16.4 13h.1"/>',
    brain:    '<path d="M9.4 4.6a2.8 2.8 0 0 0-2.8 2.8 2.6 2.6 0 0 0-1.8 4.4 2.8 2.8 0 0 0 1.4 4.8 2.8 2.8 0 0 0 5.2 1.4V6.4a2.8 2.8 0 0 0-2-1.8z"/><path d="M14.6 4.6a2.8 2.8 0 0 1 2.8 2.8 2.6 2.6 0 0 1 1.8 4.4 2.8 2.8 0 0 1-1.4 4.8 2.8 2.8 0 0 1-5.2 1.4"/>',
    image:    '<rect x="3.6" y="4.8" width="16.8" height="14.4" rx="2.2"/><circle cx="8.8" cy="9.6" r="1.6"/><path d="m4.4 17 4.8-4.6 3.4 3.2 3-2.6 4 3.8"/>',
    car:      '<path d="M4.6 16.4v2.2h2.8v-2.2M16.6 16.4v2.2h2.8v-2.2"/><path d="M3.6 16.4h16.8v-3.6l-1.6-4.2a2 2 0 0 0-1.9-1.4H7.1a2 2 0 0 0-1.9 1.4l-1.6 4.2z"/><path d="M7 13.4h.1M17 13.4h.1"/>',
    cart:     '<circle cx="9.6" cy="19" r="1.3"/><circle cx="17.4" cy="19" r="1.3"/><path d="M3.4 4.6h2.4l2.4 10.4h10l2-7.2H7"/>',
    book:     '<path d="M4.6 5.2a1.6 1.6 0 0 1 1.6-1.6H18a1.4 1.4 0 0 1 1.4 1.4v13.6H6.2a1.6 1.6 0 0 1-1.6-1.6z"/><path d="M4.6 17a1.6 1.6 0 0 1 1.6-1.6h13.2"/>',
    external: '<path d="M14 4.6h5.4V10M19.4 4.6 11.6 12.4"/><path d="M18.2 14v4.2a1.6 1.6 0 0 1-1.6 1.6H5.8a1.6 1.6 0 0 1-1.6-1.6V7.4a1.6 1.6 0 0 1 1.6-1.6H10"/>',
    copy:     '<rect x="8.6" y="8.6" width="11" height="11" rx="2"/><path d="M15.4 8.6V6.4a2 2 0 0 0-2-2H6.4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2.2"/>',
    arrow:    '<path d="M5 12h13m0 0-5-5m5 5-5 5"/>',
    check:    '<path d="m5 12.6 4.6 4.6L19 7.8"/>',
    calendar: '<rect x="3.8" y="5.4" width="16.4" height="14" rx="2"/><path d="M8.4 3.4v4M15.6 3.4v4M3.8 10.2h16.4"/>',
    building: '<path d="M4.6 20.4V5.6a1.4 1.4 0 0 1 1.4-1.4h7a1.4 1.4 0 0 1 1.4 1.4v14.8"/><path d="M14.4 20.4V10h4a1.4 1.4 0 0 1 1.4 1.4v9M8 8h2.4M8 12h2.4M8 16h2.4"/>'
  };

  const icon = (name, cls) =>
    `<svg class="ico${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.star}</svg>`;

  /* ─────────── i18n helpers ─────────── */
  const L = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.en ?? '') : (v ?? ''));
  const t = (key) => (UI[lang] && UI[lang][key]) || UI.en[key] || '';
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (n) => n.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');

  /* ─────────── renderers ─────────── */
  function renderSocials() {
    const link = (s, magnetic) =>
      `<a href="${esc(s.href)}" aria-label="${esc(L(s.label))}" title="${esc(L(s.label))}"${
        s.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''
      }${magnetic ? ' data-magnetic' : ''}>${icon(s.icon)}</a>`;

    const listed = (magnetic) => CV.socials.map((s) => `<li>${link(s, magnetic)}</li>`).join('');

    $('#heroSocial').innerHTML = listed(true);
    $('#contactSocial').innerHTML = listed(true);
    $('#footerSocial').innerHTML = listed(false);
    $('#drawerSocial').innerHTML = CV.socials.map((s) => link(s, false)).join('');
  }

  function renderHero() {
    $('#heroName').textContent = L(CV.profile.name);
    $('#heroMeta').innerHTML = CV.heroMeta.map((m) =>
      `<span>${icon(m.icon)}${esc(L(m.text))}</span>`).join('');
  }

  function renderStats() {
    $('#statsGrid').innerHTML = CV.stats.map((s, i) => `
      <div class="stat reveal" data-reveal data-delay="${i}">
        <div class="stat__ico">${icon(s.icon)}</div>
        <div class="stat__num" data-count="${s.value}" data-suffix="${esc(s.suffix)}">0</div>
        <div class="stat__label">${esc(L(s.label))}</div>
      </div>`).join('');
  }

  function renderAbout() {
    $('#aboutTags').innerHTML = CV.aboutTags[lang].map((tg) => `<span class="chip">${esc(tg)}</span>`).join('');
    $('#aboutCards').innerHTML = CV.aboutCards.map((c, i) => `
      <article class="card about-card reveal" data-reveal data-delay="${i}">
        <div class="about-card__ico">${icon(c.icon)}</div>
        <div>
          <h3>${esc(L(c.title))}</h3>
          <p>${esc(L(c.text))}</p>
        </div>
      </article>`).join('');
  }

  function renderTimeline() {
    const spine = '<i class="timeline__spine"><b id="timelineFill"></b></i>';
    $('#timeline').innerHTML = spine + CV.experience.map((job, i) => {
      const badges = [];
      if (job.featured)   badges.push(`<span class="tl__badge tl__badge--feat">${esc(t('exp.featured'))}</span>`);
      if (job.current)    badges.push(`<span class="tl__badge tl__badge--live">${icon('star')}${esc(t('ui.current'))}</span>`);
      if (job.concurrent) badges.push(`<span class="tl__badge tl__badge--conc">${esc(t('ui.concurrent'))}</span>`);

      return `
      <article class="tl reveal${job.current ? ' tl--current' : ''}${job.featured ? ' tl--featured' : ''}"
               data-reveal data-delay="${Math.min(i, 4)}">
        <div class="tl__card">
          <div class="tl__top">
            <h3 class="tl__role">${esc(L(job.role))}</h3>
            <span class="tl__at">·</span>
            <span class="tl__co">${esc(L(job.company))}</span>
            <span class="tl__period">${esc(L(job.period))}</span>
          </div>
          ${badges.length ? `<div class="tl__badges">${badges.join('')}</div>` : ''}
          <ul class="tl__list">
            ${job.bullets.map((b) => `<li${b.award ? ' class="is-award"' : ''}>${esc(L(b))}</li>`).join('')}
          </ul>
          <div class="tl__tags">${job.tags.map((tg) => `<span class="tag">${esc(tg)}</span>`).join('')}</div>
        </div>
      </article>`;
    }).join('');
  }

  function renderProjects() {
    $('#projectFilters').innerHTML = CV.projectFilters.map((f, i) =>
      `<button type="button" class="filter${i === 0 ? ' is-active' : ''}" data-filter="${esc(f.id)}">${esc(L(f.label))}</button>`
    ).join('');

    $('#projectsGrid').innerHTML = CV.projects.map((p, i) => `
      <article class="proj reveal${p.featured ? ' proj--featured' : ''}" data-reveal data-delay="${Math.min(i, 5)}"
               data-cats="${esc(p.cats.join(' '))}" data-accent="${esc(p.accent)}" data-project="${esc(p.id)}"
               tabindex="0" role="button" aria-label="${esc(p.name)} — ${esc(t('ui.details'))}">
        ${p.featured ? `<span class="proj__flag">Nova</span>` : ''}
        <div class="proj__head">
          <div class="proj__ico">${icon(p.icon)}</div>
          <div>
            <h3 class="proj__name">${esc(p.name)}</h3>
            ${p.arName ? `<div class="proj__alt">${esc(L(p.arName))}</div>` : ''}
            <div class="proj__tagline">${esc(L(p.tagline))}</div>
          </div>
        </div>
        <p class="proj__body">${esc(L(p.bullets[0]))}</p>
        <div class="proj__tech">${p.tech.slice(0, 4).map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
        <div class="proj__foot">
          <span class="proj__more">${esc(t('ui.details'))}${icon('arrow', 'ico--arrow')}</span>
          ${p.link ? `<a class="proj__link" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer"
             onclick="event.stopPropagation()">${icon('external')}${esc(t('ui.visit'))}</a>` : ''}
        </div>
      </article>`).join('');
  }

  function renderSkills() {
    $('#skillsGrid').innerHTML = CV.skills.map((g, i) => `
      <article class="card skill-group reveal" data-reveal data-delay="${i}">
        <div class="skill-group__head">
          <div class="skill-group__ico">${icon(g.icon)}</div>
          <h3>${esc(L(g.title))}</h3>
        </div>
        <div class="skill-group__chips">
          ${g.items.map((it, j) => `<span class="chip" style="--i:${j}">${esc(L(it))}</span>`).join('')}
        </div>
      </article>`).join('');
  }

  function renderEducation() {
    $('#eduCol').innerHTML =
      `<div class="edu__label reveal" data-reveal>${esc(t('edu.degreeTitle'))}</div>` +
      CV.education.map((e) => `
        <article class="card degree reveal" data-reveal>
          <div class="degree__ico">${icon('cap')}</div>
          <h3 class="degree__title">${esc(L(e.degree))}</h3>
          <div class="degree__school">${esc(L(e.school))}</div>
          <div class="degree__meta">
            <span>${icon('pin')}${esc(L(e.place))}</span>
            <span>${icon('calendar')}${esc(L(e.date))}</span>
          </div>
        </article>`).join('');

    $('#certCol').innerHTML =
      `<div class="edu__label reveal" data-reveal>${esc(t('edu.certTitle'))}</div>` +
      CV.certifications.map((c, i) => `
        <article class="card cert reveal" data-reveal data-delay="${i}">
          <div class="cert__ico">${icon('award')}</div>
          <div>
            <div class="cert__name">${esc(L(c.name))}</div>
            <div class="cert__meta">${esc(L(c.issuer))} · ${esc(L(c.date))}</div>
          </div>
        </article>`).join('');
  }

  function renderAchievements() {
    $('#achList').innerHTML = CV.achievements.map((a, i) => `
      <article class="card ach-card reveal" data-reveal data-delay="${Math.min(i, 4)}">
        <div class="ach-card__ico">${icon(a.icon)}</div>
        <h3>${esc(L(a.title))}</h3>
        <p>${esc(L(a.text))}</p>
      </article>`).join('');

    $('#langList').innerHTML = CV.languages.map((lg) => `
      <div class="lang-row">
        <span class="lang-row__code">${esc(lg.code)}</span>
        <span class="lang-row__name">${esc(L(lg.name))}</span>
        <span class="lang-row__level">${esc(L(lg.level))}</span>
      </div>`).join('');
  }

  function renderContact() {
    $('#contactCards').innerHTML = CV.contactCards.map((c) => {
      const val = esc(L(c.value));
      const inner = `
        <div class="ct-card__ico">${icon(c.icon)}</div>
        <div>
          <div class="ct-card__label">${esc(L(c.label))}</div>
          <div class="ct-card__value">${val}</div>
        </div>
        ${c.copy ? `<button type="button" class="ct-card__copy" data-copy="${esc(c.copyValue || L(c.value))}"
            aria-label="${esc(t('ui.copy'))}" title="${esc(t('ui.copy'))}">${icon('copy')}</button>` : '<span></span>'}`;
      return c.href
        ? `<div class="ct-card"><a href="${esc(c.href)}" style="display:contents"${
            c.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a></div>`
        : `<div class="ct-card">${inner}</div>`;
    }).join('');

    $('#formNote').textContent = t('contact.formHint');
    $('#formNote').className = 'form-note';
  }

  function renderFooter() {
    $('#footerCopy').textContent = `© ${new Date().getFullYear()} ${L(CV.profile.name)} · ${t('footer.rights')}`;
  }

  function applyI18n() {
    $$('[data-i18n]').forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });
    $('#langLabel').textContent = lang === 'en' ? 'ع' : 'EN';
    $('#langToggle').setAttribute('aria-label', t('ui.langSwitch'));
    $('#langToggle').dataset.tip = t('ui.langSwitch');
    $('#themeToggle').setAttribute('aria-label', theme === 'dark' ? t('ui.themeLight') : t('ui.themeDark'));
    $('.nav__cta').setAttribute('href', CV.profile.resume);
  }

  function renderAll() {
    applyI18n();
    renderSocials();
    renderHero();
    renderStats();
    renderAbout();
    renderTimeline();
    renderProjects();
    renderSkills();
    renderEducation();
    renderAchievements();
    renderContact();
    renderFooter();
    observeReveals();
    startTyping();
    activeFilter = 'all';
  }

  /* ─────────── language & theme ─────────── */
  function setLang(next) {
    lang = next;
    localStorage.setItem('am-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    renderAll();
    requestAnimationFrame(moveNavPill);
  }

  function setTheme(next) {
    theme = next;
    localStorage.setItem('am-theme', theme);
    document.documentElement.dataset.theme = theme;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#06060c' : '#f5f6fb';
    $('#themeToggle').setAttribute('aria-label', theme === 'dark' ? t('ui.themeLight') : t('ui.themeDark'));
  }

  /* ─────────── reveal on scroll ─────────── */
  let revealObserver = null;
  function observeReveals() {
    if (REDUCED) {
      $$('[data-reveal]').forEach((el) => el.classList.add('is-in'));
      $$('[data-count]').forEach((el) => { el.textContent = num(+el.dataset.count) + (el.dataset.suffix || ''); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.style.transitionDelay = (parseInt(el.dataset.delay || 0, 10) * 90) + 'ms';
          el.classList.add('is-in');
          $$('[data-count]', el).concat(el.hasAttribute('data-count') ? [el] : []).forEach(countUp);
          revealObserver.unobserve(el);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
    }
    $$('[data-reveal]').forEach((el) => {
      if (!el.classList.contains('is-in')) revealObserver.observe(el);
    });
  }

  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1500;
    const t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = num(Math.round(target * eased)) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ─────────── typing effect ─────────── */
  let typeTimer = null;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $('#typed');
    const roles = CV.profile.roles[lang];
    if (REDUCED) { el.textContent = roles[0]; return; }

    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const word = roles[ri];
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let wait = deleting ? 45 : 85;
      if (!deleting && ci === word.length) { wait = 1700; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; wait = 320; }
      typeTimer = setTimeout(tick, wait);
    })();
  }

  /* ─────────── nav, scrollspy, progress ─────────── */
  const nav = $('#nav');
  const sections = () => $$('main section[id]');

  function moveNavPill() {
    const active = $('.nav__link.is-active');
    const pill = $('#navPill');
    if (!active || !pill) return;
    pill.style.left = active.offsetLeft + 'px';
    pill.style.width = active.offsetWidth + 'px';
    pill.classList.add('is-on');
  }

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('is-stuck', y > 20);
    $('#toTop').classList.toggle('is-on', y > 600);

    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    $('#scrollProgress').style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

    const line = y + window.innerHeight * 0.35;
    let current = 'home';
    sections().forEach((s) => { if (s.offsetTop <= line) current = s.id; });

    $$('.nav__link').forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + current));
    $$('.drawer__nav a').forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + current));
    moveNavPill();

    const tl = $('#timeline');
    const fill = $('#timelineFill');
    if (tl && fill) {
      const rect = tl.getBoundingClientRect();
      const p = (window.innerHeight * 0.55 - rect.top) / rect.height;
      fill.style.height = Math.max(0, Math.min(1, p)) * 100 + '%';
    }
  }

  /* ─────────── drawer ─────────── */
  function toggleDrawer(open) {
    $('#drawer').classList.toggle('is-open', open);
    $('#drawerVeil').classList.toggle('is-on', open);
    $('#burger').classList.toggle('is-open', open);
    $('#burger').setAttribute('aria-expanded', String(open));
    $('#drawer').setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('is-locked', open);
  }

  /* ─────────── project filters + modal ─────────── */
  let activeFilter = 'all';

  function applyFilter(id) {
    activeFilter = id;
    $$('.filter').forEach((b) => b.classList.toggle('is-active', b.dataset.filter === id));
    $$('.proj').forEach((card) => {
      const show = id === 'all' || card.dataset.cats.split(' ').includes(id);
      card.classList.toggle('is-hidden', !show);
      card.classList.remove('is-shown');
      if (show) { void card.offsetWidth; card.classList.add('is-shown'); }
    });
  }

  let lastFocused = null;

  function openModal(id) {
    const p = CV.projects.find((x) => x.id === id);
    if (!p) return;
    lastFocused = document.activeElement;

    $('#modalBody').innerHTML = `
      <div class="modal__head" data-accent="${esc(p.accent)}">
        <div class="modal__ico">${icon(p.icon)}</div>
        <div>
          <h3 class="modal__title">${esc(p.name)}</h3>
          <div class="modal__tagline">${esc(L(p.tagline))}</div>
        </div>
      </div>
      <div class="modal__sub">${esc(t('ui.highlights'))}</div>
      <ul class="modal__list">${p.bullets.map((b) => `<li>${esc(L(b))}</li>`).join('')}</ul>
      <div class="modal__sub">${esc(t('ui.tech'))}</div>
      <div class="modal__tech">${p.tech.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
      ${p.link ? `<div class="modal__cta"><a class="btn btn--primary" href="${esc(p.link)}"
          target="_blank" rel="noopener noreferrer">${esc(t('ui.visit'))}${icon('external')}</a></div>` : ''}`;

    const panel = $('.modal__panel');
    panel.dataset.accent = p.accent;
    panel.style.setProperty('--pa', getComputedStyle($(`[data-project="${p.id}"]`)).getPropertyValue('--pa'));

    $('#modal').classList.add('is-open');
    $('#modal').setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    $('.modal__x').focus();
  }

  function closeModal() {
    $('#modal').classList.remove('is-open');
    $('#modal').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocused) lastFocused.focus();
  }

  /* ─────────── toast + clipboard ─────────── */
  let toastTimer = null;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-on'), 2600);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast(t('ui.copied'));
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      toast(ok ? t('ui.copied') : t('ui.copyFail'));
    }
  }

  /* ─────────── contact form → mailto ─────────── */
  function handleSubmit(e) {
    e.preventDefault();
    const name = $('#fName').value.trim();
    const mail = $('#fMail').value.trim();
    const subj = $('#fSubj').value.trim();
    const msg = $('#fMsg').value.trim();
    const note = $('#formNote');

    $$('.field').forEach((f) => f.classList.remove('is-bad'));

    if (!name || !mail || !msg) {
      note.textContent = t('ui.formIncomplete');
      note.className = 'form-note is-bad';
      [[name, '#fName'], [mail, '#fMail'], [msg, '#fMsg']].forEach(([v, sel]) => {
        if (!v) $(sel).closest('.field').classList.add('is-bad');
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      note.textContent = t('ui.formBadEmail');
      note.className = 'form-note is-bad';
      $('#fMail').closest('.field').classList.add('is-bad');
      return;
    }

    const subject = subj || `Portfolio message from ${name}`;
    const body = `${msg}\n\n—\n${name}\n${mail}`;
    window.location.href =
      `mailto:${CV.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    note.textContent = t('ui.formOpening');
    note.className = 'form-note is-ok';
  }

  /* ─────────── cursor + magnetic + tilt ─────────── */
  function initCursor() {
    if (!FINE_POINTER || REDUCED) return;
    const dot = $('#cursorDot');
    const ring = $('#cursorRing');
    let rx = 0, ry = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', (e) => {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
      document.body.classList.add('cursor-ready');
    });

    (function loop() {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      ring.style.transform = `translate(${rx - 17}px, ${ry - 17}px)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', (e) => {
      const hot = e.target.closest('a, button, .proj, [data-magnetic], input, textarea');
      document.body.classList.toggle('cursor-hot', !!hot);
    });
  }

  function initMagnetic() {
    if (!FINE_POINTER || REDUCED) return;
    document.addEventListener('mousemove', (e) => {
      const el = e.target.closest('[data-magnetic]');
      $$('[data-magnetic]').forEach((m) => {
        if (m !== el) m.style.transform = '';
      });
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  }

  function initTilt() {
    if (!FINE_POINTER || REDUCED) return;
    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.proj');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
    });
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest('.proj');
      if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
    });
  }

  /* ─────────── particle canvas ─────────── */
  function initParticles() {
    if (REDUCED) return;
    const cvs = $('#particles');
    const ctx = cvs.getContext('2d');
    let w = 0, h = 0, dots = [], raf = null;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = cvs.clientWidth; h = cvs.clientHeight;
      cvs.width = w * DPR; cvs.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(Math.round((w * h) / 22000), 90);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.7
      }));
    }

    function frame() {
      const rgb = getComputedStyle(document.documentElement).getPropertyValue('--particle').trim();
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, .55)`;
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dist = Math.hypot(d.x - o.x, d.y - o.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(${rgb}, ${0.16 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) frame();
    });
  }

  /* ─────────── parallax orbs ─────────── */
  function initParallax() {
    if (REDUCED) return;
    const orbs = $$('.backdrop__orb');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      orbs.forEach((o, i) => { o.style.transform = `translateY(${y * (0.04 + i * 0.03)}px)`; });
    }, { passive: true });
  }

  /* ─────────── preloader ─────────── */
  function initPreloader() {
    const bar = $('#preloaderBar');
    const pct = $('#preloaderPct');
    let p = 0;
    const timer = setInterval(() => {
      p = Math.min(p + Math.random() * 18, 96);
      bar.style.width = p + '%';
      pct.textContent = Math.round(p);
    }, 130);

    function finish() {
      clearInterval(timer);
      bar.style.width = '100%';
      pct.textContent = '100';
      setTimeout(() => {
        $('#preloader').classList.add('is-done');
        onScroll();
        observeReveals();
      }, 320);
    }
    if (document.readyState === 'complete') setTimeout(finish, 500);
    else window.addEventListener('load', () => setTimeout(finish, 380));
  }

  /* ─────────── wiring ─────────── */
  function init() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    setTheme(theme);
    renderAll();

    $('#themeToggle').addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
    $('#langToggle').addEventListener('click', () => setLang(lang === 'en' ? 'ar' : 'en'));

    $('#burger').addEventListener('click', () => toggleDrawer(!$('#drawer').classList.contains('is-open')));
    $('#drawerVeil').addEventListener('click', () => toggleDrawer(false));
    $$('.drawer__nav a').forEach((a) => a.addEventListener('click', () => toggleDrawer(false)));

    $('#projectFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter');
      if (btn) applyFilter(btn.dataset.filter);
    });

    $('#projectsGrid').addEventListener('click', (e) => {
      if (e.target.closest('.proj__link')) return;
      const card = e.target.closest('.proj');
      if (card) openModal(card.dataset.project);
    });
    $('#projectsGrid').addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.proj');
      if (card) { e.preventDefault(); openModal(card.dataset.project); }
    });

    $('#modal').addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if ($('#modal').classList.contains('is-open')) closeModal();
        if ($('#drawer').classList.contains('is-open')) toggleDrawer(false);
      }
    });

    $('#contactCards').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-copy]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      copyText(btn.dataset.copy);
    });

    $('#contactForm').addEventListener('submit', handleSubmit);
    $('#toTop').addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }));

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { onScroll(); moveNavPill(); });

    initCursor();
    initMagnetic();
    initTilt();
    initParticles();
    initParallax();
    initPreloader();
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
