"use client";

import { useState } from "react";
import Header from "./HeaderDesktop";

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
    image: "https://picsum.photos/400/250?random=11",
    url: "https://www.alagappauniversity.ac.in/directorate-of-distance-education.php",
  },
  {
    name: "Amity School of Distance Education",
    location: "Noida, New Delhi",
    image: "https://picsum.photos/400/250?random=12",
    url: "https://amity.edu/asodl/",
  },
  {
    name: "IGNOU – Indira Gandhi National Open University",
    location: "New Delhi, Delhi",
    image: "https://picsum.photos/400/250?random=13",
    url: "https://www.ignou.ac.in/",
  },
  {
    name: "Symbiosis Centre for Distance Learning",
    location: "Pune, Maharashtra",
    image: "https://picsum.photos/400/250?random=14",
    url: "https://www.scdl.net/",
  },
];

// ─── Comparison Row helper ─────────────────────────────────────────────────

function CompRow({
  label,
  valA,
  valB,
}: {
  label: string;
  valA: string | number;
  valB: string | number;
}) {
  return (
    <div className="comp-row">
      <span className="comp-label">{label}</span>
      <span className="comp-val">{valA}</span>
      <span className="comp-val">{valB}</span>
    </div>
  );
}

// ─── College Picker Modal ──────────────────────────────────────────────────

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Select a College</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-list">
          {COLLEGES.map((c) => (
            <button
              key={c.id}
              className={`modal-item ${c.id === current ? "active" : ""}`}
              onClick={() => { onSelect(c.id); onClose(); }}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="modal-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/40x40?text=" + c.shortName[0];
                }}
              />
              <div className="modal-info">
                <span className="modal-name">{c.name}</span>
                <span className="modal-loc">📍 {c.location}</span>
              </div>
              {c.id === current && <span className="modal-check">✔</span>}
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

  const left = COLLEGES.find((c) => c.id === leftId)!;
  const right = COLLEGES.find((c) => c.id === rightId)!;

  const handleCompare = () => setShowComparison(true);

  return (
      <>
      <style jsx>{`

        .page-wrap {
          background: var(--bg);
          min-height: 100vh;
          color: var(--slate);
        }

        /* ── Breadcrumb ── */
        .breadcrumb {
          padding: 14px 24px;
          font-size: 13px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .breadcrumb a { color: var(--muted); text-decoration: none; }
        .breadcrumb a:hover { color: var(--orange); }
        .breadcrumb span { color: var(--slate); font-weight: 500; }

        /* ── Layout ── */
        .main-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 48px;
  align-items: start;
  width: 100%;
}
        @media (max-width: 900px) {
          .main-layout { grid-template-columns: 1fr; }
        }

        /* ── Page heading ── */
        .page-heading {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .page-heading .accent { color: var(--orange); }
        .page-subtitle {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 680px;
        }

        /* ── College cards row ── */
        .college-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
          background: var(--white);
          border-radius: var(--radius);
          padding: 24px;
          box-shadow: var(--shadow);
          margin-bottom: 20px;
        }
        .college-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .college-logo-wrap {
          width: 80px; height: 80px;
          border: 2px solid var(--border);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          background: var(--white);
          padding: 6px;
        }
        .college-logo-wrap img {
          width: 100%; height: 100%;
          object-fit: contain;
        }
        .college-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--navy);
        }
        .college-loc {
          font-size: 12px;
          color: var(--muted);
        }
        .btn-edit {
          margin-top: 4px;
          padding: 6px 18px;
          border: 1.5px solid var(--border);
          border-radius: 6px;
          background: var(--white);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          color: var(--slate);
          display: flex; align-items: center; gap: 6px;
          transition: border-color .2s, color .2s;
        }
        .btn-edit:hover { border-color: var(--orange); color: var(--orange); }
        .vs-badge {
          width: 42px; height: 42px;
          background: var(--orange);
          color: var(--white);
          border-radius: 50%;
          font-weight: 700;
          font-size: 13px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── Compare button ── */
        .btn-compare {
          display: block;
          width: 100%;
          padding: 13px;
          background: var(--navy);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: .3px;
          transition: background .2s, transform .1s;
          margin-bottom: 28px;
        }
        .btn-compare:hover { background: var(--orange); transform: translateY(-1px); }

        /* ── Comparison sections ── */
        .section-card {
          background: var(--white);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          margin-bottom: 20px;
          overflow: hidden;
          animation: fadeIn .4s ease;
        }
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }

        .section-title {
          background: var(--navy);
          color: var(--white);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 20px;
          letter-spacing: .3px;
        }

        .comp-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr;
          padding: 13px 20px;
          border-bottom: 1px solid var(--border);
          font-size: 13.5px;
          align-items: center;
        }
        .comp-row:last-child { border-bottom: none; }
        .comp-label { color: var(--muted); }
        .comp-val { font-weight: 600; color: var(--navy); text-align: right; }
        .comp-val:first-of-type { text-align: center; }

        /* recruiters */
        .rec-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 16px 20px;
        }
        .rec-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .rec-tag {
          background: var(--tag-bg);
          border: 1px solid var(--tag-border);
          color: var(--orange);
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
        }

        /* shortlist buttons */
        .shortlist-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px 20px;
        }
        .btn-shortlist {
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          font-size: 13.5px;
          cursor: pointer;
          transition: opacity .2s;
        }
        .btn-shortlist:hover { opacity: .85; }
        .btn-shortlist.dark { background: var(--navy); color: var(--white); }
        .btn-shortlist.amber { background: var(--orange); color: var(--white); }

        /* ── CTA Banner ── */
        .cta-banner {
          background: var(--navy);
          border-radius: var(--radius);
          padding: 28px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          overflow: hidden;
          position: relative;
        }
        .cta-text h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .btn-cta {
          padding: 9px 20px;
          background: var(--white);
          color: var(--navy);
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
        }
        .cta-img {
          width: 90px;
          flex-shrink: 0;
          margin-left: auto;
        }
        .cta-img img { width: 100%; }

        /* ── Right sidebar ── */
        .sidebar { }
        .sidebar-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 14px;
        }
        .popular-card {
          background: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          margin-bottom: 14px;
          text-decoration: none;
          display: block;
          transition: box-shadow .2s, transform .15s;
        }
        .popular-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
        .popular-card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          display: block;
          background: #f1f5f9;
        }
        
        .popular-card-body {
          padding: 10px 12px;
        }
        .popular-card-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .popular-card-loc {
          font-size: 11.5px;
          color: var(--muted);
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-box {
          background: var(--white);
          border-radius: 14px;
          width: 100%;
          max-width: 460px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          animation: fadeIn .25s ease;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          background: var(--navy);
        }
        .modal-header h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--white);
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          color: var(--white);
          line-height: 1;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .modal-close:hover { background: rgba(255,255,255,.15); }
        .modal-list {
          max-height: 420px;
          overflow-y: auto;
          padding: 8px 0;
        }
        .modal-item {
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
        }
        .modal-item:hover { background: var(--bg); }
        .modal-item.active { background: var(--tag-bg); }
        .modal-logo {
          width: 40px; height: 40px;
          border-radius: 8px;
          object-fit: contain;
          border: 1px solid var(--border);
          flex-shrink: 0;
          background: var(--white);
          padding: 3px;
        }
        .modal-info { flex: 1; }
        .modal-name { display: block; font-size: 13.5px; font-weight: 600; color: var(--navy); }
        .modal-loc { display: block; font-size: 12px; color: var(--muted); margin-top: 2px; }
        .modal-check { color: var(--green); font-size: 16px; font-weight: 700; }

        @media (max-width: 600px) {
          .main-layout { padding: 0 12px 40px; }
          .college-row { grid-template-columns: 1fr auto 1fr; gap: 8px; padding: 16px 12px; }
          .comp-row { grid-template-columns: 1.5fr 1fr 1fr; font-size: 12px; padding: 10px 12px; }
          .rec-row { grid-template-columns: 1fr; }
          .shortlist-row { gap: 10px; }
        }
      `}</style>
          <Header/>
  
      <div className="page-wrap">
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
                  {" "}<span style={{ color: "var(--orange)" }}>Vs</span>{" "}
                  {right.name}
                </>
              ) : (
                <>
                  <span className="accent">Compare</span> Top Colleges in India
                </>
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
                    src={`https://logos.hunter.io/${new URL(left.logo).hostname}`}
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
                    src={`https://logos.hunter.io/${new URL(right.logo).hostname}`}
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
              <button className="btn-compare" onClick={handleCompare}>
                Compare →
              </button>
            )}

            {/* ── Comparison data (revealed on Compare click) ── */}
            {showComparison && (
              <>
                {/* Institute Info */}
                <div className="section-card">
                  <div className="section-title">Institute Information</div>
                  <CompRow label="College Type-" valA={left.type} valB={right.type} />
                  <CompRow label="Established Year-" valA={left.established} valB={right.established} />
                  <CompRow label="Total Students-" valA={left.totalStudents.toLocaleString()} valB={right.totalStudents.toLocaleString()} />
                  <CompRow label="Courses Offered-" valA={left.coursesOffered} valB={right.coursesOffered} />
                  <CompRow label="Location Type-" valA={left.locationType} valB={right.locationType} />
                  <CompRow label="Affiliated University-" valA={left.affiliatedUniversity} valB={right.affiliatedUniversity} />
                </div>

                {/* Placements */}
                <div className="section-card">
                  <div className="section-title">Placements</div>
                  <CompRow label="Average Package-" valA={left.avgPackage} valB={right.avgPackage} />
                  <CompRow label="Highest Package-" valA={left.highestPackage} valB={right.highestPackage} />
                </div>

                {/* Top Recruiters */}
                <div className="section-card">
                  <div className="section-title">Top Recruiters</div>
                  <div className="rec-row">
                    <div className="rec-list">
                      {left.topRecruiters.map((r) => (
                        <span key={r} className="rec-tag">{r}</span>
                      ))}
                    </div>
                    <div className="rec-list">
                      {right.topRecruiters.map((r) => (
                        <span key={r} className="rec-tag">{r}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rankings */}
                <div className="section-card">
                  <div className="section-title">Rankings &amp; Accreditations</div>
                  <CompRow label="NIRF Rank-" valA={`#${left.nirfRank}`} valB={`#${right.nirfRank}`} />
                  <CompRow label="Accreditations-" valA={left.accreditations} valB={right.accreditations} />
                </div>

                {/* Fee Range */}
                <div className="section-card">
                  <div className="section-title">Fee Range</div>
                  <CompRow
                    label="Total Fee Range (Approx.)-"
                    valA={`${left.feeMin} – ${left.feeMax}`}
                    valB={`${right.feeMin} – ${right.feeMax}`}
                  />
                </div>

                {/* Shortlist */}
                <div className="section-card">
                  <div className="shortlist-row">
                    <button className="btn-shortlist dark">Shortlist</button>
                    <button className="btn-shortlist amber">Shortlist</button>
                  </div>
                </div>

                {/* Reset button */}
                <button
                  className="btn-compare"
                  style={{ background: "var(--muted)", marginTop: 0 }}
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
                <button className="btn-cta">Connect Now</button>
              </div>
              <div className="cta-img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  alt="expert"
                />
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
            if (editingSide === "left") {
              setLeftId(id);
              setShowComparison(false);
            } else {
              setRightId(id);
              setShowComparison(false);
            }
          }}
          onClose={() => setEditingSide(null)}
        />
      )}
    </>
  );
}