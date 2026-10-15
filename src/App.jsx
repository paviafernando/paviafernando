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
import AskFernando from "./components/AskFernando.jsx";
import Share from "./components/Share.jsx";

export default function App() {
  const isShare =
    typeof window !== "undefined" && window.location.pathname.replace(/\/$/, "") === "/share";
  const [prefs, update, locked] = usePrefs();
  const t = copy[prefs.lang];
  const detailsDefault = prefs.details === "expanded";
  const detailsLocked = !!locked.details;

  useEffect(() => {
    document.title = t.meta.title;
  }, [t]);

  if (isShare) return <Share />;

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skip}
      </a>
      <Header t={t} prefs={prefs} update={update} locked={locked} />
      <main id="main">
        <Hero t={t} theme={prefs.theme} lang={prefs.lang} detailsDefault={detailsDefault} detailsLocked={detailsLocked} />
        <How t={t} />
        <Work t={t} detailsDefault={detailsDefault} detailsLocked={detailsLocked} />
        <Experience t={t} lang={prefs.lang} detailsDefault={detailsDefault} detailsLocked={detailsLocked} />
        <Skills t={t} detailsDefault={detailsDefault} detailsLocked={detailsLocked} />
        <About t={t} />
        <Contact t={t} mode={prefs.mode} lang={prefs.lang} />
      </main>
      <Footer t={t} />
      <AskFernando t={t} lang={prefs.lang} />
    </>
  );
}
