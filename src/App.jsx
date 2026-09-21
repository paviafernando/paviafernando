import { useEffect } from "react";
import { copy } from "./content.js";
import { usePrefs } from "./prefs.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import How from "./components/How.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [prefs, update] = usePrefs();
  const t = copy[prefs.lang];

  useEffect(() => {
    document.title = t.meta.title;
  }, [t]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skip}
      </a>
      <Header t={t} prefs={prefs} update={update} />
      <main id="main">
        <Hero t={t} theme={prefs.theme} />
        <How t={t} />
        <Work t={t} />
        <Experience t={t} lang={prefs.lang} />
        <Skills t={t} />
        <About t={t} />
        <Contact t={t} mode={prefs.mode} />
      </main>
      <Footer t={t} />
    </>
  );
}
