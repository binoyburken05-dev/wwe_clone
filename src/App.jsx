import { useState } from "react";

const NAV_LINKS = ["Shows", "Superstars", "Tickets", "Shop"];

const HERO = {
  img: "https://www.wwe.com/f/styles/medium/public/2026/02/20260202_BreakingNews_WM42_PunkRoman_16x9.jpg",
  tag: "Breaking News",
  title: "Reigns to challenge Punk at WrestleMania",
  link: "#",
};

const NXT_SHOW = {
  logo: "https://www.wwe.com/f/styles/wwe_show_logo_sm/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png",
  img: "https://www.wwe.com/f/styles/wwe_16_9_l/public/2026/02/20260217_NXT_FC.jpg",
  title: "WWE NXT Results for 02/17",
  desc: "Myles Borne attacks Ethan Page and demands a North American Title Match",
};

const NXT_CLIPS = [
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/video/thumb/2026/02/dchinxt898_05_ntwk_rev_1.jpg",
    time: "12:37",
    title: "FULL MATCH: Ethan Page vs. Shiloh Hill",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/video/thumb/2026/02/dchinxt898_04_ntwk_rev_1.jpg",
    time: "03:01",
    title: "Zaria saves Sol Ruca from Fatal Influence",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/video/thumb/2026/02/dchinxt898_03_ntwk_rev_1.jpg",
    time: "03:17",
    title: "The Vanity Project become No. 1 Contenders",
  },
];

const TRENDING = [
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xs/public/2026/02/169_ClashInItaly.jpg",
    title: "WWE announces Clash in Italy headed to Turin on Sunday, May 31",
    isVideo: false,
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xs/public/2026/02/20260213_MensEC_Jevon_16x9_date.jpg",
    title: "Men's Elimination Chamber",
    subtitle: "Orton, Rhodes, Evans, and Knight qualify",
    isVideo: false,
  },
  {
    img: "https://www.wwe.com/f/video/thumb/2026/02/vmssg_0bRHN.jpg",
    title: "A special AJ Styles Tribute comes to Raw",
    time: "01:31",
    isVideo: true,
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xs/public/2026/02/20260216_WomensEC_Asuka_16x9_date.jpg",
    title: "Women's Elimination Chamber",
    subtitle: "Stratton, Asuka, Bliss and Ripley qualify",
    isVideo: false,
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchinxt898_02_ntwk_rev_1.jpg",
    title: "Ricky Saints throws out a challenge for Joe Hendry",
    show: "WWE NXT",
    time: "03:00",
    isVideo: true,
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchinxt898_06_ntwk_rev_1.jpg",
    title: "Myles Borne crushes Ethan Page's ankle",
    show: "WWE NXT",
    time: "03:16",
    isVideo: true,
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchinxt898_01_ntwk_rev_1.jpg",
    title: "Lola Vice and Kelani Jordan clash",
    show: "WWE NXT",
    time: "03:01",
    isVideo: true,
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchiraw1708_08_ntwk.jpg",
    title: "Je'Von Evans qualifies for Elimination Chamber",
    show: "Raw",
    time: "03:18",
    isVideo: true,
  },
];

const SHOWS = [
  {
    logo: "https://www.wwe.com/f/styles/medium/public/all/2024/12/RAW_Primary_Logo_For_Any_Background_%281%29--de3612b9543981440a24489e0e568d9b.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260216_RAW_FC.jpg",
    show: "Raw",
    title: "Raw: Feb. 16, 2026",
    desc: "Je'Von Evans leaps into Elimination Chamber defeating Gunther and Dominik",
  },
  {
    logo: "https://www.wwe.com/f/styles/medium/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260217_NXT_FC.jpg",
    show: "WWE NXT",
    title: "WWE NXT: Feb. 17, 2026",
    desc: "Myles Borne attacks Ethan Page and demands Title Match",
  },
  {
    logo: "https://www.wwe.com/f/styles/medium/public/all/2024/09/Smackdown_LOGO--c8e0b09904cb1356d309a8ea2acb0422.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260213_SD_final.jpg",
    show: "SmackDown",
    title: "SmackDown: Feb. 13, 2026",
    desc: "Cody Rhodes qualifies for Elimination Chamber after epic thriller",
  },
  {
    logo: "https://www.wwe.com/f/styles/medium/public/2025/12/Royal_Rumble_Riyadh_Logo_2026.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/01/20260131_RR26_RomanWin.jpg",
    show: "Royal Rumble",
    title: "Royal Rumble 2026",
    desc: "Roman Reigns wins the 2026 Royal Rumble Match",
  },
];

const FOOTER_COLS = [
  {
    title: "Corporate",
    links: ["Corporate", "Careers", "Impact", "Contact"],
  },
  {
    title: "WWE.com",
    links: ["WWE News", "WWE Videos", "WWE Photos", "Priority Pass"],
  },
  {
    title: "About",
    links: ["Privacy Policy", "Copyright", "Terms of Use"],
  },
  {
    title: "Help",
    links: ["Security", "Help Center", "Cookie Policy"],
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a0a0a;
    color: #fff;
    font-family: 'Barlow', sans-serif;
  }

  .wwe-root {
    min-height: 100vh;
    background: #0a0a0a;
  }

  /* NAV */
  .nav {
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 56px;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 2px solid #e31837;
  }
  .nav-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    color: #e31837;
    letter-spacing: 2px;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }
  .nav-links li {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
    transition: color 0.2s;
  }
  .nav-links li:hover { color: #e31837; }

  /* HERO */
  .hero {
    position: relative;
    width: 100%;
    aspect-ratio: 16/7;
    overflow: hidden;
    cursor: pointer;
  }
  .hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  .hero:hover img { transform: scale(1.02); }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  }
  .hero-content {
    position: absolute;
    bottom: 40px;
    left: 40px;
  }
  .hero-tag {
    background: #e31837;
    color: #fff;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 13px;
    letter-spacing: 2px;
    padding: 4px 10px;
    display: inline-block;
    margin-bottom: 12px;
  }
  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(32px, 5vw, 64px);
    line-height: 1;
    letter-spacing: 1px;
    text-shadow: 0 2px 12px rgba(0,0,0,0.7);
  }

  /* MAIN CONTENT */
  .main { max-width: 1200px; margin: 0 auto; padding: 40px 24px; }

  /* NXT SECTION */
  .section-logo {
    height: 32px;
    object-fit: contain;
    margin-bottom: 16px;
  }
  .nxt-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 40px;
  }
  .nxt-main {
    position: relative;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
  }
  .nxt-main img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
  }
  .nxt-main:hover img { transform: scale(1.03); }
  .nxt-main-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%);
  }
  .nxt-main-text {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
  .nxt-main-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }
  .nxt-main-desc {
    font-size: 13px;
    color: #ccc;
    line-height: 1.4;
  }
  .nxt-links {
    display: flex;
    gap: 12px;
    margin-top: 10px;
  }
  .nxt-link-btn {
    background: #e31837;
    color: #fff;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    padding: 5px 14px;
    border: none;
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.2s;
  }
  .nxt-link-btn:hover { background: #b5102a; }
  .nxt-link-btn.outline {
    background: transparent;
    border: 1px solid #fff;
  }
  .nxt-link-btn.outline:hover { background: rgba(255,255,255,0.1); }

  .nxt-clips {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .clip-card {
    display: flex;
    gap: 12px;
    cursor: pointer;
    align-items: center;
  }
  .clip-thumb {
    position: relative;
    flex-shrink: 0;
    width: 140px;
    border-radius: 3px;
    overflow: hidden;
  }
  .clip-thumb img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
  }
  .clip-card:hover .clip-thumb img { transform: scale(1.05); }
  .clip-time {
    position: absolute;
    bottom: 5px;
    right: 6px;
    background: rgba(0,0,0,0.8);
    font-size: 11px;
    padding: 2px 5px;
    border-radius: 2px;
  }
  .clip-title {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    color: #eee;
  }
  .clip-card:hover .clip-title { color: #e31837; }

  /* SECTION HEADER */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    border-bottom: 3px solid #e31837;
    padding-bottom: 10px;
  }
  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    letter-spacing: 2px;
  }
  .section-more {
    font-size: 13px;
    color: #e31837;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
  }
  .section-more:hover { text-decoration: underline; }

  /* TRENDING GRID */
  .trending-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 56px;
  }
  .trend-card {
    cursor: pointer;
  }
  .trend-thumb {
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .trend-thumb img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
  }
  .trend-card:hover .trend-thumb img { transform: scale(1.05); }
  .play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.2);
  }
  .play-icon {
    width: 36px;
    height: 36px;
    background: rgba(227,24,55,0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-icon::after {
    content: '';
    border-left: 12px solid white;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    margin-left: 3px;
  }
  .trend-video-time {
    position: absolute;
    bottom: 6px;
    right: 8px;
    background: rgba(0,0,0,0.8);
    font-size: 11px;
    padding: 2px 5px;
    border-radius: 2px;
  }
  .trend-show {
    font-size: 11px;
    color: #e31837;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  .trend-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    color: #eee;
  }
  .trend-card:hover .trend-title { color: #e31837; }
  .trend-subtitle {
    font-size: 12px;
    color: #aaa;
    margin-top: 3px;
  }

  /* SHOWS SECTION */
  .shows-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 56px;
  }
  .show-card {
    background: #111;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .show-card:hover { transform: translateY(-3px); }
  .show-card-top {
    position: relative;
  }
  .show-logo-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 26px;
    object-fit: contain;
    z-index: 1;
    filter: drop-shadow(0 1px 4px rgba(0,0,0,0.8));
  }
  .show-card-top img:last-child {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
  }
  .show-card-body {
    padding: 12px;
  }
  .show-label {
    font-size: 11px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .show-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 17px;
    color: #fff;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }
  .show-desc {
    font-size: 12px;
    color: #aaa;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  .show-results-btn {
    font-size: 12px;
    color: #e31837;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }

  /* FOOTER */
  .footer {
    background: #000;
    border-top: 2px solid #222;
    padding: 40px 32px 24px;
  }
  .footer-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-bottom: 32px;
  }
  .footer-col-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    color: #e31837;
    margin-bottom: 14px;
  }
  .footer-col ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .footer-col ul li {
    font-size: 13px;
    color: #888;
    cursor: pointer;
    transition: color 0.2s;
  }
  .footer-col ul li:hover { color: #fff; }
  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #222;
    padding-top: 20px;
  }
  .footer-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    color: #e31837;
    letter-spacing: 2px;
  }
  .footer-copy {
    font-size: 12px;
    color: #555;
  }

  /* Laptop-specific adjustments: target widths between typical tablet and desktop
     to make the layout feel balanced on laptop screens (e.g. 13"/14"/15") */
  @media (min-width: 769px) and (max-width: 1200px) {
    .main { max-width: 1000px; padding: 36px 20px; }
    .hero { aspect-ratio: 16/9; }
    .hero-content { bottom: 32px; left: 32px; }
    .hero-title { font-size: clamp(28px, 4.5vw, 48px); }

    /* NXT: make primary content a little wider and clips a bit smaller */
    .nxt-grid { grid-template-columns: 2fr 1fr; gap: 18px; }
    .nxt-clips { gap: 10px; }
    .clip-thumb { width: 120px; }

    /* Trending and shows: use three columns on most laptops */
    .trending-grid { grid-template-columns: repeat(3, 1fr); }
    .shows-grid { grid-template-columns: repeat(3, 1fr); }
    .footer-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }

    .nav { padding: 0 20px; }
    .nav-links { gap: 18px; font-size: 14px; }

    /* Slightly tighten top/bottom spacing for better vertical fit */
    .main { padding-top: 28px; padding-bottom: 28px; }
  }

  @media (max-width: 768px) {
    .nxt-grid { grid-template-columns: 1fr; }
    .trending-grid { grid-template-columns: repeat(2, 1fr); }
    .shows-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: repeat(2, 1fr); }
    .nav-links { display: none; }
  }
`;

export default function WWEClone() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <div className="wwe-root">
        {/* NAV */}
        <nav className="nav">
          <div className="nav-logo">WWE</div>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </nav>

        {/* HERO */}
        <div className="hero">
          <img src={HERO.img} alt={HERO.title} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-tag">{HERO.tag}</span>
            <h1 className="hero-title">{HERO.title}</h1>
          </div>
        </div>

        {/* MAIN */}
        <main className="main">
          {/* NXT SECTION */}
          <img
            src={NXT_SHOW.logo}
            alt="WWE NXT"
            className="section-logo"
          />
          <div className="nxt-grid">
            <div className="nxt-main">
              <img src={NXT_SHOW.img} alt={NXT_SHOW.title} />
              <div className="nxt-main-overlay" />
              <div className="nxt-main-text">
                <div className="nxt-main-title">{NXT_SHOW.title}</div>
                <div className="nxt-main-desc">{NXT_SHOW.desc}</div>
                <div className="nxt-links">
                  <button className="nxt-link-btn">Results</button>
                  <button className="nxt-link-btn outline">Watch highlights</button>
                </div>
              </div>
            </div>
            <div className="nxt-clips">
              {NXT_CLIPS.map((c, i) => (
                <div className="clip-card" key={i}>
                  <div className="clip-thumb">
                    <img src={c.img} alt={c.title} />
                    <span className="clip-time">{c.time}</span>
                  </div>
                  <div className="clip-title">{c.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TRENDING */}
          <div className="section-header">
            <div className="section-title">Trending WWE News</div>
            <a className="section-more" href="#">More WWE News</a>
          </div>
          <div className="trending-grid">
            {TRENDING.map((item, i) => (
              <div className="trend-card" key={i}>
                <div className="trend-thumb">
                  <img src={item.img} alt={item.title} />
                  {item.isVideo && (
                    <div className="play-overlay">
                      <div className="play-icon" />
                    </div>
                  )}
                  {item.time && (
                    <span className="trend-video-time">{item.time}</span>
                  )}
                </div>
                {item.show && <div className="trend-show">{item.show}</div>}
                <div className="trend-title">{item.title}</div>
                {item.subtitle && (
                  <div className="trend-subtitle">{item.subtitle}</div>
                )}
              </div>
            ))}
          </div>

          {/* SHOWS */}
          <div className="section-header">
            <div className="section-title">WWE Shows — Latest Results</div>
            <a className="section-more" href="#">View all Shows</a>
          </div>
          <div className="shows-grid">
            {SHOWS.map((show, i) => (
              <div className="show-card" key={i}>
                <div className="show-card-top">
                  <img src={show.logo} alt={show.show} className="show-logo-badge" />
                  <img src={show.img} alt={show.title} />
                </div>
                <div className="show-card-body">
                  <div className="show-label">{show.show}</div>
                  <div className="show-title">{show.title}</div>
                  <div className="show-desc">{show.desc}</div>
                  <div className="show-results-btn">Full Results</div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-grid">
            {FOOTER_COLS.map((col) => (
              <div className="footer-col" key={col.title}>
                <div className="footer-col-title">{col.title}</div>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">WWE</div>
            <div className="footer-copy">© 2026 WWE. All Rights Reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}