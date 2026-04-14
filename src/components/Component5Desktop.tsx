"use client";

import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const COLLEGES = [
  {
    id: 1,
    name: "Anna Distance Education",
    shortName: "Anna DE",
    location: "New Delhi, Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Anna_University_Logo.svg/200px-Anna_University_Logo.svg.png",
    type: "Private",
    established: 2008,
    totalStudents: 21205,
    coursesOffered: 19,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "6.86 LPA",
    highestPackage: "20 LPA",
    nirfRank: 34,
    accreditations: "NAAC Grade A+, UGC, IIRF, AICTE",
    feeMin: "₹31,180",
    feeMax: "₹1,00,000",
    topRecruiters: ["Apollo", "Accenture", "Infosys", "TCS", "Wipro"],
  },
  {
    id: 2,
    name: "CU Online",
    shortName: "CU Online",
    location: "New Delhi, Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Chandigarh_University_logo.svg/200px-Chandigarh_University_logo.svg.png",
    type: "Private",
    established: 2008,
    totalStudents: 21205,
    coursesOffered: 19,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "9.54 LPA",
    highestPackage: "34.4 LPA",
    nirfRank: 35,
    accreditations: "NAAC Grade A+, UGC, IIRF, AICTE",
    feeMin: "₹31,180",
    feeMax: "₹1,25,000",
    topRecruiters: ["Apollo", "Accenture", "Infosys", "TCS", "Wipro"],
  },
  {
    id: 3,
    name: "Amity School of Distance Education",
    shortName: "Amity DE",
    location: "Noida, New Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Amity_University_logo.svg/200px-Amity_University_logo.svg.png",
    type: "Private",
    established: 1995,
    totalStudents: 35000,
    coursesOffered: 25,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "8.20 LPA",
    highestPackage: "28 LPA",
    nirfRank: 28,
    accreditations: "NAAC Grade A+, UGC, AICTE",
    feeMin: "₹45,000",
    feeMax: "₹1,50,000",
    topRecruiters: ["Deloitte", "KPMG", "Amazon", "Flipkart", "Microsoft"],
  },
  {
    id: 4,
    name: "IGNOU",
    shortName: "IGNOU",
    location: "New Delhi, Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/IGNOU_logo.png/200px-IGNOU_logo.png",
    type: "Government",
    established: 1985,
    totalStudents: 300000,
    coursesOffered: 60,
    locationType: "Urban",
    affiliatedUniversity: "Central University",
    avgPackage: "5.50 LPA",
    highestPackage: "18 LPA",
    nirfRank: 18,
    accreditations: "NAAC Grade A, UGC, DEB",
    feeMin: "₹5,000",
    feeMax: "₹50,000",
    topRecruiters: ["Government", "NGOs", "IBM", "HCL", "Tech Mahindra"],
  },
  {
    id: 5,
    name: "Symbiosis Centre for Distance Learning",
    shortName: "SCDL",
    location: "Pune, Maharashtra",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Symbiosis_International_University_logo.svg/200px-Symbiosis_International_University_logo.svg.png",
    type: "Private",
    established: 2001,
    totalStudents: 90000,
    coursesOffered: 30,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "7.80 LPA",
    highestPackage: "25 LPA",
    nirfRank: 22,
    accreditations: "NAAC Grade A, UGC, DEB, AICTE",
    feeMin: "₹25,000",
    feeMax: "₹80,000",
    topRecruiters: ["Bajaj", "HDFC", "ICICI", "Infosys", "Cognizant"],
  },
  {
    id: 6,
    name: "Manipal University Online",
    shortName: "Manipal Online",
    location: "Manipal, Karnataka",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Manipal_University_Logo.svg/200px-Manipal_University_Logo.svg.png",
    type: "Private",
    established: 2000,
    totalStudents: 50000,
    coursesOffered: 22,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "8.90 LPA",
    highestPackage: "30 LPA",
    nirfRank: 20,
    accreditations: "NAAC Grade A++, UGC, AICTE",
    feeMin: "₹55,000",
    feeMax: "₹1,80,000",
    topRecruiters: ["Google", "Microsoft", "Amazon", "Infosys", "Wipro"],
  },
  {
    id: 7,
    name: "Alagappa University Distance Education",
    shortName: "Alagappa DE",
    location: "Karaikudi, Tamil Nadu",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Alagappa_University_logo.png/200px-Alagappa_University_logo.png",
    type: "Government",
    established: 1985,
    totalStudents: 40000,
    coursesOffered: 35,
    locationType: "Semi-Urban",
    affiliatedUniversity: "State University",
    avgPackage: "4.80 LPA",
    highestPackage: "15 LPA",
    nirfRank: 45,
    accreditations: "NAAC Grade A, UGC, DEB",
    feeMin: "₹8,000",
    feeMax: "₹40,000",
    topRecruiters: ["TCS", "Infosys", "State Govt", "HCL", "Wipro"],
  },
];

const POPULAR_COLLEGES = [
  {
    name: "Alagappa University's Directorate of Distance Education",
    location: "Karaikudi, Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Alagappa_University_front_view.jpg/320px-Alagappa_University_front_view.jpg",
    url: "https://www.alagappauniversity.ac.in/directorate-of-distance-education.php",
  },
  {
    name: "Amity School of Distance Education",
    location: "Noida, New Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Amity_University_Campus.jpg/320px-Amity_University_Campus.jpg",
    url: "https://amity.edu/asodl/",
  },
  {
    name: "IGNOU – Indira Gandhi National Open University",
    location: "New Delhi, Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Indira_Gandhi_National_Open_University_main_building.jpg/320px-Indira_Gandhi_National_Open_University_main_building.jpg",
    url: "https://www.ignou.ac.in/",
  },
  {
    name: "Symbiosis Centre for Distance Learning",
    location: "Pune, Maharashtra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Symbiosis_International_University.jpg/320px-Symbiosis_International_University.jpg",
    url: "https://www.scdl.net/",
  },
];

function getDomain(name: string) {
  const map: Record<string, string> = {
    "Anna Distance Education": "annauniv.edu",
    "CU Online": "cuchd.in",
    "Amity School of Distance Education": "amity.edu",
    "IGNOU": "ignou.ac.in",
    "Symbiosis Centre for Distance Learning": "scdl.net",
    "Manipal University Online": "manipal.edu",
    "Alagappa University Distance Education": "alagappauniversity.ac.in",
  };
  return map[name] || "";
}

// ─── Unique scope ID — change this if you have multiple instances ──────────
const SCOPE = "ccr"; // college-compare-root abbreviation

// ─── Scoped styles: every rule prefixed with .ccr ─────────────────────────
const SCOPED_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@400;500&display=swap');

  /* CSS custom properties scoped to this component only */
  .${SCOPE} {
    --ccr-orange: #e8621a;
    --ccr-orange-light: #f97316;
    --ccr-navy: #1a2744;
    --ccr-slate: #374151;
    --ccr-muted: #6b7280;
    --ccr-border: #e5e7eb;
    --ccr-bg: #f8f9fb;
    --ccr-white: #ffffff;
    --ccr-green: #16a34a;
    --ccr-tag-bg: #fff7ed;
    --ccr-tag-border: #fed7aa;
    --ccr-radius: 12px;
    --ccr-shadow: 0 2px 16px rgba(0,0,0,0.07);
    --ccr-shadow-lg: 0 8px 32px rgba(0,0,0,0.10);

    font-family: 'DM Sans', sans-serif;
    background: var(--ccr-bg);
    min-height: 100vh;
    color: var(--ccr-slate);
    box-sizing: border-box;
  }

  .${SCOPE} *, .${SCOPE} *::before, .${SCOPE} *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ── Breadcrumb ── */
  .${SCOPE} .breadcrumb {
    padding: 14px 24px;
    font-size: 13px;
    color: var(--ccr-muted);
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .${SCOPE} .breadcrumb a { color: var(--ccr-muted); text-decoration: none; }
  .${SCOPE} .breadcrumb a:hover { color: var(--ccr-orange); }
  .${SCOPE} .breadcrumb span { color: var(--ccr-slate); font-weight: 500; }

  /* ── Layout ── */
  .${SCOPE} .main-layout {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px 48px;
  }
  @media (max-width: 900px) {
    .${SCOPE} .main-layout { grid-template-columns: 1fr; }
  }

  /* ── Page heading ── */
  .${SCOPE} .page-heading {
    font-family: 'Sora', sans-serif;
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 700;
    color: var(--ccr-navy);
    margin-bottom: 8px;
  }
  .${SCOPE} .page-heading .accent { color: var(--ccr-orange); }
  .${SCOPE} .page-subtitle {
    font-size: 13.5px;
    color: var(--ccr-muted);
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 680px;
  }

  /* ── College cards row ── */
  .${SCOPE} .college-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 16px;
    background: var(--ccr-white);
    border-radius: var(--ccr-radius);
    padding: 24px;
    box-shadow: var(--ccr-shadow);
    margin-bottom: 20px;
  }
  .${SCOPE} .college-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  .${SCOPE} .college-logo-wrap {
    width: 80px; height: 80px;
    border: 2px solid var(--ccr-border);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
    background: var(--ccr-white);
    padding: 6px;
  }
  .${SCOPE} .college-logo-wrap img {
    width: 100%; height: 100%;
    object-fit: contain;
  }
  .${SCOPE} .college-name {
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--ccr-navy);
  }
  .${SCOPE} .college-loc {
    font-size: 12px;
    color: var(--ccr-muted);
  }
  .${SCOPE} .btn-edit {
    margin-top: 4px;
    padding: 6px 18px;
    border: 1.5px solid var(--ccr-border);
    border-radius: 6px;
    background: var(--ccr-white);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    color: var(--ccr-slate);
    display: flex; align-items: center; gap: 6px;
    transition: border-color .2s, color .2s;
  }
  .${SCOPE} .btn-edit:hover { border-color: var(--ccr-orange); color: var(--ccr-orange); }
  .${SCOPE} .vs-badge {
    width: 42px; height: 42px;
    background: var(--ccr-orange);
    color: var(--ccr-white);
    border-radius: 50%;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    font-size: 13px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* ── Compare button ── */
  .${SCOPE} .btn-compare {
    display: block;
    width: 100%;
    padding: 13px;
    background: var(--ccr-navy);
    color: var(--ccr-white);
    border: none;
    border-radius: 8px;
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: .3px;
    transition: background .2s, transform .1s;
    margin-bottom: 28px;
  }
  .${SCOPE} .btn-compare:hover { background: var(--ccr-orange); transform: translateY(-1px); }

  /* ── Comparison sections ── */
  .${SCOPE} .section-card {
    background: var(--ccr-white);
    border-radius: var(--ccr-radius);
    box-shadow: var(--ccr-shadow);
    margin-bottom: 20px;
    overflow: hidden;
    animation: ccr-fadeIn .4s ease;
  }
  @keyframes ccr-fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: none; }
  }

  .${SCOPE} .section-title {
    background: var(--ccr-navy);
    color: var(--ccr-white);
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding: 12px 20px;
    letter-spacing: .3px;
  }

  .${SCOPE} .comp-row {
    display: grid;
    grid-template-columns: 2fr 1.5fr 1.5fr;
    padding: 13px 20px;
    border-bottom: 1px solid var(--ccr-border);
    font-size: 13.5px;
    align-items: center;
  }
  .${SCOPE} .comp-row:last-child { border-bottom: none; }
  .${SCOPE} .comp-label { color: var(--ccr-muted); }
  .${SCOPE} .comp-val { font-weight: 600; color: var(--ccr-navy); text-align: right; }
  .${SCOPE} .comp-val:first-of-type { text-align: center; }

  /* recruiters */
  .${SCOPE} .rec-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 16px 20px;
  }
  .${SCOPE} .rec-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .${SCOPE} .rec-tag {
    background: var(--ccr-tag-bg);
    border: 1px solid var(--ccr-tag-border);
    color: var(--ccr-orange);
    font-size: 11.5px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* shortlist buttons */
  .${SCOPE} .shortlist-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    padding: 16px 20px;
  }
  .${SCOPE} .btn-shortlist {
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    font-size: 13.5px;
    cursor: pointer;
    transition: opacity .2s;
  }
  .${SCOPE} .btn-shortlist:hover { opacity: .85; }
  .${SCOPE} .btn-shortlist.dark { background: var(--ccr-navy); color: var(--ccr-white); }
  .${SCOPE} .btn-shortlist.amber { background: var(--ccr-orange); color: var(--ccr-white); }

  /* ── CTA Banner ── */
  .${SCOPE} .cta-banner {
    background: var(--ccr-navy);
    border-radius: var(--ccr-radius);
    padding: 28px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    overflow: hidden;
    position: relative;
  }
  .${SCOPE} .cta-text h4 {
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--ccr-white);
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .${SCOPE} .btn-cta {
    padding: 9px 20px;
    background: var(--ccr-white);
    color: var(--ccr-navy);
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
  }
  .${SCOPE} .cta-img {
    width: 90px;
    flex-shrink: 0;
    margin-left: auto;
  }
  .${SCOPE} .cta-img img { width: 100%; }

  /* ── Right sidebar ── */
  .${SCOPE} .sidebar-title {
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--ccr-navy);
    margin-bottom: 14px;
  }
  .${SCOPE} .popular-card {
    background: var(--ccr-white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--ccr-shadow);
    margin-bottom: 14px;
    text-decoration: none;
    display: block;
    transition: box-shadow .2s, transform .15s;
  }
  .${SCOPE} .popular-card:hover { box-shadow: var(--ccr-shadow-lg); transform: translateY(-2px); }
  .${SCOPE} .popular-card img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    display: block;
  }
  .${SCOPE} .popular-card-body { padding: 10px 12px; }
  .${SCOPE} .popular-card-name {
    font-size: 13px;
    font-weight: 600;
    color: var(--ccr-navy);
    line-height: 1.4;
    margin-bottom: 4px;
  }
  .${SCOPE} .popular-card-loc { font-size: 11.5px; color: var(--ccr-muted); }

  /* ── Modal — portal-mounted, so scoped via .ccr-modal wrapper ── */
  .ccr-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    font-family: 'DM Sans', sans-serif;
  }
  .ccr-modal-box {
    background: #ffffff;
    border-radius: 14px;
    width: 100%;
    max-width: 460px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
    overflow: hidden;
    animation: ccr-fadeIn .25s ease;
  }
  .ccr-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
    background: #1a2744;
  }
  .ccr-modal-header h3 {
    font-family: 'Sora', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }
  .ccr-modal-close {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #ffffff;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .ccr-modal-close:hover { background: rgba(255,255,255,.15); }
  .ccr-modal-list {
    max-height: 420px;
    overflow-y: auto;
    padding: 8px 0;
  }
  .ccr-modal-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 20px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background .15s;
    box-sizing: border-box;
  }
  .ccr-modal-item:hover { background: #f8f9fb; }
  .ccr-modal-item.active { background: #fff7ed; }
  .ccr-modal-logo {
    width: 40px; height: 40px;
    border-radius: 8px;
    object-fit: contain;
    border: 1px solid #e5e7eb;
    flex-shrink: 0;
    background: #ffffff;
    padding: 3px;
  }
  .ccr-modal-info { flex: 1; }
  .ccr-modal-name { display: block; font-size: 13.5px; font-weight: 600; color: #1a2744; }
  .ccr-modal-loc  { display: block; font-size: 12px; color: #6b7280; margin-top: 2px; }
  .ccr-modal-check { color: #16a34a; font-size: 16px; font-weight: 700; }

  @media (max-width: 600px) {
    .${SCOPE} .main-layout { padding: 0 12px 40px; }
    .${SCOPE} .college-row { grid-template-columns: 1fr auto 1fr; gap: 8px; padding: 16px 12px; }
    .${SCOPE} .comp-row { grid-template-columns: 1.5fr 1fr 1fr; font-size: 12px; padding: 10px 12px; }
    .${SCOPE} .rec-row { grid-template-columns: 1fr; }
    .${SCOPE} .shortlist-row { gap: 10px; }
  }
`;

// ─── Comparison Row helper ─────────────────────────────────────────────────

function CompRow({ label, valA, valB }: { label: string; valA: string | number; valB: string | number }) {
  return (
    <div className="comp-row">
      <span className="comp-label">{label}</span>
      <span className="comp-val">{valA}</span>
      <span className="comp-val">{valB}</span>
    </div>
  );
}

// ─── College Picker Modal ──────────────────────────────────────────────────
// Note: Modal uses .ccr-modal-* classes (not nested under .ccr) because
// it may be portaled. All selectors are unique enough to avoid leaking.

function CollegePickerModal({
  current,
  onSelect,
  onClose,
}: {
  current: number;
  onSelect: (id: number) => void;
  onClose: () => void;
}) {
  return (
    <div className="ccr-modal-overlay" onClick={onClose}>
      <div className="ccr-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="ccr-modal-header">
          <h3>Select a College</h3>
          <button className="ccr-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="ccr-modal-list">
          {COLLEGES.map((c) => (
            <button
              key={c.id}
              className={`ccr-modal-item ${c.id === current ? "active" : ""}`}
              onClick={() => { onSelect(c.id); onClose(); }}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="ccr-modal-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=" + encodeURIComponent(c.shortName[0]) + "&background=1a2744&color=fff&size=80";
                }}
              />
              <div className="ccr-modal-info">
                <span className="ccr-modal-name">{c.name}</span>
                <span className="ccr-modal-loc">📍 {c.location}</span>
              </div>
              {c.id === current && <span className="ccr-modal-check">✔</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

export default function Component5Desktop() {
  const [leftId, setLeftId] = useState(1);
  const [rightId, setRightId] = useState(2);
  const [showComparison, setShowComparison] = useState(false);
  const [editingSide, setEditingSide] = useState<"left" | "right" | null>(null);
  const comingSoon = () => alert("🚧 Feature coming soon!");

  const left = COLLEGES.find((c) => c.id === leftId)!;
  const right = COLLEGES.find((c) => c.id === rightId)!;

  return (
    <>
      {/* Styles are injected once and scoped entirely to .ccr */}
      <style>{SCOPED_CSS}</style>

      {/* Root wrapper carries the scope class — all styles hang off it */}
      <div className={SCOPE}>
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <a href="#">🏠</a>
          <span>›</span>
          <a href="#">Compare Colleges</a>
          {showComparison && (
            <>
              <span>›</span>
              <span>{left.shortName} vs {right.shortName}</span>
            </>
          )}
        </div>

        <div className="main-layout">
          {/* ── Left / Main content ── */}
          <div>
            <h1 className="page-heading">
              {showComparison ? (
                <>
                  <span className="accent">{left.name}</span>
                  {" "}<span style={{ color: "var(--ccr-orange)" }}>Vs</span>{" "}
                  {right.name}
                </>
              ) : (
                <><span className="accent">Compare</span> Top Colleges in India</>
              )}
            </h1>
            <p className="page-subtitle">
              Select any two colleges from the "Edit" buttons below to begin your comparison.
              Once selected, you can evaluate them side by side based on important factors such as
              fees, key highlights, courses offered, rankings, approvals, placements, and more.
            </p>

            {/* ── Selector row ── */}
            <div className="college-row">
              <div className="college-card">
                <div className="college-logo-wrap">
                  <img
                    src={left.logo}
                    alt={left.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(left.shortName)}&background=1a2744&color=fff&size=80`;
                    }}
                  />
                </div>
                <div>
                  <div className="college-name">{left.name}</div>
                  <div className="college-loc">📍 {left.location}</div>
                </div>
                <button className="btn-edit" onClick={() => setEditingSide("left")}>
                  Edit ✏️
                </button>
              </div>

              <div className="vs-badge">Vs</div>

              <div className="college-card">
                <div className="college-logo-wrap">
                  <img
                    src={right.logo}
                    alt={right.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(right.shortName)}&background=1a2744&color=fff&size=80`;
                    }}
                  />
                </div>
                <div>
                  <div className="college-name">{right.name}</div>
                  <div className="college-loc">📍 {right.location}</div>
                </div>
                <button className="btn-edit" onClick={() => setEditingSide("right")}>
                  Edit ✏️
                </button>
              </div>
            </div>

            {/* Compare CTA */}
            {!showComparison && (
              <button className="btn-compare" onClick={() => setShowComparison(true)}>
                Compare →
              </button>
            )}

            {/* ── Comparison data ── */}
            {showComparison && (
              <>
                <div className="section-card">
                  <div className="section-title">Institute Information</div>
                  <CompRow label="College Type-" valA={left.type} valB={right.type} />
                  <CompRow label="Established Year-" valA={left.established} valB={right.established} />
                  <CompRow label="Total Students-" valA={left.totalStudents.toLocaleString()} valB={right.totalStudents.toLocaleString()} />
                  <CompRow label="Courses Offered-" valA={left.coursesOffered} valB={right.coursesOffered} />
                  <CompRow label="Location Type-" valA={left.locationType} valB={right.locationType} />
                  <CompRow label="Affiliated University-" valA={left.affiliatedUniversity} valB={right.affiliatedUniversity} />
                </div>

                <div className="section-card">
                  <div className="section-title">Placements</div>
                  <CompRow label="Average Package-" valA={left.avgPackage} valB={right.avgPackage} />
                  <CompRow label="Highest Package-" valA={left.highestPackage} valB={right.highestPackage} />
                </div>

                <div className="section-card">
                  <div className="section-title">Top Recruiters</div>
                  <div className="rec-row">
                    <div className="rec-list">
                      {left.topRecruiters.map((r) => <span key={r} className="rec-tag">{r}</span>)}
                    </div>
                    <div className="rec-list">
                      {right.topRecruiters.map((r) => <span key={r} className="rec-tag">{r}</span>)}
                    </div>
                  </div>
                </div>

                <div className="section-card">
                  <div className="section-title">Rankings &amp; Accreditations</div>
                  <CompRow label="NIRF Rank-" valA={`#${left.nirfRank}`} valB={`#${right.nirfRank}`} />
                  <CompRow label="Accreditations-" valA={left.accreditations} valB={right.accreditations} />
                </div>

                <div className="section-card">
                  <div className="section-title">Fee Range</div>
                  <CompRow
                    label="Total Fee Range (Approx.)-"
                    valA={`${left.feeMin} – ${left.feeMax}`}
                    valB={`${right.feeMin} – ${right.feeMax}`}
                  />
                </div>

                <div className="section-card">
                  <div className="shortlist-row">
                    <button className="btn-shortlist dark" onClick={comingSoon}>Shortlist</button>
                    <button className="btn-shortlist amber" onClick={comingSoon}>Shortlist</button>
                  </div>
                </div>

                <button
                  className="btn-compare"
                  style={{ background: "var(--ccr-muted)", marginTop: 0 }}
                  onClick={() => setShowComparison(false)}
                >
                  ↺ Reset Comparison
                </button>
              </>
            )}

            {/* CTA banner */}
            <div className="cta-banner">
              <div className="cta-text">
                <h4>Still not Sure about colleges?<br />Let's Connect with our Experts.</h4>
                <button className="btn-cta" onClick={comingSoon}>Connect Now</button>
              </div>
              <div className="cta-img">
                <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="expert" />
              </div>
            </div>
          </div>

          {/* ── Right Sidebar ── */}
          <aside className="sidebar">
            <p className="sidebar-title">Explore Some Popular colleges-</p>
            {POPULAR_COLLEGES.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="popular-card"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(c.name.slice(0, 2))}&background=1a2744&color=fff&size=200`;
                  }}
                />
                <div className="popular-card-body">
                  <div className="popular-card-name">{c.name}</div>
                  <div className="popular-card-loc">📍 {c.location}</div>
                </div>
              </a>
            ))}
          </aside>
        </div>
      </div>

      {/* ── College Picker Modal ── */}
      {editingSide && (
        <CollegePickerModal
          current={editingSide === "left" ? leftId : rightId}
          onSelect={(id) => {
            if (editingSide === "left") { setLeftId(id); } else { setRightId(id); }
            setShowComparison(false);
          }}
          onClose={() => setEditingSide(null)}
        />
      )}
    </>
  );
}
