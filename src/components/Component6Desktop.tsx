"use client";

import { useState, useCallback } from "react";

// ─── Shared College Data ───────────────────────────────────────────────────────

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
    name: "LPU Online",
    shortName: "LPU Online",
    location: "Jalandhar, Punjab",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Lovely_Professional_University_logo.svg/200px-Lovely_Professional_University_logo.svg.png",
    type: "Private",
    established: 2005,
    totalStudents: 80000,
    coursesOffered: 28,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "7.20 LPA",
    highestPackage: "22 LPA",
    nirfRank: 30,
    accreditations: "NAAC Grade A+, UGC, AICTE",
    feeMin: "₹20,000",
    feeMax: "₹90,000",
    topRecruiters: ["TCS", "Wipro", "Infosys", "HCL", "Cognizant"],
  },
];

// ─── Sidebar popular colleges (matching image) ────────────────────────────────

const POPULAR_COLLEGES = [
  {
    name: "Alagappa University's Directorate of Distance Educati...",
    location: "Karaikudi, Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Alagappa_University_front_view.jpg/320px-Alagappa_University_front_view.jpg",
    url: "https://www.alagappauniversity.ac.in/directorate-of-distance-education.php",
  },
  {
    name: "Amity School of Distance Education...",
    location: "Noida, New Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Amity_University_Campus.jpg/320px-Amity_University_Campus.jpg",
    url: "https://amity.edu/asodl/",
  },
  {
    name: "Amity School of Distance Education...",
    location: "Noida, New Delhi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Amity_University_Campus.jpg/320px-Amity_University_Campus.jpg",
    url: "https://amity.edu/asodl/",
  },
];

// ─── Carousel pair data ───────────────────────────────────────────────────────

const PAIRS_ANNA = [
  { aId: 4, bId: 7 },
  { aId: 5, bId: 6 },
  { aId: 2, bId: 3 },
  { aId: 4, bId: 5 },
];

const PAIRS_CU = [
  { aId: 4, bId: 7 },
  { aId: 3, bId: 5 },
  { aId: 1, bId: 6 },
  { aId: 4, bId: 6 },
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What programs does IGNOU offer?",
    a: "IGNOU offers a wide range of programs including undergraduate, postgraduate, diploma, and certificate courses across multiple disciplines such as arts, science, management, IT, and healthcare.",
  },
  {
    q: "Can working professionals pursue IGNOU programs?",
    a: "Yes, IGNOU is specifically designed for working professionals. Its flexible distance learning model allows students to study at their own pace without affecting their work commitments.",
  },
  {
    q: "Is an Online MBA in Marketing enough to become a marketing manager?",
    a: "An Online MBA in Marketing provides a strong foundation. Combined with relevant experience, it can certainly qualify you for a marketing manager position.",
  },
  {
    q: "Is an Online MBA in Marketing enough to become a marketing manager?",
    a: "Many employers today treat online MBAs from accredited institutions on par with traditional degrees, especially when supported by UGC recognition and industry exposure.",
  },
  {
    q: "Is an Online MBA in Marketing enough to become a marketing manager?",
    a: "While the degree is important, soft skills like leadership, communication, and analytical thinking are equally valued by employers for managerial roles.",
  },
];

// ─── Comparison Panel ─────────────────────────────────────────────────────────

function CompRow({ label, valA, valB }: { label: string; valA: string | number; valB: string | number }) {
  return (
    <div className="c6-crow">
      <span className="c6-clabel">{label}</span>
      <span className="c6-cval">{valA}</span>
      <span className="c6-cval">{valB}</span>
    </div>
  );
}

function ComparisonPanel({ aId, bId, onClose }: { aId: number; bId: number; onClose: () => void }) {
  const a = COLLEGES.find((c) => c.id === aId)!;
  const b = COLLEGES.find((c) => c.id === bId)!;
  const fb = (name: string, col: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${col}&color=fff&size=80`;

  return (
    <div className="c6-cpanel">
      {/* Header */}
      <div className="c6-cpanel-hdr">
        <div className="c6-cpanel-side">
          <img src={a.logo} alt={a.name} onError={(e) => { (e.target as HTMLImageElement).src = fb(a.shortName, "1a2744"); }} />
          <div>
            <div className="c6-cpanel-hname">{a.name}</div>
            <div className="c6-cpanel-hloc">📍 {a.location}</div>
          </div>
        </div>
        <div className="c6-cpanel-vsbadge">Vs</div>
        <div className="c6-cpanel-side c6-cpanel-side-r">
          <div>
            <div className="c6-cpanel-hname">{b.name}</div>
            <div className="c6-cpanel-hloc">📍 {b.location}</div>
          </div>
          <img src={b.logo} alt={b.name} onError={(e) => { (e.target as HTMLImageElement).src = fb(b.shortName, "e8621a"); }} />
        </div>
      </div>

      {/* Institute Info */}
      <div className="c6-csec">
        <div className="c6-csec-title">Institute Information</div>
        <CompRow label="College Type-" valA={a.type} valB={b.type} />
        <CompRow label="Established Year-" valA={a.established} valB={b.established} />
        <CompRow label="Total Students-" valA={a.totalStudents.toLocaleString()} valB={b.totalStudents.toLocaleString()} />
        <CompRow label="Courses Offered-" valA={a.coursesOffered} valB={b.coursesOffered} />
        <CompRow label="Location Type-" valA={a.locationType} valB={b.locationType} />
        <CompRow label="Affiliated University-" valA={a.affiliatedUniversity} valB={b.affiliatedUniversity} />
      </div>

      {/* Placements */}
      <div className="c6-csec">
        <div className="c6-csec-title">Placements</div>
        <CompRow label="Average Package-" valA={a.avgPackage} valB={b.avgPackage} />
        <CompRow label="Highest Package-" valA={a.highestPackage} valB={b.highestPackage} />
      </div>

      {/* Top Recruiters */}
      <div className="c6-csec">
        <div className="c6-csec-title">Top Recruiters</div>
        <div className="c6-crec-grid">
          <div className="c6-crec-list">{a.topRecruiters.map((r) => <span key={r} className="c6-crec-tag">{r}</span>)}</div>
          <div className="c6-crec-list">{b.topRecruiters.map((r) => <span key={r} className="c6-crec-tag">{r}</span>)}</div>
        </div>
      </div>

      {/* Rankings */}
      <div className="c6-csec">
        <div className="c6-csec-title">Rankings &amp; Accreditations</div>
        <CompRow label="NIRF Rank-" valA={`#${a.nirfRank}`} valB={`#${b.nirfRank}`} />
        <CompRow label="Accreditations-" valA={a.accreditations} valB={b.accreditations} />
      </div>

      {/* Fee Range */}
      <div className="c6-csec">
        <div className="c6-csec-title">Fee Range</div>
        <CompRow label="Total Fee Range (Approx.)-" valA={`${a.feeMin} – ${a.feeMax}`} valB={`${b.feeMin} – ${b.feeMax}`} />
      </div>

      {/* Shortlist */}
      <div className="c6-cshortlist">
        <button className="c6-cbtn c6-cbtn-dark">Shortlist</button>
        <button className="c6-cbtn c6-cbtn-amber">Shortlist</button>
      </div>

      <button className="c6-cbtn-close" onClick={onClose}>↺ Close Comparison</button>
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function Carousel({ title, pairs, onCompare }: {
  title: string;
  pairs: { aId: number; bId: number }[];
  onCompare: (aId: number, bId: number) => void;
}) {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(pairs.length / perPage);
  const visible = pairs.slice(page * perPage, page * perPage + perPage);
  const peekPair = pairs[(page + 1) * perPage] || null;
  const fb = (name: string, col: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${col}&color=fff&size=60`;

  return (
    <section className="c6-carousel">
      <h3 className="c6-car-title">{title}</h3>
      <div className="c6-car-row">
        {/* Left arrow */}
        <button className="c6-arrow" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} aria-label="Previous">‹</button>

        {/* Track: 2 full cards + partial peek */}
        <div className="c6-car-track">
          {visible.map(({ aId, bId }) => {
            const a = COLLEGES.find((c) => c.id === aId)!;
            const b = COLLEGES.find((c) => c.id === bId)!;
            return (
              <div key={`${aId}-${bId}`} className="c6-car-card">
                <div className="c6-car-logos">
                  <div className="c6-car-logo-box">
                    <img src={a.logo} alt={a.name} onError={(e) => { (e.target as HTMLImageElement).src = fb(a.shortName, "1a2744"); }} />
                  </div>
                  <span className="c6-car-vs">Vs</span>
                  <div className="c6-car-logo-box">
                    <img src={b.logo} alt={b.name} onError={(e) => { (e.target as HTMLImageElement).src = fb(b.shortName, "e8621a"); }} />
                  </div>
                </div>
                <div className="c6-car-names">
                  <div>
                    <div className="c6-car-name">{a.name}</div>
                    <div className="c6-car-loc">📍 {a.location}</div>
                  </div>
                  <div>
                    <div className="c6-car-name">{b.name}</div>
                    <div className="c6-car-loc">📍 {b.location}</div>
                  </div>
                </div>
                <button className="c6-car-btn" onClick={() => onCompare(aId, bId)}>
                  Compare <span className="c6-car-chevron">›</span>
                </button>
              </div>
            );
          })}

          {/* Peek card */}
          {page < totalPages - 1 && peekPair && (() => {
            const a = COLLEGES.find((c) => c.id === peekPair.aId)!;
            const b = COLLEGES.find((c) => c.id === peekPair.bId)!;
            return (
              <div className="c6-car-card c6-car-peek" aria-hidden="true">
                <div className="c6-car-logos">
                  <div className="c6-car-logo-box">
                    <img src={a.logo} alt="" onError={(e) => { (e.target as HTMLImageElement).src = fb(a.shortName, "1a2744"); }} />
                  </div>
                  <span className="c6-car-vs">Vs</span>
                  <div className="c6-car-logo-box">
                    <img src={b.logo} alt="" onError={(e) => { (e.target as HTMLImageElement).src = fb(b.shortName, "e8621a"); }} />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Right arrow */}
        <button className="c6-arrow" onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} aria-label="Next">›</button>
      </div>

      {/* Dots */}
      <div className="c6-car-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} className={`c6-dot${i === page ? " c6-dot-on" : ""}`} onClick={() => setPage(i)} aria-label={`Page ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? FAQS : FAQS.slice(0, 5);

  return (
    <section className="c6-faq">
      <h3 className="c6-faq-title">Frequently Asked Questions-</h3>
      <div className="c6-faq-list">
        {items.map((f, i) => (
          <div key={i} className={`c6-faq-item${open === i ? " c6-faq-open" : ""}`}>
            <button className="c6-faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{i + 1}. {f.q}</span>
              <span className="c6-faq-icon">{open === i ? "∧" : "∨"}</span>
            </button>
            {open === i && <div className="c6-faq-a">{f.a}</div>}
          </div>
        ))}
      </div>
      {!showAll && (
        <div style={{ textAlign: "center", marginTop: 18 }}>
          <button className="c6-btn-viewmore" onClick={() => setShowAll(true)}>
            View more <span>∨</span>
          </button>
        </div>
      )}
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="c6-footer">
      <div className="c6-footer-grid">
        {/* Brand */}
        <div className="c6-footer-brand">
          <div className="c6-footer-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: 5, flexShrink: 0 }}>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#e8621a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color: "#fff" }}>Degree</span><span style={{ color: "#e8621a" }}>FYD</span>
          </div>
          <div className="c6-footer-contacts">
            <div className="c6-contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0, marginTop:2 }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" stroke="rgba(255,255,255,.6)" strokeWidth="2"/>
              </svg>
              9306508369
            </div>
            <div className="c6-contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0, marginTop:2 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="rgba(255,255,255,.6)" strokeWidth="2"/>
                <polyline points="22,6 12,13 2,6" stroke="rgba(255,255,255,.6)" strokeWidth="2"/>
              </svg>
              example@degreefyd.com
            </div>
            <div className="c6-contact-row">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0, marginTop:2 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="rgba(255,255,255,.6)" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="rgba(255,255,255,.6)" strokeWidth="2"/>
              </svg>
              Emaar The Palm Square, 309, Badshahpur, Sector 66, Gurugram, Haryana 122101
            </div>
          </div>
          <div className="c6-socials">
            {[
              { label:"Instagram", href:"https://instagram.com", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { label:"Facebook", href:"https://facebook.com", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              { label:"YouTube", href:"https://youtube.com", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
              { label:"LinkedIn", href:"https://linkedin.com", svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            ].map(({ label, href, svg }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="c6-social-btn">{svg}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="c6-footer-col">
          <h4 className="c6-fcol-title">Quick Links</h4>
          {["Home","About us","Contact us","Careers","Blogs","FAQs","Web stories"].map((l) => <a key={l} href="#" className="c6-flink">{l}</a>)}
        </div>

        {/* Tools & Research */}
        <div className="c6-footer-col">
          <h4 className="c6-fcol-title">Tools &amp; Research</h4>
          {["Compare Colleges","Career Counselling","College Finder","Scholarship Finder"].map((l) => <a key={l} href="#" className="c6-flink">{l}</a>)}
          <h4 className="c6-fcol-title" style={{ marginTop: 14 }}>Regular</h4>
          {["Top Colleges","Exams"].map((l) => <a key={l} href="#" className="c6-flink">{l}</a>)}
        </div>

        {/* Top Courses */}
        <div className="c6-footer-col">
          <h4 className="c6-fcol-title">Top Courses</h4>
          {["Online BCA","Online MA","Online MCA","Online MBA","Online Global MBA","Online BBA"].map((l) => <a key={l} href="#" className="c6-flink">{l}</a>)}
        </div>

        {/* Popular Universities */}
        <div className="c6-footer-col">
          <h4 className="c6-fcol-title">Popular Universities</h4>
          <a href="https://amityonline.com" target="_blank" rel="noopener noreferrer" className="c6-flink">Amity University Online</a>
          <a href="https://onlinemanipal.com" target="_blank" rel="noopener noreferrer" className="c6-flink">Manipal University Online</a>
          <a href="https://shooliniuniversity.com" target="_blank" rel="noopener noreferrer" className="c6-flink">Shoolini University Online</a>
          <a href="https://glauniversity.in" target="_blank" rel="noopener noreferrer" className="c6-flink">GLA University Online</a>
          <a href="https://vgu.ac.in" target="_blank" rel="noopener noreferrer" className="c6-flink">Vivekananda Global Uni...</a>
          <a href="https://cuchd.in" target="_blank" rel="noopener noreferrer" className="c6-flink">Chandigarh University...</a>
          <a href="https://lpuonline.in" target="_blank" rel="noopener noreferrer" className="c6-flink">Lovely Professional Univ...</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="c6-footer-bar">
        <span>© 2026 Nuvora Education Private Limited. All rights reserved.</span>
        <div className="c6-footer-bar-links">
          <a href="#" className="c6-fbarlink">Terms &amp; Conditions</a>
          <a href="#" className="c6-fbarlink">Privacy Policy</a>
          <a href="#" className="c6-fbarlink">Refund Policy</a>
          <a href="#" className="c6-fbarlink">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function Component6Desktop() {
  const [compareIds, setCompareIds] = useState<{ aId: number; bId: number } | null>(null);

  const handleCompare = useCallback((aId: number, bId: number) => {
    setCompareIds({ aId, bId });
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 30);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

.c6 {
  font-family: 'DM Sans', sans-serif;
  background: #f8f9fb;
  color: #374151;
  --o: #e8621a;
  --n: #1a2744;
  --s: #374151;
  --m: #6b7280;
  --bd: #e5e7eb;
  --bg: #f8f9fb;
  --w: #ffffff;
  --tbg: #fff7ed;
  --tbd: #fed7aa;
  --r: 12px;
  --sh: 0 2px 14px rgba(0,0,0,.07);
  --shlg: 0 6px 28px rgba(0,0,0,.10);
  box-sizing: border-box;
}

.c6 *, .c6 *::before, .c6 *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

        /* ── Page wrapper & 2-col layout ── */
        .c6-wrap{max-width:1100px;margin:0 auto;padding:0 24px;}
        .c6-layout{display:grid;grid-template-columns:1fr 260px;gap:24px;align-items:start;}
        @media(max-width:860px){.c6-layout{grid-template-columns:1fr;} .c6-sidebar{display:none!important;}}
        @media(max-width:600px){.c6-wrap{padding:0 12px;}}

        /* ── Comparison Panel ── */
        .c6-cpanel{background:var(--w);border-radius:var(--r);box-shadow:var(--shlg);overflow:hidden;margin-bottom:14px;animation:c6fs .4s ease both;}
        @keyframes c6fs{from{opacity:0;transform:translateY(-12px);}to{opacity:1;transform:none;}}
        .c6-cpanel-hdr{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;background:var(--n);padding:16px 20px;}
        .c6-cpanel-side{display:flex;align-items:center;gap:10px;}
        .c6-cpanel-side-r{flex-direction:row-reverse;}
        .c6-cpanel-side img{width:44px;height:44px;border-radius:8px;object-fit:contain;background:white;padding:4px;flex-shrink:0;}
        .c6-cpanel-hname{font-family:'Sora',sans-serif;font-size:13px;font-weight:600;color:white;line-height:1.3;}
        .c6-cpanel-hloc{font-size:11px;color:rgba(255,255,255,.55);margin-top:2px;}
        .c6-cpanel-vsbadge{width:34px;height:34px;border-radius:50%;background:var(--o);color:white;font-family:'Sora',sans-serif;font-weight:800;font-size:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .c6-csec{border-bottom:1px solid var(--bd);}
        .c6-csec:last-of-type{border:none;}
        .c6-csec-title{background:#f1f5f9;padding:10px 20px;font-family:'Sora',sans-serif;font-size:13px;font-weight:700;color:var(--n);}
        .c6-crow{display:grid;grid-template-columns:2fr 1.4fr 1.4fr;padding:11px 20px;border-bottom:1px solid #f3f4f6;font-size:13px;align-items:center;}
        .c6-crow:last-child{border:none;}
        .c6-clabel{color:var(--m);}
        .c6-cval{font-weight:600;color:var(--n);text-align:right;}
        .c6-crec-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:12px 20px;}
        .c6-crec-list{display:flex;flex-wrap:wrap;gap:6px;}
        .c6-crec-tag{background:var(--tbg);border:1px solid var(--tbd);color:var(--o);font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;}
        .c6-cshortlist{display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:14px 20px;}
        .c6-cbtn{padding:10px;border-radius:8px;border:none;font-family:'Sora',sans-serif;font-weight:600;font-size:13.5px;cursor:pointer;transition:opacity .2s;}
        .c6-cbtn:hover{opacity:.85;}
        .c6-cbtn-dark{background:var(--n);color:white;}
        .c6-cbtn-amber{background:var(--o);color:white;}
        .c6-cbtn-close{display:block;width:calc(100% - 40px);margin:0 20px 16px;padding:9px;border-radius:8px;border:1.5px solid var(--bd);background:none;font-size:13px;font-weight:600;color:var(--m);cursor:pointer;transition:border-color .2s,color .2s;}
        .c6-cbtn-close:hover{border-color:var(--o);color:var(--o);}
        @media(max-width:600px){
          .c6-cpanel-hdr{padding:12px;}
          .c6-cpanel-hname{font-size:11px;}
          .c6-crow{grid-template-columns:1.4fr 1fr 1fr;font-size:11.5px;padding:9px 12px;}
          .c6-crec-grid{grid-template-columns:1fr;}
        }

        /* ── Carousel ── */
        .c6-carousel{
          margin-bottom: 28px;
        }

        .c6-carousel:first-of-type{
          margin-top: -300px;
        }
        .c6-car-title{font-family:'Sora',sans-serif;font-size:clamp(14px,2vw,17px);font-weight:700;color:var(--n);margin-bottom:14px;}
        .c6-car-row{display:flex;align-items:center;gap:8px;}
        .c6-arrow{width:30px;height:30px;border-radius:50%;border:1.5px solid var(--bd);background:var(--w);font-size:20px;cursor:pointer;color:var(--s);display:flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1;transition:border-color .15s,color .15s;}
        .c6-arrow:disabled{opacity:.3;cursor:default;}
        .c6-arrow:not(:disabled):hover{border-color:var(--o);color:var(--o);}
        /* track: 2 full cards + visible partial peek on the right */
        .c6-car-track{flex:1;display:grid;grid-template-columns:1fr 1fr 44px;gap:12px;overflow:hidden;}
        @media(max-width:600px){.c6-car-track{grid-template-columns:1fr 44px;}}
        .c6-car-card{background:var(--w);border:1.5px solid var(--bd);border-radius:var(--r);padding:14px;display:flex;flex-direction:column;gap:12px;transition:box-shadow .2s;}
        .c6-car-card:hover{box-shadow:var(--sh);}
        .c6-car-peek{border-radius:var(--r) 0 0 var(--r);overflow:hidden;pointer-events:none;opacity:.65;padding:14px 6px;}
        .c6-car-logos{display:flex;align-items:center;gap:8px;}
        .c6-car-logo-box{flex:1;border:1px solid var(--bd);border-radius:8px;padding:8px 6px;display:flex;align-items:center;justify-content:center;height:58px;background:var(--w);overflow:hidden;}
        .c6-car-logo-box img{max-width:100%;max-height:42px;object-fit:contain;}
        .c6-car-vs{width:26px;height:26px;border-radius:50%;background:var(--o);color:white;font-family:'Sora',sans-serif;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .c6-car-names{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
        .c6-car-name{font-size:12px;font-weight:600;color:var(--n);line-height:1.35;}
        .c6-car-loc{font-size:10.5px;color:var(--m);}
        .c6-car-btn{padding:8px 14px;background:var(--n);color:white;border:none;border-radius:7px;font-family:'Sora',sans-serif;font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;transition:background .2s,transform .1s;}
        .c6-car-btn:hover{background:var(--o);transform:translateY(-1px);}
        .c6-car-chevron{font-size:16px;line-height:1;}
        .c6-car-dots{display:flex;gap:6px;margin-top:12px;padding-left:38px;}
        .c6-dot{width:8px;height:8px;border-radius:50%;border:none;background:var(--bd);cursor:pointer;transition:background .2s,transform .2s;}
        .c6-dot-on{background:var(--n);transform:scale(1.2);}

        /* ── FAQ ── */
        .c6-faq{margin-bottom:32px;}
        .c6-faq-title{font-family:'Sora',sans-serif;font-size:clamp(14px,2vw,17px);font-weight:700;color:var(--n);margin-bottom:14px;}
        .c6-faq-list{display:flex;flex-direction:column;gap:8px;}
        .c6-faq-item{background:var(--w);border:1.5px solid var(--bd);border-radius:8px;overflow:hidden;transition:border-color .2s;}
        .c6-faq-open{border-color:#cbd5e1;}
        .c6-faq-q{width:100%;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;background:none;border:none;cursor:pointer;font-size:13.5px;font-weight:500;color:var(--n);text-align:left;gap:10px;}
        .c6-faq-icon{font-size:14px;color:var(--m);flex-shrink:0;}
        .c6-faq-a{padding:0 16px 14px;font-size:13.5px;color:var(--m);line-height:1.7;animation:c6fi .22s ease;}
        @keyframes c6fi{from{opacity:0;}to{opacity:1;}}
        .c6-btn-viewmore{padding:9px 24px;border:1.5px solid var(--bd);border-radius:8px;background:none;font-size:13.5px;font-weight:600;color:var(--s);cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:border-color .2s,color .2s;}
        .c6-btn-viewmore:hover{border-color:var(--o);color:var(--o);}

        /* ── Sidebar ── */
        .c6-sidebar{}
        .c6-sidebar-ttl{font-family:'Sora',sans-serif;font-size:15px;font-weight:700;color:var(--n);margin-bottom:14px;}
        .c6-popcard{background:var(--w);border-radius:10px;overflow:hidden;box-shadow:var(--sh);margin-bottom:14px;text-decoration:none;display:block;transition:box-shadow .2s,transform .15s;}
        .c6-popcard:hover{box-shadow:var(--shlg);transform:translateY(-2px);}
        .c6-popcard img{width:100%;height:110px;object-fit:cover;display:block;}
        .c6-popcard-body{padding:10px 12px;}
        .c6-popcard-name{font-size:13px;font-weight:600;color:var(--n);line-height:1.4;margin-bottom:3px;}
        .c6-popcard-loc{font-size:11.5px;color:var(--m);}

        /* ── Footer ── */
        .c6-footer{background:var(--n);margin-top:40px;}
        .c6-footer-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr 1fr;gap:28px;padding:40px 24px 32px;border-bottom:1px solid rgba(255,255,255,.1);}
        @media(max-width:860px){.c6-footer-grid{grid-template-columns:1fr 1fr;padding:28px 20px 24px;}}
        @media(max-width:480px){.c6-footer-grid{grid-template-columns:1fr;}}
        .c6-footer-brand{}
        .c6-footer-logo{display:flex;align-items:center;font-family:'Sora',sans-serif;font-size:21px;font-weight:800;margin-bottom:18px;}
        .c6-footer-contacts{display:flex;flex-direction:column;gap:9px;margin-bottom:18px;}
        .c6-contact-row{display:flex;align-items:flex-start;gap:8px;font-size:12.5px;color:rgba(255,255,255,.6);line-height:1.5;}
        .c6-socials{display:flex;gap:8px;}
        .c6-social-btn{width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.65);text-decoration:none;transition:background .2s,color .2s,border-color .2s;}
        .c6-social-btn:hover{background:var(--o);border-color:var(--o);color:white;}
        .c6-footer-col{}
        .c6-fcol-title{font-family:'Sora',sans-serif;font-size:13px;font-weight:700;color:white;margin-bottom:12px;letter-spacing:.3px;}
        .c6-flink{display:block;font-size:12.5px;color:rgba(255,255,255,.58);text-decoration:none;margin-bottom:8px;transition:color .18s;}
        .c6-flink:hover{color:var(--o);}
        .c6-footer-bar{max-width:1100px;margin:0 auto;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:rgba(255,255,255,.42);}
        .c6-footer-bar-links{display:flex;gap:16px;flex-wrap:wrap;}
        .c6-fbarlink{color:rgba(255,255,255,.48);text-decoration:none;transition:color .18s;}
        .c6-fbarlink:hover{color:var(--o);}
      `}</style>

      <div className="c6">
        <div className="c6-wrap">
          <div className="c6-layout">

            {/* ── MAIN ── */}
            <main>
              {compareIds && (
                <ComparisonPanel
                  aId={compareIds.aId}
                  bId={compareIds.bId}
                  onClose={() => setCompareIds(null)}
                />
              )}
              <Carousel title="Popular Comparison with Anna Distance Education-" pairs={PAIRS_ANNA} onCompare={handleCompare} />
              <Carousel title="Popular Comparison with CU Online-" pairs={PAIRS_CU} onCompare={handleCompare} />
              <FAQ />
            </main>

        

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}