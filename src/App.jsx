import { association } from "./association.js";

function Header() {
  return (
    <header>
      <a aria-label={`${association.name}, inizio pagina`} className="identity" href="#">
        <img alt="" height="52" src="/assets/logo-cfm.jpg" width="52" />
        <span>Corpo Musicale<small>Città di Palazzolo APS</small></span>
      </a>
      <nav aria-label="Navigazione principale">
        <a className="about-link" href="#associazione">L’associazione</a>
        <a href="#contatti">Contatti</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="titolo" className="hero">
      <h1 id="titolo">Una città.<br /><span>La sua musica.</span></h1>
      <div className="intro">
        <p>{association.name} e il Centro di Formazione Musicale “Riccardo Mosca”: un luogo per suonare, imparare e crescere insieme, a Palazzolo sull’Oglio.</p>
        <div className="actions">
          <a className="button" href="mailto:info@cfmpalazzolo.it">Scrivici</a>
          <a className="text-link" href="#associazione">Conosci l’associazione</a>
        </div>
      </div>
    </section>
  );
}

function HeroPhoto() {
  return (
    <figure className="hero-photo">
      <img
        alt="Il Corpo Musicale Città di Palazzolo riunito sul palco dell'auditorium della Casa della Musica."
        fetchPriority="high"
        height="1066"
        src="/assets/orchestra-moderna.webp"
        width="1600"
      />
      <figcaption>Il Corpo Musicale all’auditorium della Casa della Musica di Palazzolo sull’Oglio.</figcaption>
    </figure>
  );
}

function About() {
  return (
    <section aria-labelledby="missione" className="about" id="associazione">
      <h2 id="missione">La musica ci<br />mette insieme.</h2>
      <div className="about-copy">
        <p>Siamo un’associazione musicale senza scopo di lucro. Promuoviamo la musica come occasione di cultura, incontro e crescita, per tutti e in particolare per i giovani. La nostra attività unisce la tradizione bandistica alla formazione musicale e alla partecipazione alla vita della città.</p>
        <div className="activities">
          <div>
            <h3>Il Corpo Musicale</h3>
            <p>Rifondato nel 1966, porta avanti la tradizione musicale cittadina attraverso concerti e la partecipazione alle manifestazioni della comunità.</p>
          </div>
          <div>
            <h3>Il CFM “Riccardo Mosca”</h3>
            <p>Nato nel 1985 come Libera Accademia Musicale, propone corsi di strumento e canto, musica d’insieme e percorsi per i più piccoli.</p>
          </div>
        </div>
        <figure className="archive-figure">
          <img
            alt="Foto d’archivio del Corpo Musicale di Palazzolo sull’Oglio con gli strumenti d'epoca e lo stendardo."
            loading="lazy"
            height="791"
            src="/assets/corpo-musicale.webp"
            width="1280"
          />
          <figcaption>Le radici storiche: una formazione del Corpo Musicale custodita nel nostro archivio fotografico.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section aria-labelledby="contatti-titolo" className="contacts" id="contatti">
      <h2 id="contatti-titolo">Ci trovi alla<br />Casa della Musica.</h2>
      <div className="contact-content">
        <div className="contact-grid">
          <div>
            <h3>Vieni a conoscerci</h3>
            <address>
              Casa della Musica<br />
              Piazzale Dante Alighieri, 2<br />
              25036 Palazzolo sull’Oglio (BS)
            </address>
            <a className="directions" href="https://www.google.com/maps/search/?api=1&amp;query=Casa+della+Musica+Piazzale+Dante+Alighieri+2+Palazzolo+sull%27Oglio">Indicazioni stradali</a>
          </div>
          <div>
            <h3>Parliamone</h3>
            <ul className="contact-methods">
              <li><a className="email" href="mailto:info@cfmpalazzolo.it">info@cfmpalazzolo.it</a></li>
              <li><a href="tel:+390307301287">030 730 1287</a></li>
              <li className="mobile-line">
                <a href="tel:+393286380819">328 638 0819</a>
                <a className="whatsapp" href="https://wa.me/393286380819" aria-label="Scrivici su WhatsApp al 328 638 0819">WhatsApp</a>
              </li>
            </ul>
            <p className="hours"><strong>Segreteria</strong><br />Lunedì e giovedì, 17:00–18:30</p>
          </div>
        </div>
        <figure className="sede-figure">
          <img
            alt="Esterno della Casa della Musica di Palazzolo sull’Oglio, sede del Corpo Musicale e del CFM."
            loading="lazy"
            height="1280"
            src="/assets/casa-della-musica.webp"
            srcSet="/assets/casa-della-musica-640.webp 640w, /assets/casa-della-musica.webp 1280w"
            sizes="(max-width: 600px) calc(100vw - 40px), 520px"
            width="1280"
          />
          <figcaption>
            La Casa della Musica in Piazzale Dante Alighieri 2.{' '}
            <a href="https://www.comune.palazzolosulloglio.bs.it/novita/comunicati-stampa/conclusi-i-lavori-per-lefficientamento-energetico-alla-casa-della-musica">Foto del Comune di Palazzolo sull’Oglio, 2025.</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ArchiveLink() {
  return (
    <div className="archive">
      <p>Programmi, corsi e notizie sono disponibili sul sito attuale.</p>
      <a href="https://www.cfmpalazzolo.it/">Visita cfmpalazzolo.it</a>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div>
          <p><strong>{association.name}</strong></p>
          <p>Centro di Formazione Musicale “Riccardo Mosca”</p>
          <p>C.F. {association.taxCode} · P. IVA {association.vatNumber}</p>
        </div>
        <a href="https://www.cfmpalazzolo.it/privacy-policy/">Informativa privacy sul sito attuale</a>
      </div>
    </footer>
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
          <HeroPhoto />
          <About />
          <Contacts />
          <ArchiveLink />
        </main>
      </div>
      <Footer />
    </>
  );
}
