// app.jsx — main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#c4ff3d",
  "subhead": "Канал для дизайнеров, моушн-дизайнеров и продактов. Учу превращать идеи и макеты в настоящие работающие продукты — через ИИ. Без курсов по программированию.",
  "ctaText": "Зайти в канал"
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accentColor);
    const c = tweaks.accentColor.replace('#','');
    if (c.length === 6) {
      const r = parseInt(c.slice(0,2),16), g = parseInt(c.slice(2,4),16), b = parseInt(c.slice(4,6),16);
      const lum = (0.299*r + 0.587*g + 0.114*b) / 255;
      document.documentElement.style.setProperty('--accent-ink', lum > 0.6 ? '#0a0a0a' : '#ffffff');
      document.documentElement.style.setProperty('--accent-soft', `rgba(${r}, ${g}, ${b}, 0.12)`);
    }
  }, [tweaks.accentColor]);

  return (
    <>
      <Nav />
      <Hero tweaks={tweaks} />
      <ForWhom />
      <Shift />
      <Author />
      <FinalCTA tweaks={tweaks} />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Брендинг">
          <TweakColor label="Акцентный цвет" value={tweaks.accentColor} onChange={v => setTweak('accentColor', v)} />
        </TweakSection>
        <TweakSection title="Тексты">
          <TweakText label="Подзаголовок" value={tweaks.subhead} onChange={v => setTweak('subhead', v)} multiline />
          <TweakText label="CTA" value={tweaks.ctaText} onChange={v => setTweak('ctaText', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
