import { association } from "./association.js";

function Header() {
  return (
    <header>
<a aria-label={`${association.name}, inizio pagina`} className="identity" href="#">
<img alt="" height="52" src="/assets/logo-cfm.jpg" width="52"/>
<span>Corpo Musicale<small>Citta’ di Palazzolo APS</small></span>
</a>
<nav aria-label="Navigazione principale"><a className="about-link" href="#associazione">L’associazione</a><a href="#contatti">Contatti</a></nav>
</header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="titolo" className="hero">
<h1 id="titolo">Una città.<br/><span>La sua musica.</span></h1>
<div className="intro">
<p>{association.name} e il Centro di Formazione Musicale “Riccardo Mosca”: un luogo per suonare, imparare e crescere insieme, a Palazzolo sull’Oglio.</p>
<div className="actions"><a className="button" href="mailto:info@cfmpalazzolo.it">Scrivici</a><a className="text-link" href="#associazione">Conosci l’associazione</a></div>
</div>
</section>
  );
}

function ArchivePhoto() {
  return (
    <figure>
<img alt="Foto d’archivio del Corpo Musicale di Palazzolo sull’Oglio, riunito con gli strumenti e lo stendardo." fetchPriority="high" height="791" src="/assets/corpo-musicale.webp" width="1280"/>
<figcaption>Il Corpo Musicale in una fotografia del nostro archivio.</figcaption>
</figure>
  );
}

function About() {
  return (
    <section aria-labelledby="missione" className="about" id="associazione">
<h2 id="missione">La musica ci<br/>mette insieme.</h2>
<div className="about-copy">
<p>Siamo un’associazione musicale senza scopo di lucro. Promuoviamo la musica come occasione di cultura, incontro e crescita, per tutti e in particolare per i giovani. La nostra attività unisce la tradizione bandistica alla formazione musicale e alla partecipazione alla vita della città.</p>
<div className="activities">
<div><h3>Il Corpo Musicale</h3><p>Rifondato nel 1966, porta avanti la tradizione musicale cittadina attraverso concerti e la partecipazione alle manifestazioni della comunità.</p></div>
<div><h3>Il CFM “Riccardo Mosca”</h3><p>Nato nel 1985 come Libera Accademia Musicale, propone corsi di strumento e canto, musica d’insieme e percorsi per i più piccoli.</p></div>
</div>
</div>
</section>
  );
}

function Contacts() {
  return (
    <section aria-labelledby="contatti-titolo" className="contacts" id="contatti">
<h2 id="contatti-titolo">Ci trovi alla<br/>Casa della Musica.</h2>
<div className="contact-grid">
<div><h3>Vieni a conoscerci</h3><address>Casa della Musica<br/>Piazzale Dante Alighieri, 2<br/>25036 Palazzolo sull’Oglio (BS)</address><a className="directions" href="https://www.google.com/maps/search/?api=1&amp;query=Casa+della+Musica+Piazzale+Dante+Alighieri+2+Palazzolo+sull%27Oglio">Indicazioni stradali</a></div>
<div><h3>Parliamone</h3><a className="email" href="mailto:info@cfmpalazzolo.it">info@cfmpalazzolo.it</a><p><a href="tel:+390307301287">030 730 1287</a><br/><a href="tel:+393286380819">328 638 0819</a> · anche WhatsApp</p><p className="hours"><strong>Segreteria</strong><br/>Lunedì e giovedì, 17:00–18:30</p></div>
</div>
</section>
  );
}

function ArchiveLink() {
  return (
    <div className="archive"><p>Programmi, corsi e notizie sono disponibili sul sito attuale.</p><a href="https://www.cfmpalazzolo.it/">Visita cfmpalazzolo.it</a></div>
  );
}

function Footer() {
  return (
    <footer><div className="wrap footer-inner"><div><p><strong>{association.name}</strong></p><p>Centro di Formazione Musicale “Riccardo Mosca”</p><p>C.F. {association.taxCode} · P. IVA {association.vatNumber}</p></div><a href="https://www.cfmpalazzolo.it/privacy-policy/">Informativa privacy sul sito attuale</a></div></footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenuto">Vai al contenuto</a>
      <div className="wrap">
        <Header />
        <main id="contenuto">
          <Hero />
          <ArchivePhoto />
          <About />
          <Contacts />
          <ArchiveLink />
        </main>
      </div>
      <Footer />
    </>
  );
}
