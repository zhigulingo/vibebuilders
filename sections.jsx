// Sections.jsx — короткий лендинг: терминал → продукт

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="logo">
          <span className="logo-dot"></span>
          vibebuilder<span style={{color:'var(--ink-faint)'}}>.ru</span>
        </div>
        <div className="nav-links">
          <a href="#who">Для кого</a>
          <a href="#shift">Что меняется</a>
          <a href="#author">Автор</a>
        </div>
        <a href="#join" className="btn btn-primary btn-sm">
          Войти в канал
          <span style={{fontSize:14}}>→</span>
        </a>
      </div>
    </nav>
  );
};

/* ============ HERO: терминал → продукт ============ */
const Hero = ({ tweaks }) => {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-pill">NEW</span>
          канал для дизайнеров и продактов · набор первых участников
        </div>
        <h1>
          Делай <span className="accent">продукты</span>,<br/>
          а не пиши тз разрабам.
        </h1>
        <p className="hero-sub">
          {tweaks.subhead}
        </p>
        <div className="hero-cta">
          <a href="#join" className="btn btn-primary btn-lg">
            {tweaks.ctaText}
            <span>→</span>
          </a>
          <a href="#shift" className="btn btn-ghost btn-lg">Что это даёт</a>
        </div>
      </div>

      <div className="container">
        <TerminalToProduct />
      </div>
    </section>
  );
};

/* Главная метафора: слева чёрный терминал с промптом, справа — настоящий красивый продукт */
const TerminalToProduct = () => {
  const [phase, setPhase] = React.useState(0); // 0: typing, 1: building, 2: done
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2800);
    const t2 = setTimeout(() => setPhase(2), 4600);
    const loop = setTimeout(() => setPhase(0), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(loop); };
  }, [phase === 2 ? 'loop' : phase]);

  return (
    <div className="t2p">
      {/* LEFT — терминал */}
      <div className="t2p-term">
        <div className="term-bar">
          <div className="dots"><span></span><span></span><span></span></div>
          <div className="title">cursor — habit-tracker</div>
        </div>
        <div className="term-body" style={{minHeight: 280}}>
          <div><span className="term-prompt">›</span> <span className="term-user">сделай трекер привычек —</span></div>
          <div style={{paddingLeft:16}}><span className="term-user">мягкий, тёплый, не «приложение для гиков».</span></div>
          <div style={{paddingLeft:16}}><span className="term-user">человек ставит галочку — что-то приятное.</span></div>
          {phase >= 1 && (
            <div style={{marginTop:14}}>
              <div className="term-ai">собираю интерфейс<span className="term-cursor"></span></div>
              {phase >= 2 && (
                <>
                  <div className="term-ai">✓ нашёл тёплую палитру</div>
                  <div className="term-ai">✓ добавил микроанимацию галочки</div>
                  <div style={{color:'var(--accent)', marginTop:8}}>→ готово</div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ARROW */}
      <div className="t2p-arrow" aria-hidden="true">
        <div className="t2p-arrow-line"></div>
        <div className="t2p-arrow-head">→</div>
        <div className="t2p-arrow-label">через ИИ</div>
      </div>

      {/* RIGHT — приятный продукт */}
      <div className={`t2p-product ${phase >= 2 ? 'on' : ''}`}>
        <div className="prod-chrome">
          <div className="prod-dots"><span></span><span></span><span></span></div>
          <div className="prod-url">habits.app</div>
        </div>
        <div className="prod-body">
          <div className="prod-greeting">
            <div className="prod-hi">привет, аня 🌿</div>
            <div className="prod-date">вторник, 5 ноября</div>
          </div>
          <div className="prod-streak">
            <div className="prod-streak-num">12</div>
            <div className="prod-streak-lbl">дней<br/>подряд</div>
          </div>
          <div className="prod-list">
            {[
              {n:'утренний стакан воды', done:true},
              {n:'10 минут чтения', done:true},
              {n:'прогулка на свежем воздухе', done:false},
              {n:'без новостей до обеда', done:false},
            ].map((h, i) => (
              <div key={i} className={`prod-habit ${h.done ? 'done' : ''}`} style={{transitionDelay: `${i * 80}ms`}}>
                <div className="prod-check"></div>
                <div className="prod-name">{h.n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============ ДЛЯ КОГО ============ */
const ForWhom = () => (
  <section className="section-tight" id="who">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">для кого</span>
        <h2>Если ты уже умеешь делать — научишься запускать.</h2>
      </div>
      <div className="who-grid">
        <div className="who-card">
          <div className="who-emoji" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none"><rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M14 14h12M14 18h8M14 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <h3>Дизайнеры</h3>
          <p>Хватит отдавать макеты разрабам и месяцами ждать. Свой фигма-файл превращаешь в живой сайт сам — за вечер, а не за спринт.</p>
        </div>
        <div className="who-card">
          <div className="who-emoji" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5"/><path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <h3>Моушн-дизайнеры</h3>
          <p>Твои переходы и микровзаимодействия наконец-то живут не только в афтере. Анимации в вебе — без боли. Это мой главный конёк.</p>
        </div>
        <div className="who-card">
          <div className="who-emoji" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none"><path d="M8 30V12l12 6 12-6v18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          </div>
          <h3>Продакты</h3>
          <p>Идею больше не нужно «продавать команде». Собрал MVP за выходные, показал клиенту или пользователям — и понял, работает или нет.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ============ ЧТО МЕНЯЕТСЯ — пары до/после ============ */
const Shift = () => {
  const pairs = [
    { before: 'Идея → бриф → бэклог → спринт → ревью → фикс багов → релиз', after: 'Идея → промпт → продукт' },
    { before: 'Жду оценок от разрабов и согласований', after: 'Делаю сам и проверяю на пользователях' },
    { before: 'Анимации только в прототипе фигмы', after: 'Анимации работают в настоящем сайте' },
    { before: 'Портфолио — на behance, как у всех', after: 'Своё, живое, с твоим интерактивом' },
  ];
  return (
    <section className="section-tight" id="shift" style={{background:'var(--bg-soft)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">что меняется</span>
          <h2>Не «учить программирование». А запускать <span className="accent" style={{fontStyle:'italic'}}>свои штуки</span>.</h2>
        </div>
        <div className="shift-list">
          {pairs.map((p, i) => (
            <div className="shift-row" key={i}>
              <div className="shift-side shift-before">
                <div className="shift-tag">было</div>
                <div className="shift-text">{p.before}</div>
              </div>
              <div className="shift-arrow">→</div>
              <div className="shift-side shift-after">
                <div className="shift-tag">стало</div>
                <div className="shift-text">{p.after}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ АВТОР — короткий блок ============ */
const Author = () => (
  <section className="section-tight" id="author">
    <div className="container">
      <div className="author-mini">
        <div className="author-mini-img">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="38" r="18" stroke="currentColor" strokeWidth="0.7"/>
            <path d="M20 92 Q20 60 50 60 Q80 60 80 92" stroke="currentColor" strokeWidth="0.7"/>
          </svg>
        </div>
        <div>
          <span className="eyebrow">автор</span>
          <h3 style={{marginTop:16, fontSize:'clamp(28px, 3.6vw, 40px)', lineHeight:1.15}}>Глеб — моушн-дизайнер. Не разраб.</h3>
          <p style={{marginTop:18, color:'var(--ink-dim)', fontSize:17, lineHeight:1.55, maxWidth:640}}>
            Работал в РБК, X5, Cointelegraph. Не пишу код руками — поэтому хорошо понимаю, как думает человек без бекграунда в разработке. С нейросетями вожусь с DALL·E. Делюсь тем, что нашёл сам — без академического тона.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ============ ФИНАЛЬНЫЙ CTA — что делать ============ */
const FinalCTA = ({ tweaks }) => (
  <section className="section-tight" id="join">
    <div className="container">
      <div className="final">
        <div className="live-pill" style={{marginBottom:32}}>
          <span className="live-dot"></span>
          канал только запустился
        </div>
        <h2>
          Запусти то, <span className="accent">что давно крутится в голове.</span>
        </h2>
        <p>Жми кнопку — бот выдаст инвайт. Без email, созвонов и «оставьте заявку».</p>
        <div className="final-cta">
          <a href="https://t.me/vibebuilders" target="_blank" rel="noopener" className="btn btn-primary btn-lg" style={{padding:'22px 36px', fontSize:18}}>
            <span>{tweaks.ctaText}</span>
            <span>→</span>
          </a>
          <div className="final-meta">бесплатно · 30 секунд</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container footer-inner">
      <div>© 2026 vibebuilder.ru</div>
      <div style={{display:'flex', gap:24}}>
        <a href="https://t.me/vibebuilders" target="_blank" rel="noopener">Telegram</a>
        <a href="https://www.youtube.com/@DesignProgress" target="_blank" rel="noopener">YouTube</a>
        <a href="mailto:hi@vibebuilder.ru">hi@vibebuilder.ru</a>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Hero, ForWhom, Shift, Author, FinalCTA, Footer });
