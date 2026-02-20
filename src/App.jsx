import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Shows", href: "https://www.wwe.com/shows" },
  { label: "Superstars", href: "https://www.wwe.com/superstars" },
  { label: "Tickets", href: "https://www.wwe.com/events" },
  { label: "Shop", href: "https://shop.wwe.com/en" },
];

const HERO = {
  img: "https://www.wwe.com/f/styles/medium/public/2026/02/20260202_BreakingNews_WM42_PunkRoman_16x9.jpg",
  alt: "CM Punk vs Roman Reigns",
  tag: "Breaking News",
  title: "Reigns to challenge Punk at WrestleMania",
  cta: "Preview",
  href: "https://www.wwe.com/shows/wrestlemania/saturday-2026/cm-punk-vs-roman-reigns",
};

const NXT_SHOW = {
  logo: "https://www.wwe.com/f/styles/wwe_show_logo_sm/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png",
  img: "https://www.wwe.com/f/styles/wwe_16_9_l/public/2026/02/20260217_NXT_FC.jpg",
  title: "WWE NXT Results for 02/17",
  desc: "Myles Borne attacks Ethan Page and demands a North American Title Match",
  resultsHref: "https://www.wwe.com/shows/wwenxt/2026-02-17",
  highlightsHref: "https://www.wwe.com/playlist/wwe-nxt-highlights-feb-17-2026",
};

const NXT_CLIPS = [
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/video/thumb/2026/02/dchinxt898_05_ntwk_rev_1.jpg",
    alt: "Ethan Page vs Shiloh Hill",
    time: "12:37",
    title: "FULL MATCH: Ethan Page vs. Shiloh Hill",
    href: "https://www.wwe.com/videos/full-match-ethan-page-vs-shiloh-hill-nxt-north-american-title-match-nxt-feb-17-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/video/thumb/2026/02/dchinxt898_04_ntwk_rev_1.jpg",
    alt: "Zaria saves Sol Ruca",
    time: "03:01",
    title: "Zaria saves Sol Ruca from Fatal Influence",
    href: "https://www.wwe.com/videos/zaria-saves-sol-ruca-from-jacy-jayne-and-fatal-influence-nxt-highlights-feb-17-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/video/thumb/2026/02/dchinxt898_03_ntwk_rev_1.jpg",
    alt: "Vanity Project",
    time: "03:17",
    title: "The Vanity Project become No. 1 Contenders",
    href: "https://www.wwe.com/videos/the-vanity-project-become-no-1-contenders-to-nxt-tag-team-title-nxt-highlights-feb-17-2026",
  },
];

const TRENDING = [
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xs/public/2026/02/169_ClashInItaly.jpg",
    alt: "Clash in Italy",
    title: "WWE announces Clash in Italy headed to Turin on Sunday, May 31",
    href: "https://www.wwe.com/article/first-ever-wwe-premium-live-event-in-italy-confirmed-for-sunday-may-31",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xs/public/2026/02/20260213_MensEC_Jevon_16x9_date.jpg",
    alt: "Men's Elimination Chamber",
    title: "Men's Elimination Chamber",
    subtitle: "Orton, Rhodes, Evans, and Knight qualify",
    href: "https://www.wwe.com/shows/eliminationchamber/2026/mens-elimination-chamber",
  },
  {
    img: "https://www.wwe.com/f/video/thumb/2026/02/vmssg_0bRHN.jpg",
    alt: "AJ Styles Tribute",
    title: "A special AJ Styles Tribute comes to Raw",
    time: "01:31",
    isVideo: true,
    href: "https://www.wwe.com/videos/a-special-aj-styles-tribute-comes-on-raw-next-monday",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xs/public/2026/02/20260216_WomensEC_Asuka_16x9_date.jpg",
    alt: "Women's Elimination Chamber",
    title: "Women's Elimination Chamber",
    subtitle: "Stratton, Asuka, Bliss and Ripley qualify",
    href: "https://www.wwe.com/shows/eliminationchamber/2026/womens-elimination-chamber",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchinxt898_02_ntwk_rev_1.jpg",
    alt: "Ricky Saints",
    title: "Ricky Saints throws out a challenge for Joe Hendry",
    show: "WWE NXT",
    time: "03:00",
    isVideo: true,
    href: "https://www.wwe.com/videos/ricky-saints-throws-out-a-challenge-for-joe-hendry-and-the-nxt-title-nxt-highlights-feb-17",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchinxt898_06_ntwk_rev_1.jpg",
    alt: "Myles Borne",
    title: "Myles Borne crushes Ethan Page's ankle",
    show: "WWE NXT",
    time: "03:16",
    isVideo: true,
    href: "https://www.wwe.com/videos/myles-borne-crushes-ethan-page-s-ankle-in-epic-post-match-attack-nxt-highlights-feb-17-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchinxt898_01_ntwk_rev_1.jpg",
    alt: "Lola Vice",
    title: "Lola Vice and Kelani Jordan clash",
    show: "WWE NXT",
    time: "03:01",
    isVideo: true,
    href: "https://www.wwe.com/videos/lola-vice-and-kelani-jordan-battle-in-dramatic-bout-nxt-highlights-feb-17-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchiraw1708_08_ntwk.jpg",
    alt: "Je'Von Evans",
    title: "Je'Von Evans qualifies for Elimination Chamber",
    show: "Raw",
    time: "03:18",
    isVideo: true,
    href: "https://www.wwe.com/videos/je-von-evans-qualifies-for-the-elimination-chamber-raw-highlights-feb-16-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchiraw1708_05_ntwk.jpg",
    alt: "CM Punk",
    title: 'CM Punk: "Judgment Day dragged Bálor down"',
    show: "Raw",
    time: "02:52",
    isVideo: true,
    href: "https://www.wwe.com/videos/cm-punk-the-judgment-day-have-dragged-finn-b-lor-down-raw-highlights-feb-16-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/2026/02/34_NXT_02172026KS_20348.jpg",
    alt: "NXT Photos",
    title: "The spectacular images of WWE NXT, Feb. 17, 2026: photos",
    show: "WWE NXT",
    href: "https://www.wwe.com/gallery/the-spectacular-images-of-wwe-nxt-feb-17-2026-photos",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchiraw1708_03_ntwk_rev_1.jpg",
    alt: "Stephanie Vaquer",
    title: "Stephanie Vaquer makes Liv Morgan cry",
    show: "Raw",
    time: "02:54",
    isVideo: true,
    href: "https://www.wwe.com/videos/stephanie-vaquer-makes-liv-morgan-cry-raw-highlights-feb-16-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchiraw1708_10_ntwk_rev_1.jpg",
    alt: "Maxxine Dupri",
    title: "Maxxine Dupri unleashes sneak attack on Nattie",
    show: "Raw",
    time: "00:43",
    isVideo: true,
    href: "https://www.wwe.com/videos/maxxine-dupri-unleashes-a-sneak-attack-on-nattie-raw-highlights-feb-16-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/video/thumb/2026/02/dchiraw1708_01_ntwk_rev_1.jpg",
    alt: "LA Knight",
    title: "LA Knight recruits The Usos to battle The Vision",
    show: "Raw",
    time: "03:28",
    isVideo: true,
    href: "https://www.wwe.com/videos/la-knight-recruits-the-usos-to-challenge-the-vision-raw-highlights-feb-16-2026",
  },
  {
    img: "https://www.wwe.com/f/styles/wwe_16_9_l_fc/public/2026/02/20260213_SD_Match_ECqualifier_MeloPriestTrick_16x9_Friday.jpg",
    alt: "What to watch",
    title: "What to watch on WWE this week",
    show: "WWE",
    href: "https://www.wwe.com/article/wwe-upcoming-events",
  },
];

const SHOWS = [
  {
    logo: "https://www.wwe.com/f/styles/medium/public/all/2024/12/RAW_Primary_Logo_For_Any_Background_%281%29--de3612b9543981440a24489e0e568d9b.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260216_RAW_FC.jpg",
    show: "Raw",
    title: "Raw: Feb. 16, 2026",
    desc: "Je'Von Evans leaps into Elimination Chamber defeating Gunther and Dominik",
    href: "https://www.wwe.com/shows/raw/2026-02-16",
  },
  {
    logo: "https://www.wwe.com/f/styles/medium/public/all/2024/10/NXTonCW--0f06792893241464479338f55596a5bf.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260217_NXT_FC.jpg",
    show: "WWE NXT",
    title: "WWE NXT: Feb. 17, 2026",
    desc: "Myles Borne attacks Ethan Page and demands Title Match",
    href: "https://www.wwe.com/shows/wwenxt/2026-02-17",
  },
  {
    logo: "https://www.wwe.com/f/styles/medium/public/all/2024/09/Smackdown_LOGO--c8e0b09904cb1356d309a8ea2acb0422.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/02/20260213_SD_final.jpg",
    show: "SmackDown",
    title: "SmackDown: Feb. 13, 2026",
    desc: "Cody Rhodes qualifies for Elimination Chamber after epic thriller",
    href: "https://www.wwe.com/shows/smackdown/2026-02-13",
  },
  {
    logo: "https://www.wwe.com/f/styles/medium/public/2025/12/Royal_Rumble_Riyadh_Logo_2026.png",
    img: "https://www.wwe.com/f/styles/wwe_16_9_s/public/2026/01/20260131_RR26_RomanWin.jpg",
    show: "Royal Rumble",
    title: "Royal Rumble 2026",
    desc: "Roman Reigns wins the 2026 Royal Rumble Match",
    href: "https://www.wwe.com/shows/royalrumble/royal-rumble-2026",
  },
];

const FOOTER_COLS = [
  {
    title: "Corporate",
    links: [
      { label: "Corporate", href: "https://corporate.wwe.com/" },
      { label: "Careers", href: "https://corporate.wwe.com/careers" },
      { label: "Impact", href: "https://corporate.wwe.com/impact" },
      { label: "Contact", href: "https://www.wwe.com/main-help/contact-us" },
    ],
  },
  {
    title: "WWE.com",
    links: [
      { label: "WWE News", href: "https://www.wwe.com/news" },
      { label: "WWE Videos", href: "https://www.wwe.com/videos" },
      { label: "WWE Photos", href: "https://www.wwe.com/photos" },
      { label: "Priority Pass", href: "https://onlocationexp.com/wwe" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Privacy Policy", href: "https://www.wwe.com/page/privacy-policy" },
      { label: "Copyright", href: "https://www.wwe.com/page/copyright" },
      { label: "Terms of Use", href: "https://www.wwe.com/page/terms-and-conditions" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Security", href: "https://www.wwe.com/page/security-policy" },
      { label: "Help Center", href: "https://help.wwe.com/" },
      { label: "Cookie Policy", href: "https://www.wwe.com/page/cookie-policy" },
    ],
  },
];

// ─── STYLES ────────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700;800&display=swap');

  /* Ensure the app can span full viewport width on larger screens (override global limits) */
  #root {
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0a0a; color: #fff; font-family: 'Barlow', sans-serif; -webkit-font-smoothing: antialiased; }

  /* NAV */
  .wwe-nav {
    position: sticky; top: 0; z-index: 200;
    background: #000; border-bottom: 3px solid #e31837;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px; height: 60px;
  }
  .wwe-nav-logo {
    font-family: 'Bebas Neue', sans-serif; font-size: 30px;
    color: #e31837; letter-spacing: 3px; text-decoration: none;
  }
  .wwe-nav-links { display: flex; gap: 36px; list-style: none; }
  .wwe-nav-links a {
    font-family: 'Bebas Neue', sans-serif; font-size: 17px;
    letter-spacing: 1.5px; color: #fff; text-decoration: none; transition: color 0.18s;
  }
  .wwe-nav-links a:hover { color: #e31837; }

  /* HERO */
  .wwe-hero {
    display: block; position: relative; width: 100%;
    aspect-ratio: 16/7; overflow: hidden; text-decoration: none;
  }
  .wwe-hero img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; display: block; }
  .wwe-hero:hover img { transform: scale(1.025); }
  .wwe-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 100%);
  }
  .wwe-hero-content { position: absolute; bottom: 48px; left: 48px; right: 48px; }
  .wwe-hero-tag {
    display: inline-block; background: #e31837;
    font-family: 'Bebas Neue', sans-serif; font-size: 12px;
    letter-spacing: 2.5px; padding: 4px 12px; margin-bottom: 14px;
  }
  .wwe-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(36px, 5.5vw, 72px); line-height: 1;
    letter-spacing: 1px; text-shadow: 0 3px 16px rgba(0,0,0,0.7); margin-bottom: 18px;
  }
  .wwe-hero-cta {
    display: inline-block; background: #e31837; color: #fff;
    font-family: 'Bebas Neue', sans-serif; font-size: 15px;
    letter-spacing: 2px; padding: 8px 22px; text-decoration: none; transition: background 0.18s; border-radius: 2px;
  }
  .wwe-hero-cta:hover { background: #b5102a; }

  /* MAIN */
  .wwe-main { max-width: 1240px; margin: 0 auto; padding: 44px 28px 0; }

  /* NXT */
  .wwe-show-logo { height: 34px; object-fit: contain; display: block; margin-bottom: 18px; }
  .wwe-nxt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 52px; }
  .wwe-nxt-main {
    position: relative; display: block; text-decoration: none;
    border-radius: 4px; overflow: hidden;
  }
  .wwe-nxt-main > img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: transform 0.35s ease; }
  .wwe-nxt-main:hover > img { transform: scale(1.04); }
  .wwe-nxt-main-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 65%);
  }
  .wwe-nxt-main-text { position: absolute; bottom: 18px; left: 18px; right: 18px; }
  .wwe-nxt-main-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 24px;
    color: #fff; margin-bottom: 7px; line-height: 1.1;
  }
  .wwe-nxt-main-desc { font-size: 13px; color: #ccc; line-height: 1.45; margin-bottom: 12px; }
  .wwe-nxt-btns { display: flex; gap: 10px; flex-wrap: wrap; }
  .wwe-btn {
    font-family: 'Bebas Neue', sans-serif; font-size: 13px; letter-spacing: 1.5px;
    padding: 6px 16px; cursor: pointer; text-decoration: none; display: inline-block;
    transition: all 0.18s; border-radius: 2px;
  }
  .wwe-btn-red { background: #e31837; color: #fff; border: 2px solid #e31837; }
  .wwe-btn-red:hover { background: #b5102a; border-color: #b5102a; }
  .wwe-btn-outline { background: transparent; color: #fff; border: 2px solid #fff; }
  .wwe-btn-outline:hover { background: rgba(255,255,255,0.12); }

  /* CLIPS */
  .wwe-nxt-clips { display: flex; flex-direction: column; gap: 14px; }
  .wwe-clip { display: flex; gap: 14px; align-items: center; text-decoration: none; }
  .wwe-clip-thumb { position: relative; flex-shrink: 0; width: 148px; border-radius: 3px; overflow: hidden; }
  .wwe-clip-thumb img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: transform 0.3s; }
  .wwe-clip:hover .wwe-clip-thumb img { transform: scale(1.06); }
  .wwe-clip-time {
    position: absolute; bottom: 5px; right: 6px;
    background: rgba(0,0,0,0.82); font-size: 11px; padding: 2px 6px;
    border-radius: 2px; color: #fff; font-weight: 600;
  }
  .wwe-clip-title { font-size: 14px; font-weight: 700; line-height: 1.4; color: #e8e8e8; transition: color 0.18s; }
  .wwe-clip:hover .wwe-clip-title { color: #e31837; }

  /* SECTION HEADER */
  .wwe-section-head {
    display: flex; align-items: baseline; justify-content: space-between;
    border-bottom: 3px solid #e31837; padding-bottom: 12px; margin-bottom: 26px;
  }
  .wwe-section-title { font-family: 'Bebas Neue', sans-serif; font-size: 30px; letter-spacing: 2px; }
  .wwe-section-title span { color: #e31837; }
  .wwe-section-more {
    font-size: 12px; font-weight: 700; color: #e31837;
    text-decoration: none; text-transform: uppercase; letter-spacing: 1px; transition: opacity 0.18s;
  }
  .wwe-section-more:hover { opacity: 0.75; }

  /* TRENDING */
  .wwe-trending-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 60px; }
  .wwe-trend-card { display: block; text-decoration: none; }
  .wwe-trend-thumb { position: relative; border-radius: 3px; overflow: hidden; margin-bottom: 11px; }
  .wwe-trend-thumb img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: transform 0.32s ease; }
  .wwe-trend-card:hover .wwe-trend-thumb img { transform: scale(1.06); }
  .wwe-play-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.18);
  }
  .wwe-play-btn { width: 38px; height: 38px; background: rgba(227,24,55,0.92); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
  .wwe-play-btn::after { content: ''; border-left: 13px solid #fff; border-top: 8px solid transparent; border-bottom: 8px solid transparent; margin-left: 3px; }
  .wwe-trend-vid-time {
    position: absolute; bottom: 7px; right: 8px;
    background: rgba(0,0,0,0.82); font-size: 11px; font-weight: 600;
    padding: 2px 6px; border-radius: 2px; color: #fff;
  }
  .wwe-trend-show { font-size: 11px; font-weight: 800; color: #e31837; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
  .wwe-trend-title { font-size: 14px; font-weight: 700; line-height: 1.4; color: #e8e8e8; transition: color 0.18s; }
  .wwe-trend-card:hover .wwe-trend-title { color: #e31837; }
  .wwe-trend-sub { font-size: 12px; color: #999; margin-top: 4px; line-height: 1.3; }

  /* SHOWS */
  .wwe-shows-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 60px; }
  .wwe-show-card {
    display: block; text-decoration: none; background: #111; border-radius: 5px;
    overflow: hidden; transition: transform 0.22s, box-shadow 0.22s;
  }
  .wwe-show-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.6); }
  .wwe-show-card-top { position: relative; }
  .wwe-show-logo-badge {
    position: absolute; top: 10px; left: 10px; height: 28px;
    object-fit: contain; z-index: 2; filter: drop-shadow(0 1px 5px rgba(0,0,0,0.9));
  }
  .wwe-show-card-top img:last-child { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
  .wwe-show-card-body { padding: 14px; }
  .wwe-show-label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px; }
  .wwe-show-title { font-family: 'Bebas Neue', sans-serif; font-size: 18px; color: #fff; letter-spacing: 0.5px; margin-bottom: 7px; line-height: 1.15; }
  .wwe-show-desc { font-size: 12px; color: #aaa; line-height: 1.45; margin-bottom: 12px; }
  .wwe-show-results { font-size: 12px; font-weight: 800; color: #e31837; text-transform: uppercase; letter-spacing: 1px; }

  /* FOOTER */
  .wwe-footer { background: #000; border-top: 2px solid #1a1a1a; padding: 48px 40px 28px; }
  .wwe-footer-inner { max-width: 1240px; margin: 0 auto; }
  .wwe-footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 36px; margin-bottom: 36px; }
  .wwe-footer-col-title { font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 2.5px; color: #e31837; margin-bottom: 16px; }
  .wwe-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .wwe-footer-col ul li a { font-size: 13px; color: #777; text-decoration: none; transition: color 0.18s; display: block; }
  .wwe-footer-col ul li a:hover { color: #fff; }
  .wwe-footer-bottom { border-top: 1px solid #1c1c1c; padding-top: 22px; display: flex; justify-content: space-between; align-items: center; }
  .wwe-footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: #e31837; letter-spacing: 3px; text-decoration: none; }
  .wwe-footer-copy { font-size: 12px; color: #444; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .wwe-nxt-grid { grid-template-columns: 1fr; }
    .wwe-trending-grid { grid-template-columns: repeat(2, 1fr); }
    .wwe-shows-grid { grid-template-columns: repeat(2, 1fr); }
    .wwe-footer-grid { grid-template-columns: repeat(2, 1fr); }
    .wwe-hero-content { bottom: 28px; left: 28px; right: 28px; }
  }
  @media (max-width: 560px) {
    .wwe-nav { padding: 0 18px; }
    .wwe-nav-links { display: none; }
    .wwe-main { padding: 28px 16px 0; }
    .wwe-trending-grid { grid-template-columns: 1fr 1fr; }
    .wwe-shows-grid { grid-template-columns: 1fr 1fr; }
    .wwe-footer-grid { grid-template-columns: 1fr 1fr; }
    .wwe-footer { padding: 32px 18px 20px; }
  }
`;

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function WWEClone() {
  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="wwe-nav">
        <a href="https://www.wwe.com/" className="wwe-nav-logo" target="_blank" rel="noopener noreferrer">WWE</a>
        <ul className="wwe-nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <a href={HERO.href} className="wwe-hero" target="_blank" rel="noopener noreferrer">
        <img src={HERO.img} alt={HERO.alt} />
        <div className="wwe-hero-overlay" />
        <div className="wwe-hero-content">
          <div className="wwe-hero-tag">{HERO.tag}</div>
          <h1 className="wwe-hero-title">{HERO.title}</h1>
          <span className="wwe-hero-cta">{HERO.cta}</span>
        </div>
      </a>

      {/* MAIN */}
      <main className="wwe-main">

        {/* NXT SECTION */}
        <img src={NXT_SHOW.logo} alt="WWE NXT" className="wwe-show-logo" />
        <div className="wwe-nxt-grid">
          <a href={NXT_SHOW.resultsHref} className="wwe-nxt-main" target="_blank" rel="noopener noreferrer">
            <img src={NXT_SHOW.img} alt="NXT Results" />
            <div className="wwe-nxt-main-overlay" />
            <div className="wwe-nxt-main-text">
              <div className="wwe-nxt-main-title">{NXT_SHOW.title}</div>
              <div className="wwe-nxt-main-desc">{NXT_SHOW.desc}</div>
              <div className="wwe-nxt-btns">
                <a href={NXT_SHOW.resultsHref} className="wwe-btn wwe-btn-red" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Results</a>
                <a href={NXT_SHOW.highlightsHref} className="wwe-btn wwe-btn-outline" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Watch highlights</a>
              </div>
            </div>
          </a>

          <div className="wwe-nxt-clips">
            {NXT_CLIPS.map((c) => (
              <a key={c.href} href={c.href} className="wwe-clip" target="_blank" rel="noopener noreferrer">
                <div className="wwe-clip-thumb">
                  <img src={c.img} alt={c.alt} />
                  <span className="wwe-clip-time">{c.time}</span>
                </div>
                <div className="wwe-clip-title">{c.title}</div>
              </a>
            ))}
          </div>
        </div>

        {/* TRENDING */}
        <div className="wwe-section-head">
          <div className="wwe-section-title">Trending WWE <span>NEWS</span></div>
          <a href="https://www.wwe.com/news" className="wwe-section-more" target="_blank" rel="noopener noreferrer">More WWE News</a>
        </div>
        <div className="wwe-trending-grid">
          {TRENDING.map((item, i) => (
            <a key={i} href={item.href} className="wwe-trend-card" target="_blank" rel="noopener noreferrer">
              <div className="wwe-trend-thumb">
                <img src={item.img} alt={item.alt} />
                {item.isVideo && (
                  <div className="wwe-play-overlay">
                    <div className="wwe-play-btn" />
                  </div>
                )}
                {item.time && <span className="wwe-trend-vid-time">{item.time}</span>}
              </div>
              {item.show && <div className="wwe-trend-show">{item.show}</div>}
              <div className="wwe-trend-title">{item.title}</div>
              {item.subtitle && <div className="wwe-trend-sub">{item.subtitle}</div>}
            </a>
          ))}
        </div>

        {/* SHOWS */}
        <div className="wwe-section-head">
          <div className="wwe-section-title">WWE Shows <span>LATEST RESULTS</span></div>
          <a href="https://www.wwe.com/shows" className="wwe-section-more" target="_blank" rel="noopener noreferrer">View all Shows</a>
        </div>
        <div className="wwe-shows-grid">
          {SHOWS.map((show) => (
            <a key={show.href} href={show.href} className="wwe-show-card" target="_blank" rel="noopener noreferrer">
              <div className="wwe-show-card-top">
                <img src={show.logo} alt={show.show} className="wwe-show-logo-badge" />
                <img src={show.img} alt={show.title} />
              </div>
              <div className="wwe-show-card-body">
                <div className="wwe-show-label">{show.show}</div>
                <div className="wwe-show-title">{show.title}</div>
                <div className="wwe-show-desc">{show.desc}</div>
                <div className="wwe-show-results">Full Results</div>
              </div>
            </a>
          ))}
        </div>

      </main>

      {/* FOOTER */}
      <footer className="wwe-footer">
        <div className="wwe-footer-inner">
          <div className="wwe-footer-grid">
            {FOOTER_COLS.map((col) => (
              <div key={col.title} className="wwe-footer-col">
                <div className="wwe-footer-col-title">{col.title}</div>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="wwe-footer-bottom">
            <a href="https://www.wwe.com/" className="wwe-footer-logo" target="_blank" rel="noopener noreferrer">WWE</a>
            <div className="wwe-footer-copy">© 2026 WWE. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}