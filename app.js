'use strict';

(() => {
  const I18N = {
    ru: {
      brand_sub: 'Хоккейное агентство и Академия',
      nav_agency: 'Агентство',
      nav_academy: 'Академия',
      nav_leagues: 'Лиги',
      nav_team: 'Команда',
      nav_wp: 'Архитектура WP',
      cta_apply: 'Подать заявку',
      hero_title: 'Европейское хоккейное агентство и Академия в Братиславе',
      hero_lead: 'Объединенная платформа europa-stars.eu и academy.europa-stars.eu: трудоустройство в лиги США и Европы, ВНЖ Словакии, американский диплом UNHS и онлайн-платформа Boost Hockey',
      cta_submit_profile: 'Отправить профиль игрока',
      cta_explore: 'Изучить лиги',
      tab_agency: 'Агентство (europa-stars.eu)',
      tab_academy: 'Академия (academy.europa-stars.eu)',
      leagues_title: 'Лиги и направления трудоустройства',
      leagues_sub: 'Прямые контакты с клубами в 6 странах: США, Словакия, Чехия, Швеция, Финляндия и Швейцария',
      age_label: 'Возраст:',
      academy_title: 'Словацкая академия Europa Stars',
      academy_sub: 'Клубная практика в Братиславе, обучение по программе University of Nebraska High School и дистанционная подготовка Boost Hockey',
      team_title: 'Руководство и скаутинг',
      modal_title: 'Заявка игрока в Europa Stars',
      apply_now: 'Подать заявку',
      apply_league: 'Откликнуться в лигу',
      apply_academy: 'Поступить в Академию',
      apply_boost: 'Подключить Boost Hockey',
      region_labels: {
        usa: 'США',
        sk: 'Словакия',
        cz: 'Чехия',
        nordic: 'Скандинавия и Альпы'
      },
      age_labels: {
        u16: 'U16',
        u18: 'U18',
        u20: 'U20',
        college: 'NCAA / College',
        sr: 'Pro / Senior'
      },
      err_name: 'Укажите имя и фамилию игрока (минимум 2 символа)',
      err_year: 'Укажите корректный год рождения (от 1990 до 2018)',
      err_contact: 'Укажите телефон, Telegram или Email для связи (минимум 5 символов)',
      success_prefix: 'Заявка принята для игрока'
    },
    en: {
      brand_sub: 'Hockey Agency and Academy',
      nav_agency: 'Agency',
      nav_academy: 'Academy',
      nav_leagues: 'Leagues',
      nav_team: 'Team',
      nav_wp: 'WP Architecture',
      cta_apply: 'Apply now',
      hero_title: 'European Hockey Agency and Bratislava Academy',
      hero_lead: 'Unified platform for europa-stars.eu and academy.europa-stars.eu: placement in US and European leagues, Slovak residence permit, US high school diploma and Boost Hockey online',
      cta_submit_profile: 'Submit player profile',
      cta_explore: 'Explore leagues',
      tab_agency: 'Agency (europa-stars.eu)',
      tab_academy: 'Academy (academy.europa-stars.eu)',
      leagues_title: 'Leagues and placement pathways',
      leagues_sub: 'Direct club network across 6 countries: USA, Slovakia, Czechia, Sweden, Finland and Switzerland',
      age_label: 'Age group:',
      academy_title: 'Europa Stars Slovak Academy',
      academy_sub: 'Club practice in Bratislava, University of Nebraska High School diploma and Boost Hockey remote training',
      team_title: 'Management and scouting',
      modal_title: 'Player application to Europa Stars',
      apply_now: 'Apply now',
      apply_league: 'Apply for this league',
      apply_academy: 'Apply to Academy',
      apply_boost: 'Join Boost Hockey',
      region_labels: {
        usa: 'USA',
        sk: 'Slovakia',
        cz: 'Czechia',
        nordic: 'Nordics & Alps'
      },
      age_labels: {
        u16: 'U16',
        u18: 'U18',
        u20: 'U20',
        college: 'NCAA / College',
        sr: 'Pro / Senior'
      },
      err_name: 'Enter player full name (at least 2 characters)',
      err_year: 'Enter a valid birth year between 1990 and 2018',
      err_contact: 'Enter phone, Telegram or Email (at least 5 characters)',
      success_prefix: 'Application received for'
    }
  };

  const TRACK_DATA = {
    agency: {
      ru: {
        badge: 'europa-stars.eu',
        title: 'Международное хоккейное агентство',
        subtitle: 'Трудоустройство игроков U16-SR в 6 странах',
        facts: [
          'Трудоустройство U16-SR в 6 странах: США, Словакия, Чехия, Швеция, Финляндия, Швейцария',
          'Юридическая проверка и сопровождение контрактов, оформление ВНЖ Словакии и Чехии',
          'Прямые выходы на скаутов и клубы USHL, NAHL, NCDC и NCAA Division I'
        ],
        metrics: [
          { label: 'Стран присутствия', value: '6' },
          { label: 'Опыт в Европе', value: '2011' },
          { label: 'Лиг в базе', value: '9' }
        ],
        cta: 'Подать заявку в агентство'
      },
      en: {
        badge: 'europa-stars.eu',
        title: 'International Hockey Agency',
        subtitle: 'Player placement U16-SR across 6 countries',
        facts: [
          'Placement for U16-SR players across 6 countries: USA, Slovakia, Czechia, Sweden, Finland, Switzerland',
          'Legal contract review, Slovak and Czech residence permit support',
          'Direct scouting channels to USHL, NAHL, NCDC and NCAA Division I programs'
        ],
        metrics: [
          { label: 'Countries', value: '6' },
          { label: 'Active since', value: '2011' },
          { label: 'Partner leagues', value: '9' }
        ],
        cta: 'Apply to Agency'
      }
    },
    academy: {
      ru: {
        badge: 'academy.europa-stars.eu',
        title: 'Хоккейная академия в Братиславе',
        subtitle: 'Словацкие клубы, кампус и американский диплом',
        facts: [
          'Клубная практика в Братиславе: HC Slovan Youth, HC HOBA, HC Ruzinov-99',
          'Американский аттестат University of Nebraska High School (UNHS) без отрыва от льда',
          'Проживание в кампусе, 3-разовое спортивное питание и ледовая подготовка'
        ],
        metrics: [
          { label: 'Клубов-партнеров', value: '3' },
          { label: 'Язык обучения', value: 'EN/SK' },
          { label: 'Возраст', value: '14-19' }
        ],
        cta: 'Поступить в Академию'
      },
      en: {
        badge: 'academy.europa-stars.eu',
        title: 'Bratislava Hockey Academy',
        subtitle: 'Slovak club hockey, campus and US high school diploma',
        facts: [
          'Club practice in Bratislava: HC Slovan Youth, HC HOBA, HC Ruzinov-99',
          'Accredited University of Nebraska High School (UNHS) diploma alongside training',
          'Campus accommodation, 3-meal athletic nutrition and daily on-ice sessions'
        ],
        metrics: [
          { label: 'Partner clubs', value: '3' },
          { label: 'Education', value: 'EN/SK' },
          { label: 'Age range', value: '14-19' }
        ],
        cta: 'Apply to Academy'
      }
    }
  };

  const LEAGUES = [
    {
      id: 'ushl',
      name: 'USHL',
      region: 'usa',
      ages: ['u18', 'u20'],
      tier: 'Tier I Junior USA',
      ru: 'Главная юниорская лига США: прямой путь в NCAA Division I и драфт НХЛ',
      en: 'Top Tier I Junior league in the USA: direct pathway to NCAA Division I and NHL Draft'
    },
    {
      id: 'nahl',
      name: 'NAHL / NCDC',
      region: 'usa',
      ages: ['u18', 'u20'],
      tier: 'Tier II Junior USA',
      ru: 'Просмотровые кемпы, контракты и академические стипендии в США',
      en: 'Tier II Junior USA: showcase camps, roster spots and college scholarships'
    },
    {
      id: 'ncaa',
      name: 'NCAA / ACHA',
      region: 'usa',
      ages: ['college', 'u20'],
      tier: 'College Hockey USA',
      ru: 'Студенческие лиги США: совмещение высшего образования и соревновательного хоккея',
      en: 'US collegiate hockey: combining university degree and competitive hockey'
    },
    {
      id: 'tipos',
      name: 'Tipos Extraliga & SHL',
      region: 'sk',
      ages: ['sr', 'u20'],
      tier: 'Pro Slovakia',
      ru: 'Высший и первый профессиональные дивизионы Словакии',
      en: 'Top and second professional hockey divisions in Slovakia'
    },
    {
      id: 'sk-juniors',
      name: 'Extraliga Juniorov U20 / Dorast U18',
      region: 'sk',
      ages: ['u16', 'u20'],
      tier: 'Junior Slovakia',
      ru: 'Юниорские и молодежные лиги Словакии, игровая база в Братиславе',
      en: 'Slovak U20 and U18 junior leagues with home base in Bratislava'
    },
    {
      id: 'cz-pro',
      name: 'Czechia Extraliga & Chance Liga',
      region: 'cz',
      ages: ['sr'],
      tier: 'Pro Czechia',
      ru: 'Профессиональные контракты в клубах Чехии, офис работает с 2011 года',
      en: 'Professional club contracts in Czechia, supported by our office since 2011'
    },
    {
      id: 'cz-u19',
      name: 'DHL Extraliga Junioru U19',
      region: 'cz',
      ages: ['u16', 'u20'],
      tier: 'Junior Czechia',
      ru: 'Элитная молодежная лига Чехии для игроков возрастных категорий U17-U19',
      en: 'Elite Czech youth league for U17-U19 prospects'
    },
    {
      id: 'j20',
      name: 'J20 Nationell & U18 Region',
      region: 'nordic',
      ages: ['u16', 'u20'],
      tier: 'Junior Sweden',
      ru: 'Молодежная система клубов Швеции при аккредитации Шведской федерации',
      en: 'Swedish junior club system under Swedish Ice Hockey Association accreditation'
    },
    {
      id: 'sm-sarja',
      name: 'SM-sarja Finland & U20-Elit Switzerland',
      region: 'nordic',
      ages: ['u20', 'sr'],
      tier: 'Nordic & Swiss Elite',
      ru: 'Ведущие европейские лиги Финляндии и Швейцарии для выпускников Академии',
      en: 'Leading Finnish and Swiss leagues for Academy graduates and pro prospects'
    }
  ];

  const ACADEMY_TABS = {
    hockey: {
      ru: {
        title: 'Хоккейная программа в Братиславе',
        bullets: [
          'Игровая практика в системах HC Slovan Youth, HC HOBA и HC Ruzinov-99',
          'Ежедневные тренировки на льду, ОФП и индивидуальная работа над катанием и броском',
          'Видеоразбор матчей и подготовка профиля для скаутов USHL, NAHL и европейских лиг'
        ],
        metrics: [
          { label: 'Лед в неделю', value: '10 ч' },
          { label: 'ОФП и зал', value: '6 ч' },
          { label: 'Матчи', value: '36+ / сезон' }
        ],
        direction: 'academy',
        ctaKey: 'apply_academy'
      },
      en: {
        title: 'Bratislava Hockey Program',
        bullets: [
          'Competitive club play with HC Slovan Youth, HC HOBA and HC Ruzinov-99',
          'Daily on-ice sessions, off-ice conditioning, skating and shooting mechanics',
          'Video breakdown and scouting profile preparation for USHL, NAHL and EU clubs'
        ],
        metrics: [
          { label: 'Ice per week', value: '10 h' },
          { label: 'Dryland', value: '6 h' },
          { label: 'Games', value: '36+ / season' }
        ],
        direction: 'academy',
        ctaKey: 'apply_academy'
      }
    },
    football: {
      ru: {
        title: 'Футбольное направление в Словакии',
        bullets: [
          'Просмотры и интеграция в молодежные команды клубов Братиславы и региона',
          'Совмещение тренировочного процесса с проживанием в кампусе и оформлением ВНЖ',
          'Индивидуальная физическая подготовка и юридическое сопровождение переходов'
        ],
        metrics: [
          { label: 'Тренировки', value: '8 / нед' },
          { label: 'Языки', value: 'SK / EN' },
          { label: 'Возраст', value: '15-19' }
        ],
        direction: 'academy',
        ctaKey: 'apply_academy'
      },
      en: {
        title: 'Football Program in Slovakia',
        bullets: [
          'Trials and placement into youth squads in Bratislava and regional clubs',
          'Full campus housing, athletic nutrition and Slovak residence permit support',
          'Individual conditioning and legal transfer guidance'
        ],
        metrics: [
          { label: 'Sessions', value: '8 / wk' },
          { label: 'Languages', value: 'SK / EN' },
          { label: 'Age range', value: '15-19' }
        ],
        direction: 'academy',
        ctaKey: 'apply_academy'
      }
    },
    education: {
      ru: {
        title: 'Образование UNHS и кампус в Братиславе',
        bullets: [
          'Аккредитованная американская программа University of Nebraska High School (UNHS)',
          'Подготовка к поступлению в университеты США (NCAA / ACHA) и Европы',
          'Проживание в современном кампусе, 3-разовое питание и кураторская поддержка 24/7'
        ],
        metrics: [
          { label: 'Диплом', value: 'US High School' },
          { label: 'Формат', value: 'Очно + Онлайн' },
          { label: 'Питание', value: '3-разовое' }
        ],
        direction: 'academy',
        ctaKey: 'apply_academy'
      },
      en: {
        title: 'UNHS Education and Bratislava Campus',
        bullets: [
          'Accredited University of Nebraska High School (UNHS) curriculum',
          'Academic preparation for NCAA / ACHA universities in the USA and Europe',
          'Modern campus residence, 3-meal athletic plan and 24/7 student supervision'
        ],
        metrics: [
          { label: 'Diploma', value: 'US High School' },
          { label: 'Format', value: 'Hybrid' },
          { label: 'Meals', value: '3 / day' }
        ],
        direction: 'academy',
        ctaKey: 'apply_academy'
      }
    },
    boost: {
      ru: {
        title: 'Онлайн-платформа Boost Hockey',
        bullets: [
          'Дистанционные программы ОФП, СФП и развития игрового мышления для хоккеистов',
          'Персональный план тренировок под возраст, амплуа и текущий график клуба',
          'Регулярный видеоанализ техники и обратная связь от тренеров Академии'
        ],
        metrics: [
          { label: 'Доступ', value: 'Online 24/7' },
          { label: 'Планы', value: 'U14-SR' },
          { label: 'Разбор', value: 'Еженедельно' }
        ],
        direction: 'boost',
        ctaKey: 'apply_boost'
      },
      en: {
        title: 'Boost Hockey Online Platform',
        bullets: [
          'Remote off-ice strength, conditioning and hockey IQ development programs',
          'Tailored training blocks by age, position and club game schedule',
          'Regular video technique review and feedback from Academy coaches'
        ],
        metrics: [
          { label: 'Access', value: 'Online 24/7' },
          { label: 'Plans', value: 'U14-SR' },
          { label: 'Feedback', value: 'Weekly' }
        ],
        direction: 'boost',
        ctaKey: 'apply_boost'
      }
    }
  };

  const WP_TABS = {
    structure: {
      ru: {
        title: 'Единое ядро WordPress 6.7 без Elementor',
        points: [
          'Объединение europa-stars.eu и academy.europa-stars.eu в единое мега-меню и общую базу заявок',
          'Легковесная тема без тяжелых конструкторов вроде Elementor: быстрая загрузка и чистый HTML',
          'Кастомные типы записей es_league и es_program с фильтрацией по странам и возрастам'
        ]
      },
      en: {
        title: 'Unified WordPress 6.7 Core without Elementor',
        points: [
          'Merging europa-stars.eu and academy.europa-stars.eu into one mega-menu and unified lead pipeline',
          'Lightweight custom theme without bloated page builders: fast LCP and clean semantic HTML',
          'Custom post types es_league and es_program with instant country and age filtering'
        ]
      }
    },
    security: {
      ru: {
        title: 'Безопасность и отказ от уязвимых модулей',
        points: [
          'Полный отказ от устаревшего Joomla SP Page Builder и сторонних небезопасных плагинов',
          'Изоляция wp-admin, отключение XML-RPC и REST-эндпоинтов пользователей',
          'Строгий Content-Security-Policy (CSP) и автоматические ежедневные бэкапы базы данных'
        ]
      },
      en: {
        title: 'Security Hardening and Legacy Removal',
        points: [
          'Complete migration away from vulnerable Joomla SP Page Builder and legacy extensions',
          'Hardened wp-admin access, disabled XML-RPC and restricted user REST endpoints',
          'Strict Content-Security-Policy (CSP) and automated daily database backups'
        ]
      }
    },
    seo: {
      ru: {
        title: 'SEO-миграция и мультиязычность RU / EN / SK',
        points: [
          'Карта 301-редиректов со старых адресов обоих доменов для сохранения позиций в Google',
          'Чистая структура hreflang для версий RU, EN и SK без дублирования страниц',
          'Микроразметка Schema.org для спортивных программ, лиг и контактной информации'
        ]
      },
      en: {
        title: 'SEO Migration and RU / EN / SK Localization',
        points: [
          'Complete 301 redirect map from legacy URLs of both domains to preserve Google rankings',
          'Clean hreflang architecture for RU, EN and SK without duplicate indexation',
          'Schema.org structured data for sports programs, leagues and organization profile'
        ]
      }
    }
  };

  const state = {
    lang: 'ru',
    track: 'agency',
    region: 'all',
    age: 'all',
    acad: 'hockey',
    wp: 'structure'
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || key;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function closeMegaMenus() {
    const megaAgency = $('#megaAgency');
    const megaAcademy = $('#megaAcademy');
    const btnAgency = $('#menuAgencyBtn');
    const btnAcademy = $('#menuAcademyBtn');
    if (megaAgency) megaAgency.hidden = true;
    if (megaAcademy) megaAcademy.hidden = true;
    if (btnAgency) btnAgency.setAttribute('aria-expanded', 'false');
    if (btnAcademy) btnAcademy.setAttribute('aria-expanded', 'false');
  }

  function renderTrackPreview() {
    const container = $('#trackPreviewCard');
    if (!container) return;
    const data = TRACK_DATA[state.track][state.lang];
    const svgGraphic = state.track === 'agency'
      ? `<svg class="track-svg" viewBox="0 0 220 76" width="220" height="76" aria-hidden="true">
          <rect x="2" y="2" width="216" height="72" rx="18" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
          <line x1="110" y1="2" x2="110" y2="74" stroke="currentColor" stroke-width="1.5" opacity="0.45"/>
          <line x1="74" y1="2" x2="74" y2="74" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.3"/>
          <line x1="146" y1="2" x2="146" y2="74" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.3"/>
          <circle cx="110" cy="38" r="14" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
          <circle cx="42" cy="24" r="3" fill="currentColor" opacity="0.7"/>
          <circle cx="178" cy="52" r="3" fill="currentColor" opacity="0.7"/>
          <path d="M42 24 Q110 10 178 52" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.8"/>
        </svg>`
      : `<svg class="track-svg" viewBox="0 0 220 76" width="220" height="76" aria-hidden="true">
          <rect x="6" y="48" width="26" height="22" rx="3" fill="currentColor" opacity="0.25"/>
          <rect x="44" y="34" width="26" height="36" rx="3" fill="currentColor" opacity="0.45"/>
          <rect x="82" y="20" width="26" height="50" rx="3" fill="currentColor" opacity="0.65"/>
          <rect x="120" y="10" width="26" height="60" rx="3" fill="currentColor" opacity="0.85"/>
          <path d="M160 56 L176 40 L190 46 L210 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

    container.innerHTML = `
      <div class="track-card-head">
        <div>
          <span class="track-badge mono-num">${escapeHtml(data.badge)}</span>
          <h3 class="track-title">${escapeHtml(data.title)}</h3>
          <p class="track-subtitle">${escapeHtml(data.subtitle)}</p>
        </div>
        ${svgGraphic}
      </div>
      <ul class="track-facts">
        ${data.facts.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}
      </ul>
      <div class="track-metrics">
        ${data.metrics.map((m) => `
          <div class="metric-box">
            <span class="metric-val mono-num">${escapeHtml(m.value)}</span>
            <span class="metric-lbl">${escapeHtml(m.label)}</span>
          </div>
        `).join('')}
      </div>
      <div class="track-actions">
        <button type="button" class="btn btn-primary track-apply-btn" data-direction="${state.track}">${escapeHtml(data.cta)}</button>
      </div>
    `;

    const applyBtn = $('.track-apply-btn', container);
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        openModal({ direction: state.track });
      });
    }
  }

  function renderLeagues() {
    const grid = $('#leaguesGrid');
    const empty = $('#leaguesEmpty');
    if (!grid || !empty) return;

    const filtered = LEAGUES.filter((lg) => {
      const regionOk = state.region === 'all' || lg.region === state.region;
      const ageOk = state.age === 'all' || lg.ages.includes(state.age);
      return regionOk && ageOk;
    });

    if (filtered.length === 0) {
      grid.hidden = true;
      empty.hidden = false;
      grid.innerHTML = '';
      return;
    }

    grid.hidden = false;
    empty.hidden = true;

    const regionMap = I18N[state.lang].region_labels;
    const ageMap = I18N[state.lang].age_labels;

    grid.innerHTML = filtered.map((lg) => {
      const desc = state.lang === 'ru' ? lg.ru : lg.en;
      const ageTags = lg.ages.map((a) => `<span class="age-pill mono-num">${escapeHtml(ageMap[a] || a)}</span>`).join('');
      return `
        <article class="league-card">
          <div class="league-card-top">
            <span class="league-region">${escapeHtml(regionMap[lg.region] || lg.region)}</span>
            <span class="league-tier mono-num">${escapeHtml(lg.tier)}</span>
          </div>
          <h3 class="league-name">${escapeHtml(lg.name)}</h3>
          <p class="league-desc">${escapeHtml(desc)}</p>
          <div class="league-ages">${ageTags}</div>
          <button type="button" class="btn btn-outline league-apply-btn" data-league="${escapeHtml(lg.name)}">${escapeHtml(t('apply_league'))}</button>
        </article>
      `;
    }).join('');

    $$('.league-apply-btn', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        openModal({
          direction: 'agency',
          league: btn.getAttribute('data-league') || ''
        });
      });
    });
  }

  function renderAcademyPane() {
    const pane = $('#acadDetailPane');
    if (!pane) return;
    const data = ACADEMY_TABS[state.acad][state.lang];
    pane.innerHTML = `
      <h3 class="acad-pane-title">${escapeHtml(data.title)}</h3>
      <ul class="acad-bullets">
        ${data.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
      </ul>
      <div class="acad-metrics">
        ${data.metrics.map((m) => `
          <div class="metric-box">
            <span class="metric-val mono-num">${escapeHtml(m.value)}</span>
            <span class="metric-lbl">${escapeHtml(m.label)}</span>
          </div>
        `).join('')}
      </div>
      <div class="acad-actions">
        <button type="button" class="btn btn-primary acad-apply-btn" data-direction="${escapeHtml(data.direction)}">${escapeHtml(t(data.ctaKey))}</button>
      </div>
    `;

    const btn = $('.acad-apply-btn', pane);
    if (btn) {
      btn.addEventListener('click', () => {
        openModal({ direction: data.direction });
      });
    }
  }

  function renderWpPane() {
    const pane = $('#wpTabContent');
    if (!pane) return;
    const data = WP_TABS[state.wp][state.lang];
    pane.innerHTML = `
      <h3 class="wp-pane-title">${escapeHtml(data.title)}</h3>
      <ul class="wp-points">
        ${data.points.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}
      </ul>
    `;
  }

  function applyLanguage(lang) {
    state.lang = lang === 'en' ? 'en' : 'ru';
    document.documentElement.lang = state.lang;

    $$('.lang-btn[data-lang]').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === state.lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && I18N[state.lang][key]) {
        el.textContent = I18N[state.lang][key];
      }
    });

    const filterTitles = state.lang === 'en'
      ? { all: 'All countries', usa: 'USA & NCAA', sk: 'Slovakia', cz: 'Czechia', nordic: 'Sweden, Finland, Switzerland' }
      : { all: 'Все страны', usa: 'США и NCAA', sk: 'Словакия', cz: 'Чехия', nordic: 'Швеция, Финляндия, Швейцария' };
    $$('#leagueFilterBar [data-region]').forEach((chip) => {
      const r = chip.getAttribute('data-region');
      if (r && filterTitles[r]) chip.textContent = filterTitles[r];
    });

    const ageOptTitles = state.lang === 'en'
      ? { all: 'All categories', u16: 'U16 / U18 Junior', u20: 'U20 Youth', college: 'NCAA / College', sr: 'SR Pro Senior' }
      : { all: 'Все категории', u16: 'U16 / U18 Юниоры', u20: 'U20 Молодежные', college: 'NCAA / Студенческие', sr: 'SR Взрослые профи' };
    $$('#ageGroupSelect option').forEach((opt) => {
      if (ageOptTitles[opt.value]) opt.textContent = ageOptTitles[opt.value];
    });

    renderTrackPreview();
    renderLeagues();
    renderAcademyPane();
    renderWpPane();
  }

  function setActiveAcademyTab(acadKey) {
    if (!ACADEMY_TABS[acadKey]) return;
    state.acad = acadKey;
    $$('.acad-tab[data-acad]').forEach((tab) => {
      const active = tab.getAttribute('data-acad') === acadKey;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    renderAcademyPane();
  }

  function openModal(options = {}) {
    const modal = $('#applyModal');
    const form = $('#playerApplyForm');
    const errorBox = $('#formErrorBox');
    const successBox = $('#formSuccessBox');
    const dirSelect = $('#selectDirection') || $('#inputDirection');
    const leagueInput = $('#inputLeagueTarget');
    const nameInput = $('#inputName');

    if (!modal) return;
    if (form) form.hidden = false;
    if (errorBox) {
      errorBox.hidden = true;
      errorBox.textContent = '';
    }
    if (successBox) successBox.hidden = true;

    if (dirSelect && options.direction) {
      dirSelect.value = options.direction;
    }
    if (leagueInput && typeof options.league === 'string') {
      leagueInput.value = options.league;
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (nameInput) nameInput.focus();
  }

  function closeModal() {
    const modal = $('#applyModal');
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  function initNavigation() {
    const btnAgency = $('#menuAgencyBtn');
    const btnAcademy = $('#menuAcademyBtn');
    const megaAgency = $('#megaAgency');
    const megaAcademy = $('#megaAcademy');
    const burgerBtn = $('#burgerBtn');
    const mobileDrawer = $('#mobileDrawer');

    if (btnAgency && megaAgency) {
      btnAgency.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = megaAgency.hidden;
        closeMegaMenus();
        megaAgency.hidden = !willOpen;
        btnAgency.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    }

    if (btnAcademy && megaAcademy) {
      btnAcademy.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = megaAcademy.hidden;
        closeMegaMenus();
        megaAcademy.hidden = !willOpen;
        btnAcademy.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    }

    $$('.mega-link').forEach((link) => {
      link.addEventListener('click', () => {
        closeMegaMenus();
        const jump = link.getAttribute('data-acad-jump');
        if (jump === 'education' || jump === 'boost') {
          setActiveAcademyTab(jump);
          const sec = $('#section-academy');
          if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        closeMegaMenus();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMegaMenus();
        closeModal();
      }
    });

    if (burgerBtn && mobileDrawer) {
      burgerBtn.addEventListener('click', () => {
        const willOpen = mobileDrawer.hidden;
        mobileDrawer.hidden = !willOpen;
        burgerBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    }
  }

  function initTabsAndFilters() {
    $$('.lang-btn[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    $$('.track-tab[data-track]').forEach((tab) => {
      tab.addEventListener('click', () => {
        const track = tab.getAttribute('data-track');
        if (!TRACK_DATA[track]) return;
        state.track = track;
        $$('.track-tab[data-track]').forEach((tEl) => {
          const active = tEl.getAttribute('data-track') === track;
          tEl.classList.toggle('is-active', active);
          tEl.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        renderTrackPreview();
      });
    });

    const filterBar = $('#leagueFilterBar');
    if (filterBar) {
      $$('[data-region]', filterBar).forEach((btn) => {
        btn.addEventListener('click', () => {
          state.region = btn.getAttribute('data-region') || 'all';
          $$('[data-region]', filterBar).forEach((b) => {
            b.classList.toggle('is-active', b === btn);
          });
          renderLeagues();
        });
      });
    }

    const ageSelect = $('#ageGroupSelect');
    if (ageSelect) {
      ageSelect.addEventListener('change', () => {
        state.age = ageSelect.value || 'all';
        renderLeagues();
      });
    }

    const resetBtn = $('#resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.region = 'all';
        state.age = 'all';
        if (ageSelect) ageSelect.value = 'all';
        if (filterBar) {
          $$('[data-region]', filterBar).forEach((b) => {
            b.classList.toggle('is-active', b.getAttribute('data-region') === 'all');
          });
        }
        renderLeagues();
      });
    }

    $$('.acad-tab[data-acad]').forEach((tab) => {
      tab.addEventListener('click', () => {
        setActiveAcademyTab(tab.getAttribute('data-acad'));
      });
    });

    $$('.wp-tab[data-wp]').forEach((tab) => {
      tab.addEventListener('click', () => {
        const wpKey = tab.getAttribute('data-wp');
        if (!WP_TABS[wpKey]) return;
        state.wp = wpKey;
        $$('.wp-tab[data-wp]').forEach((tEl) => {
          const active = tEl.getAttribute('data-wp') === wpKey;
          tEl.classList.toggle('is-active', active);
          tEl.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        renderWpPane();
      });
    });
  }

  function initModalAndForm() {
    const openBtns = ['#openApplyBtn', '#mobileApplyBtn', '#heroApplyBtn'];
    openBtns.forEach((sel) => {
      const el = $(sel);
      if (el) {
        el.addEventListener('click', () => openModal());
      }
    });

    const closeBtn = $('#closeModalBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    const modal = $('#applyModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    const form = $('#playerApplyForm');
    const errorBox = $('#formErrorBox');
    const successBox = $('#formSuccessBox');
    const summaryText = $('#successSummaryText');
    const newApplyBtn = $('#newApplyBtn');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = $('#inputName');
        const yearInput = $('#inputBirthYear');
        const contactInput = $('#inputContact');
        const dirInput = $('#selectDirection') || $('#inputDirection');
        const leagueInput = $('#inputLeagueTarget');

        const name = nameInput ? nameInput.value.trim() : '';
        const yearVal = yearInput ? Number(yearInput.value.trim()) : 0;
        const contact = contactInput ? contactInput.value.trim() : '';
        const direction = dirInput ? dirInput.value : 'agency';
        const league = leagueInput ? leagueInput.value.trim() : '';

        if (name.length < 2) {
          if (errorBox) {
            errorBox.textContent = t('err_name');
            errorBox.hidden = false;
          }
          if (nameInput) nameInput.focus();
          return;
        }

        if (!Number.isInteger(yearVal) || yearVal < 1990 || yearVal > 2018) {
          if (errorBox) {
            errorBox.textContent = t('err_year');
            errorBox.hidden = false;
          }
          if (yearInput) yearInput.focus();
          return;
        }

        if (contact.length < 5) {
          if (errorBox) {
            errorBox.textContent = t('err_contact');
            errorBox.hidden = false;
          }
          if (contactInput) contactInput.focus();
          return;
        }

        if (errorBox) {
          errorBox.hidden = true;
          errorBox.textContent = '';
        }

        form.hidden = true;
        if (successBox) successBox.hidden = false;
        if (summaryText) {
          const leaguePart = league ? `, ${league}` : '';
          summaryText.textContent = `${t('success_prefix')}: ${name} (${yearVal}) - ${direction}${leaguePart}`;
        }
      });
    }

    if (newApplyBtn && form) {
      newApplyBtn.addEventListener('click', () => {
        form.reset();
        form.hidden = false;
        if (successBox) successBox.hidden = true;
        if (errorBox) errorBox.hidden = true;
        const nameInput = $('#inputName');
        if (nameInput) nameInput.focus();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTabsAndFilters();
    initModalAndForm();
    applyLanguage('ru');
  });
})();
