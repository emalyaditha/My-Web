// Data
const companies = ["ERP Systems", "SQL Server", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "POS Systems", "Customer Support", "Troubleshooting", "Reporting", "System Analysis"];
    const projects = [
      {
        title: "EM Budget",
        desc: "Secure personal finance & ledger manager. Full-stack app with passwordless 2FA, cloud sync, debt tracking, subscription management, and cryptographic RLS security.",
        img: "assets/EMBudget.jpeg",
        tag: "React + TypeScript",
        span: "tall",
        link: "https://em-finance-manager.onrender.com/",
        cta: "View live",
        status: "Live"
      },
      {
        title: "Cosmetics.EM",
        desc: "E-commerce platform with ML-based product recommendations and image analysis prototype.",
        img: "assets/proj-cosmetics-em.jpeg",
        tag: "Python",
        span: "tall",
        link: "https://github.com/emalyaditha/Cosmetics.EM",
        cta: "View source",
        status: "Source"
      },
      {
        title: "BlackLotus",
        desc: "C# application showcasing .NET ecosystem development.",
        img: "assets/proj-blacklotus.jpeg",
        tag: "C#",
        span: "short",
        link: "https://github.com/emalyaditha/BlackLotus",
        cta: "View source",
        status: "Source"
      },
      {
        title: "EVIG",
        desc: "Web application with clean UI and dynamic functionality.",
        img: "assets/proj-evig.jpeg",
        tag: "PHP",
        span: "short",
        link: "https://github.com/emalyaditha/EVIG",
        cta: "View source",
        status: "Source"
      },
      {
        title: "Notion Calendar Sync",
        desc: "FastAPI service syncing Notion databases with Google Calendar in near real-time.",
        img: "assets/proj-notion-calendar.jpeg",
        tag: "FastAPI",
        span: "tall",
        link: "https://github.com/emalyaditha/NotionCalendar",
        cta: "View source",
        status: "Source"
      },
    ];
    const steps = [
      { n: "01", t: "DISCOVERY", d: "Understanding the problem, users, and goals." },
      { n: "02", t: "REQUIREMENTS ANALYSIS", d: "Mapping features, edge cases, and constraints." },
      { n: "03", t: "SYSTEM DESIGN", d: "Architecting scalable, maintainable systems." },
      { n: "04", t: "DEVELOPMENT", d: "Building with clean, performant code." },
      { n: "05", t: "TESTING + ITERATION", d: "Validating, refining, shipping." },
    ];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Marquee
    const m = document.getElementById('marquee');
    if (m) {
      if (m.children.length === 0) {
        m.innerHTML = [...companies, ...companies].map(c =>
          `<div class="glass flex h-20 min-w-[260px] items-center justify-center rounded-2xl px-6 font-display text-lg font-medium text-muted-foreground grayscale transition-all hover:text-foreground hover:grayscale-0">${c}</div>`
        ).join('');
      } else if (!prefersReducedMotion) {
        m.innerHTML += m.innerHTML;
      }
    }

    // Work grid (masonry via CSS columns)
    const workGrid = document.getElementById('work-grid');
    if (workGrid && workGrid.children.length === 0) {
      workGrid.innerHTML = projects.map(p => `
    <article class="project-card glow-edge reveal group overflow-hidden rounded-[1.35rem]">
      <div class="relative overflow-hidden ${p.span === 'tall' ? 'aspect-[4/5]' : 'aspect-[4/3]'}">
        <img src="${p.img}" alt="${p.title}" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80"></div>
        <div class="absolute left-4 top-4 flex flex-wrap gap-2">
          <span class="rounded-full border border-white/10 bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur">${p.tag}</span>
          <span class="${p.status === 'Live' ? 'status-chip' : 'rounded-full border border-white/10 bg-black/45'} px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur">${p.status}</span>
        </div>
      </div>
      <div class="flex flex-col gap-5 p-6">
        <div>
          <h3 class="font-display text-xl font-semibold tracking-tight">${p.title}</h3>
          <p class="mt-1 text-sm text-muted-foreground">${p.desc}</p>
        </div>
        <a href="${p.link}" target="_blank" rel="noreferrer" class="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all group-hover:border-neon group-hover:bg-neon group-hover:text-background" aria-label="View ${p.title} project">
          ${p.cta} <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
        </a>
      </div>
    </article>
  `).join('');
    }

    // Steps
    const stepsList = document.getElementById('steps');
    if (stepsList && stepsList.children.length === 0) {
      stepsList.innerHTML = steps.map(s => `
    <li class="surface-soft reveal group flex items-start gap-6 rounded-2xl p-6 transition-all hover:border-white/20 hover:bg-white/[0.02]">
      <span class="font-mono text-xl font-bold text-muted-foreground opacity-50 mt-0.5">${s.n}</span>
      <div class="flex-1">
        <h3 class="font-display text-lg font-semibold tracking-tight text-foreground">${s.t}</h3>
        <p class="mt-1 text-sm text-muted-foreground">${s.d}</p>
      </div>
    </li>
  `).join('');
    }

    // Experience data
    const experiences = [
      {
        period: '2023 - Present',
        present: true,
        company: 'Retail Information Technologies (Pvt) Ltd',
        icon: 'building-2',
        roles: [
          {
            title: 'Senior Product Support Engineer',
            bullets: [
              'ERP support and implementation assistance',
              'SQL troubleshooting',
              'Customer issue investigation',
              'POS system support',
              'Reporting and analysis',
              'Business process support'
            ]
          }
        ]
      },
      {
        period: '2022 - 2023',
        present: false,
        company: 'SOMRO BPO',
        icon: 'briefcase',
        roles: [
          {
            title: 'Internship Programme in Software Engineering',
            bullets: [
              'Worked on Laravel, JavaScript, and AJAX.',
              'Worked on the Inventory Management System for Peradeniya Base Hospital and the National Dengue Analytics Website.'
            ]
          }
        ]
      }
    ];

    const expList = document.getElementById('exp-list');
    if (expList && expList.children.length === 0) {
      expList.innerHTML = experiences.map(e => `
    <li class="reveal group flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
      <div class="sm:w-[200px] shrink-0">
        <div class="inline-block rounded border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] sm:text-xs font-semibold ${e.present ? 'text-neon' : 'text-muted-foreground'}">${e.period}</div>
        ${e.present ? `<div class="mt-3 flex items-center gap-2 font-mono text-[10px] font-bold text-[#00ff9d] uppercase tracking-wider"><span class="h-1.5 w-1.5 rounded-full bg-[#00ff9d]"></span> PRESENT</div>` : ''}
      </div>
      <div class="surface flex-1 rounded-2xl p-6 sm:p-8 transition-all hover:border-white/20 hover:bg-white/[0.02]">
        <div class="flex items-start gap-4 mb-6">
          <div class="grid h-10 w-10 shrink-0 place-items-center rounded bg-white/5 border border-white/10 text-muted-foreground">
            <i data-lucide="${e.icon}" class="h-5 w-5"></i>
          </div>
          <div>
            <h3 class="font-display text-lg font-semibold tracking-tight text-white">${e.company}</h3>
            ${e.roles.length ? `<p class="mt-1 font-mono text-[11px] uppercase tracking-wider text-neon">${e.roles[0].title}</p>` : ''}
          </div>
        </div>
        <div class="space-y-4">
          ${e.roles.map((r, i) => i === 0 ? `
            <ul class="space-y-3">
              ${r.bullets.map(b => `<li class="flex items-start gap-3 text-sm text-muted-foreground"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"></span><span class="leading-relaxed">${b}</span></li>`).join('')}
            </ul>
          ` : `
            <div class="mt-6 pt-6 border-t border-white/10">
              <p class="font-mono text-[11px] uppercase tracking-wider text-neon mb-4">${r.title}</p>
              <ul class="space-y-3">
                ${r.bullets.map(b => `<li class="flex items-start gap-3 text-sm text-muted-foreground"><span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"></span><span class="leading-relaxed">${b}</span></li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </li>
  `).join('');
    }

    // Education data
    const education = [
      {
        degree: 'BSc in Software Engineering',
        institution: 'Cardiff Metropolitan University',
        period: '2023 – 2024',
        icon: 'graduation-cap',
        tags: ['Software Engineering', 'University Degree'],
      },
      {
        degree: 'Higher National Diploma',
        institution: 'International College of Business and Technology',
        period: '2019 – 2021',
        icon: 'award',
        tags: ['HND', 'Business & Technology'],
      },
      {
        degree: 'School',
        institution: 'Lyceum International School',
        period: '2007 – 2018',
        icon: 'book-open',
        tags: ['O/L', 'A/L'],
      },
    ];

    const eduGrid = document.getElementById('edu-grid');
    if (eduGrid && eduGrid.children.length === 0) {
      eduGrid.innerHTML = education.map(e => `
    <article class="surface-soft glow-edge reveal group rounded-[1.35rem] p-7 transition-all hover:border-neon/40">
      <div class="flex items-start justify-between gap-4 mb-5">
        <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-neon">
          <i data-lucide="${e.icon}" class="h-5 w-5"></i>
        </div>
        <span class="font-mono text-xs text-muted-foreground pt-1">${e.period}</span>
      </div>
      <h3 class="font-display text-xl font-semibold tracking-tight leading-tight">${e.degree}</h3>
      <p class="mt-1 text-sm text-neon/80">${e.institution}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        ${e.tags.map(t => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
    }


    // Footer dynamic
    document.getElementById('year').textContent = new Date().getFullYear();
    const updateTime = () => {
      document.getElementById('local-time').textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });
    };
    updateTime(); setInterval(updateTime, 30000);

    // Icons
    if (window.lucide) lucide.createIcons();

    // Nav shrink on scroll
    const nav = document.getElementById('nav');
    let scrollTicking = false;
    const onScroll = () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            nav.classList.remove('top-6', 'w-[min(900px,calc(100%-2rem))]');
            nav.classList.add('top-4', 'w-[min(720px,calc(100%-2rem))]');
          } else {
            nav.classList.add('top-6', 'w-[min(900px,calc(100%-2rem))]');
            nav.classList.remove('top-4', 'w-[min(720px,calc(100%-2rem))]');
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Active section state
    const sectionLinks = Array.from(document.querySelectorAll('[data-section-link]'));
    const linkedSections = sectionLinks
      .map(link => document.getElementById(link.dataset.sectionLink))
      .filter(Boolean);

    const setActiveSection = id => {
      sectionLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.sectionLink === id);
      });
    };

    if (linkedSections.length && 'IntersectionObserver' in window) {
      const activeSectionObserver = new IntersectionObserver(entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.08, 0.2, 0.4]
      });

      linkedSections.forEach(section => activeSectionObserver.observe(section));
    }

    // Cursor glow
    const cg = document.getElementById('cursor-glow');
    let mouseX = -200, mouseY = -200;
    let cgTicking = false;
    if (!prefersReducedMotion && !window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
        if (!cgTicking) {
          window.requestAnimationFrame(() => {
            cg.style.left = mouseX + 'px';
            cg.style.top = mouseY + 'px';
            cgTicking = false;
          });
          cgTicking = true;
        }
      }, { passive: true });
    }

    // Reveal on view
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '-80px' });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }

    // Particles canvas (hero)
    (function () {
      const canvas = document.getElementById('particles');
      if (!canvas || prefersReducedMotion) return;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      let w, h;
      const resize = () => { w = canvas.width = canvas.offsetWidth * dpr; h = canvas.height = canvas.offsetHeight * dpr; };
      resize(); window.addEventListener('resize', resize, { passive: true });
      const ps = Array.from({ length: 50 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.6 + 0.4, a: Math.random() * 0.6 + 0.2,
      }));
      let animFrame;
      let isVisible = true;

      const tick = () => {
        if (!isVisible) return;
        ctx.clearRect(0, 0, w, h);
        for (const p of ps) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,163,255,${p.a})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = 'rgba(0,163,255,0.8)';
          ctx.fill();
        }
        animFrame = requestAnimationFrame(tick);
      };

      const heroIo = new IntersectionObserver(entries => {
        entries.forEach(e => {
          isVisible = e.isIntersecting;
          if (isVisible) tick();
          else cancelAnimationFrame(animFrame);
        });
      }, { rootMargin: '100px' });
      heroIo.observe(canvas);
    })();
