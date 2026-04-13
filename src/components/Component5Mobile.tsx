"use client";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface College {
  id: number;
  name: string;
  location: string;
  logo: string; // fallback code
  logoUrl?: string; // API logo
  type: string;
  established: number;
  totalStudents: number;
  coursesOffered: number;
  locationType: string;
  affiliatedUniversity: string;
  avgPackage: string;
  highestPackage: string;
  nirfRank: number;
  accreditation: string;
  feeMin: string;
  feeMax: string;
  topRecruiters: string[];
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const COLLEGES: College[] = [
  {
    id: 1,
    name: "Anna Distance Education",
    location: "New Delhi, Delhi",
    logo: "ADE",
    type: "Private",
    established: 2008,
    totalStudents: 21205,
    coursesOffered: 19,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹6.93 LPA",
    highestPackage: "₹36.50 LPA",
    nirfRank: 34,
    accreditation: "NAAC Grade A+, UGC, IIRF, AICTE",
    feeMin: "₹31,180",
    feeMax: "₹1,00,000",
    topRecruiters: ["Cognizant", "Accenture", "TCS", "Apollo"],
  },
  {
    id: 2,
    name: "CU Online",
    location: "New Delhi, Delhi",
    logo: "CU",
    type: "Private",
    established: 2012,
    totalStudents: 25205,
    coursesOffered: 21,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹9.54 LPA",
    highestPackage: "₹54.75 LPA",
    nirfRank: 35,
    accreditation: "NAAC Grade A+, UGC, IIRF, AICTE",
    feeMin: "₹1,00,000",
    feeMax: "₹4,00,002",
    topRecruiters: ["Accenture", "Cognizant", "Apollo", "TCS"],
  },
  {
    id: 3,
    name: "GLA Online",
    location: "Mathura, UP",
    logo: "GLA",
    type: "Private",
    established: 2010,
    totalStudents: 18500,
    coursesOffered: 16,
    locationType: "Semi-Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹5.80 LPA",
    highestPackage: "₹28.00 LPA",
    nirfRank: 42,
    accreditation: "NAAC Grade A, UGC, AICTE",
    feeMin: "₹45,000",
    feeMax: "₹1,50,000",
    topRecruiters: ["Wipro", "Infosys", "HCL", "Tech Mahindra"],
  },
  {
    id: 4,
    name: "Amity Online",
    location: "Noida, UP",
    logo: "AMI",
    type: "Private",
    established: 2005,
    totalStudents: 32000,
    coursesOffered: 28,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹8.20 LPA",
    highestPackage: "₹45.00 LPA",
    nirfRank: 28,
    accreditation: "NAAC Grade A++, UGC, IIRF, AICTE",
    feeMin: "₹75,000",
    feeMax: "₹2,50,000",
    topRecruiters: ["Amazon", "Deloitte", "KPMG", "IBM"],
  },
  {
    id: 5,
    name: "IGNOU",
    location: "New Delhi, Delhi",
    logo: "IGN",
    type: "Government",
    established: 1985,
    totalStudents: 300000,
    coursesOffered: 45,
    locationType: "Urban",
    affiliatedUniversity: "Central University",
    avgPackage: "₹4.50 LPA",
    highestPackage: "₹18.00 LPA",
    nirfRank: 15,
    accreditation: "NAAC Grade A++, UGC, DEB",
    feeMin: "₹2,400",
    feeMax: "₹60,000",
    topRecruiters: ["Government", "Banks", "PSU", "NGOs"],
  },
  {
    id: 6,
    name: "Manipal Online",
    location: "Manipal, Karnataka",
    logo: "MAN",
    type: "Private",
    established: 2001,
    totalStudents: 28000,
    coursesOffered: 24,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹10.20 LPA",
    highestPackage: "₹62.00 LPA",
    nirfRank: 22,
    accreditation: "NAAC Grade A+, UGC, IIRF, AICTE",
    feeMin: "₹1,20,000",
    feeMax: "₹4,50,000",
    topRecruiters: ["Google", "Microsoft", "Oracle", "Infosys"],
  },
  {
    id: 7,
    name: "Lovely Professional",
    location: "Phagwara, Punjab",
    logo: "LPU",
    type: "Private",
    established: 2006,
    totalStudents: 35000,
    coursesOffered: 32,
    locationType: "Semi-Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹7.40 LPA",
    highestPackage: "₹42.00 LPA",
    nirfRank: 38,
    accreditation: "NAAC Grade A+, UGC, AICTE",
    feeMin: "₹60,000",
    feeMax: "₹2,00,000",
    topRecruiters: ["TCS", "Wipro", "HCL", "Capgemini"],
  },
  {
    id: 8,
    name: "NMIMS Online",
    location: "Mumbai, Maharashtra",
    logo: "NMI",
    type: "Private",
    established: 1981,
    totalStudents: 22000,
    coursesOffered: 20,
    locationType: "Urban",
    affiliatedUniversity: "Autonomous",
    avgPackage: "₹12.50 LPA",
    highestPackage: "₹70.00 LPA",
    nirfRank: 18,
    accreditation: "NAAC Grade A+, UGC, AACSB, AICTE",
    feeMin: "₹1,50,000",
    feeMax: "₹5,00,000",
    topRecruiters: ["Goldman Sachs", "JP Morgan", "McKinsey", "BCG"],
  },
];

const LOGO_COLORS: Record<string, { bg: string; text: string }> = {
  ADE: { bg: "#e8f0fe", text: "#c0392b" },
  CU:  { bg: "#fff3e0", text: "#e65100" },
  GLA: { bg: "#e8f5e9", text: "#2e7d32" },
  AMI: { bg: "#fce4ec", text: "#ad1457" },
  IGN: { bg: "#e3f2fd", text: "#1565c0" },
  MAN: { bg: "#f3e5f5", text: "#6a1b9a" },
  LPU: { bg: "#fff8e1", text: "#f57f17" },
  NMI: { bg: "#e0f7fa", text: "#00695c" },
};

const FAQs = [
  {
    q: "1. What is the eligibility for BBA?",
    a: "Candidates must complete 12th with minimum 50–60% marks depending on university.",
  },
  {
    q: "2. Is an entrance exam required for BBA?",
    a: "Some universities require entrance exams like CUET, while many offer direct admission.",
  },
  {
    q: "3. What is the total fee for BBA?",
    a: "Fees range between ₹30,000 to ₹5,00,000 depending on the college and mode.",
  },
  {
    q: "4. How many attempts are allowed in CAT?",
    a: "There is no restriction on attempts for CAT exam.",
  },
  {
    q: "5. Can I appear for CAT below 50%?",
    a: "General category requires 50%, but reserved categories have relaxation.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function LogoBadge({ code, size = 48 }: { code: string; size?: number }) {
  return collegeLogo(code, size);

  function collegeLogo(code: string, size: number) {
    const url = `https://logo.clearbit.com/${code.toLowerCase()}.com`;
    return (
      <img
        src={url}
        alt={code}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          borderRadius: 8,
          border: "1px solid #eee",
          background: "#fff",
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }
}

function CollegeCard({
  college,
  onEdit,
}: {
  college: College;
  onEdit: () => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          border: "1.5px solid #e8e8e8",
          borderRadius: 12,
          padding: "12px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <LogoBadge code={college.logo} size={52} />
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", lineHeight: 1.3 }}>
            {college.name}
          </div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
            <span>📍</span> {college.location}
          </div>
        </div>
      </div>
      <button
        onClick={onEdit}
        style={{
          border: "1.5px solid #ccc",
          borderRadius: 8,
          padding: "7px 0",
          background: "#fff",
          fontSize: 13,
          fontWeight: 600,
          color: "#333",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          width: "100%",
        }}
      >
        Edit ✏️
      </button>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div
      style={{
        background: "#f0f4f8",
        borderRadius: 8,
        padding: "10px 14px",
        fontWeight: 700,
        fontSize: 14,
        color: "#1a1a1a",
        margin: "16px 0 10px",
        textAlign: "center",
      }}
    >
      {title}
    </div>
  );
}

function CompareRow({
  label,
  left,
  right,
  highlight,
}: {
  label: string;
  left: string;
  right: string;
  highlight?: "left" | "right" | "none";
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
        marginBottom: 12,
      }}
    >
      {[left, right].map((val, i) => {
        const isWinner =
          highlight === "left" ? i === 0 : highlight === "right" ? i === 1 : false;
        return (
          <div key={i}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                color: isWinner ? "#e65100" : "#1a1a1a",
              }}
            >
              {val}
            </div>
            <div style={{ fontSize: 11, color: "#888" }}>{label}</div>
          </div>
        );
      })}
    </div>
  );
}

function RecruiterGrid({ recruiters }: { recruiters: string[] }) {
  const colors = ["#1a73e8", "#00796b", "#e65100", "#6a1b9a"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {recruiters.concat(recruiters).slice(0, 8).map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: 8,
            padding: "8px 10px",
            fontSize: 12,
            fontWeight: 700,
            color: colors[i % colors.length],
            background: "#fafafa",
            textAlign: "center",
          }}
        >
          {r}
        </div>
      ))}
    </div>
  );
}

// ─── Edit Modal (college selector) ───────────────────────────────────────────

function EditModal({
  onSelect,
  onClose,
  exclude,
}: {
  onSelect: (c: College) => void;
  onClose: () => void;
  exclude: number[];
}) {
  const [search, setSearch] = useState("");
  const filtered = COLLEGES.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) && !exclude.includes(c.id)
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          maxWidth: 480,
          padding: "20px 16px",
          maxHeight: "75vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ fontWeight: 800, fontSize: 16 }}>Select a College</div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              color: "#666",
            }}
          >
            ✕
          </button>
        </div>

        <input
          type="text"
          placeholder="Search college..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 10,
            border: "1.5px solid #ddd",
            fontSize: 14,
            marginBottom: 12,
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map((college) => {
            const c = LOGO_COLORS[college.logo] ?? { bg: "#f0f0f0", text: "#555" };
            return (
              <div
                key={college.id}
                onClick={() => { onSelect(college); onClose(); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px",
                  borderRadius: 10,
                  border: "1.5px solid #eee",
                  cursor: "pointer",
                  background: "#fafafa",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 8,
                    background: c.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 11,
                    color: c.text,
                    flexShrink: 0,
                  }}
                >
                  {college.logo}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>{college.name}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>📍 {college.location}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(!!a);
  return (
    <div
      style={{
        border: "1px solid #e8e8e8",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 8,
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "12px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          color: "#1a1a1a",
          background: open ? "#fafafa" : "#fff",
        }}
      >
        <span>{q}</span>
        <span style={{ fontSize: 16, color: "#888" }}>{open ? "⌃" : "⌄"}</span>
      </div>
      {open && a && (
        <div
          style={{
            padding: "0 14px 12px",
            fontSize: 12,
            color: "#555",
            lineHeight: 1.6,
            background: "#fafafa",
          }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Popular Comparison Card ──────────────────────────────────────────────────

function PopularCard({ left, right }: { left: College; right: College }) {
  const lc = LOGO_COLORS[left.logo] ?? { bg: "#eee", text: "#333" };
  const rc = LOGO_COLORS[right.logo] ?? { bg: "#eee", text: "#333" };
  return (
    <div
      style={{
        border: "1.5px solid #e8e8e8",
        borderRadius: 12,
        padding: 14,
        background: "#fff",
        minWidth: 240,
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ width: 54, height: 40, borderRadius: 8, background: lc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, color: lc.text }}>
          {left.logo}
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#e65100", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: "#fff" }}>
          VS
        </div>
        <div style={{ width: 54, height: 40, borderRadius: 8, background: rc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, color: rc.text }}>
          {right.logo}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 12, color: "#1a1a1a" }}>{left.name}</div>
          <div style={{ fontSize: 10, color: "#888" }}>📍 {left.location}</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 12, color: "#1a1a1a" }}>{right.name}</div>
          <div style={{ fontSize: 10, color: "#888" }}>📍 {right.location}</div>
        </div>
      </div>
      <button
        style={{
          width: "100%",
          background: "#0d3b5e",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "9px 0",
          fontSize: 13,
          fontWeight: 700,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        Compare →
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CollegeCompareMobile() {
  const [leftCollege, setLeftCollege] = useState<College>(COLLEGES[0]);
  const [rightCollege, setRightCollege] = useState<College>(COLLEGES[1]);
  const [editSide, setEditSide] = useState<"left" | "right" | null>(null);
  const [showFaqMore, setShowFaqMore] = useState(false);
  const [shortlistedLeft, setShortlistedLeft] = useState(false);
  const [shortlistedRight, setShortlistedRight] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const popularPairs = [
    [COLLEGES[0], COLLEGES[2]],
    [COLLEGES[1], COLLEGES[0]],
    [COLLEGES[3], COLLEGES[5]],
  ] as [College, College][];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* Phone frame for desktop, full width on mobile */}
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#fff",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* ── Navbar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid #eee",
            background: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <button style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>☰</button>
          <div style={{ fontWeight: 800, fontSize: 18, color: "#0d3b5e" }}>
            Degree<span style={{ color: "#e65100" }}>FYD</span>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setShowSearch(true)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>🔍</button>
            <button onClick={() => setShowLogin(true)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>👤</button>
          </div>
        </div>

        <div style={{ padding: "0 16px 24px" }}>
          {/* ── Breadcrumb ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "12px 0 8px", fontSize: 11, color: "#888" }}>
            <span>🏠</span>
            <span>›</span>
            <span>Compare Colleges</span>
            <span>›</span>
            <span style={{ color: "#0d3b5e", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {leftCollege.name.split(" ").slice(0, 2).join(" ")}...
            </span>
          </div>

          {/* ── Title ── */}
          <h1 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", margin: "0 0 10px", lineHeight: 1.3 }}>
            {leftCollege.name}{" "}
            <span style={{ color: "#e65100" }}>Vs</span>
            {" "}{rightCollege.name}
          </h1>

          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, margin: "0 0 16px" }}>
            Select any two colleges from the "Edit" section below to begin your comparison. Evaluate them side by side based on important factors such as fees, key highlights, courses offered, rankings, approvals, placements, and more.
          </p>

          {/* ── College Cards ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <CollegeCard
              college={leftCollege}
              onEdit={() => setEditSide("left")}
            />
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#e65100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 900,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              VS
            </div>
            <CollegeCard
              college={rightCollege}
              onEdit={() => setEditSide("right")}
            />
          </div>

          {/* ── Institute Information ── */}
          <SectionHeader title="Institute Information" />
          <CompareRow label="College Type" left={leftCollege.type} right={rightCollege.type} />
          <CompareRow
            label="Established Year"
            left={String(leftCollege.established)}
            right={String(rightCollege.established)}
            highlight={leftCollege.established < rightCollege.established ? "left" : "right"}
          />
          <CompareRow
            label="Total Students"
            left={leftCollege.totalStudents.toLocaleString()}
            right={rightCollege.totalStudents.toLocaleString()}
            highlight={leftCollege.totalStudents > rightCollege.totalStudents ? "left" : "right"}
          />
          <CompareRow
            label="Courses Offered"
            left={String(leftCollege.coursesOffered)}
            right={String(rightCollege.coursesOffered)}
            highlight={leftCollege.coursesOffered > rightCollege.coursesOffered ? "left" : "right"}
          />
          <CompareRow label="Location Type" left={leftCollege.locationType} right={rightCollege.locationType} />
          <CompareRow label="Affiliated University" left={leftCollege.affiliatedUniversity} right={rightCollege.affiliatedUniversity} />

          {/* ── Placements ── */}
          <SectionHeader title="Placements" />
          <CompareRow
            label="Average Package"
            left={leftCollege.avgPackage}
            right={rightCollege.avgPackage}
            highlight={
              parseFloat(leftCollege.avgPackage) > parseFloat(rightCollege.avgPackage)
                ? "left"
                : "right"
            }
          />
          <CompareRow
            label="Highest Package"
            left={leftCollege.highestPackage}
            right={rightCollege.highestPackage}
            highlight={
              parseFloat(leftCollege.highestPackage) > parseFloat(rightCollege.highestPackage)
                ? "left"
                : "right"
            }
          />

          {/* ── Top Recruiters ── */}
          <SectionHeader title="Top Recruiters" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <RecruiterGrid recruiters={leftCollege.topRecruiters} />
            <RecruiterGrid recruiters={rightCollege.topRecruiters} />
          </div>

          {/* ── Rankings & Accreditations ── */}
          <SectionHeader title="Rankings & Accreditations" />
          <CompareRow
            label="NIRF Rank"
            left={`#${leftCollege.nirfRank}`}
            right={`#${rightCollege.nirfRank}`}
            highlight={leftCollege.nirfRank < rightCollege.nirfRank ? "left" : "right"}
          />
          <CompareRow label="Accreditation" left={leftCollege.accreditation} right={rightCollege.accreditation} />

          {/* ── Fee Range ── */}
          <SectionHeader title="Fee Range" />
          <CompareRow
            label="Total Fee Range"
            left={`${leftCollege.feeMin} – ${leftCollege.feeMax} (Approx.)`}
            right={`${rightCollege.feeMin} – ${rightCollege.feeMax} (Approx.)`}
          />

          {/* ── Shortlist Buttons ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
            <button
              onClick={() => setShortlistedLeft(!shortlistedLeft)}
              style={{
                padding: "11px 0",
                borderRadius: 10,
                border: "none",
                background: shortlistedLeft ? "#e65100" : "#0d3b5e",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              {shortlistedLeft ? "✓ Shortlisted" : "Shortlist"}
            </button>
            <button
              onClick={() => setShortlistedRight(!shortlistedRight)}
              style={{
                padding: "11px 0",
                borderRadius: 10,
                border: "none",
                background: shortlistedRight ? "#e65100" : "#e65100",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                opacity: shortlistedRight ? 0.8 : 1,
              }}
            >
              {shortlistedRight ? "✓ Shortlisted" : "Shortlist"}
            </button>
          </div>

          {/* ── Expert Banner ── */}
          <div
            style={{
              background: "#0d3b5e",
              borderRadius: 14,
              padding: "16px 14px",
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.4, marginBottom: 10 }}>
                Still Confused...? Let's Connect With Our Experts.
              </div>
              <button
                style={{
                  background: "#fff",
                  color: "#0d3b5e",
                  border: "none",
                  borderRadius: 8,
                  padding: "9px 18px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                Connect Now
              </button>
            </div>
            <div style={{ fontSize: 40, flexShrink: 0 }}>🧑‍💻</div>
          </div>

          {/* ── Popular Comparison with Left ── */}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: "#1a1a1a", marginBottom: 12 }}>
              Popular Comparison with {leftCollege.name.split(" ").slice(0, 2).join(" ")}–
            </div>
            <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
              {popularPairs.map(([l, r], i) => (
                <PopularCard key={i} left={l} right={r} />
              ))}
            </div>
          </div>

          {/* ── Popular Comparison with Right ── */}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: "#1a1a1a", marginBottom: 12 }}>
              Popular Comparison with {rightCollege.name.split(" ").slice(0, 2).join(" ")}–
            </div>
            <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
              {popularPairs.reverse().map(([l, r], i) => (
                <PopularCard key={i} left={r} right={l} />
              ))}
            </div>
          </div>

          {/* ── FAQ ── */}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#1a1a1a", marginBottom: 4 }}>
              Frequently Asked Questions
            </div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 14 }}>
              Here are some of the most common questions we hear, with clear answers.
            </div>
            {FAQs.slice(0, showFaqMore ? FAQs.length : 3).map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
            <button
              onClick={() => setShowFaqMore(!showFaqMore)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                margin: "8px auto 0",
                background: "none",
                border: "1px solid #ccc",
                borderRadius: 20,
                padding: "7px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#333",
                cursor: "pointer",
              }}
            >
              {showFaqMore ? "View less ⌃" : "View more ⌄"}
            </button>
          </div>

          {/* ── Footer ── */}
          <div
            style={{
              background: "#0d3b5e",
              borderRadius: 14,
              padding: "20px 16px",
              marginTop: 24,
            }}
          >
            {[
              ["Quick Links", ""],
              ["Tools & Research", ""],
              ["Top Courses", ""],
              ["Popular Universities", ""],
              ["Regular", ""],
            ].map(([label], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: i < 4 ? "1px solid #1e5080" : "none",
                  color: "#c8dce8",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {label}
                <span>⌄</span>
              </div>
            ))}

            <div style={{ marginTop: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 14 }}>
                Degree<span style={{ color: "#e65100" }}>FYD</span>
              </div>
              <div style={{ fontSize: 12, color: "#aac4d8", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 4 }}>
                <span>📞 9306508369</span>
                <span>✉️ example@degreefyd.com</span>
                <span>📍 Emaar The Palm Square, 309, Badshahpur, Sector 66, Gurugram, Haryana 122101</span>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                {["📸", "👤", "▶️", "💼"].map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: "#1e5080",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Terms & Conditions", "Privacy Policy", "Refund Policy", "Sitemap"].map((t, i) => (
                  <span key={i} style={{ fontSize: 11, color: "#7aadcc", cursor: "pointer" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: 11, color: "#5a87a8", marginTop: 10, textAlign: "center" }}>
                © 2026 Nuvora Education Private Limited. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search Modal ── */}
      {showSearch && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 20, width: "90%", maxWidth: 400 }}>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Search Colleges</div>
            <input placeholder="Search..." style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
            <button onClick={() => setShowSearch(false)} style={{ marginTop: 12, width: "100%", padding: 10, background: "#0d3b5e", color: "#fff", border: "none", borderRadius: 8 }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── Login Modal ── */}
      {showLogin && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 20, width: "90%", maxWidth: 400 }}>
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Sign In</div>
            <input placeholder="Email" style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8, marginBottom: 8 }} />
            <input placeholder="Password" type="password" style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }} />
            <button style={{ marginTop: 12, width: "100%", padding: 10, background: "#e65100", color: "#fff", border: "none", borderRadius: 8 }}>
              Login
            </button>
            <button onClick={() => setShowLogin(false)} style={{ marginTop: 8, width: "100%", padding: 10, background: "#eee", border: "none", borderRadius: 8 }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ── Edit Modal ── */}
      {editSide && (
        <EditModal
          onSelect={(c) => {
            if (editSide === "left") setLeftCollege(c);
            else setRightCollege(c);
            setEditSide(null);
          }}
          onClose={() => setEditSide(null)}
          exclude={editSide === "left" ? [rightCollege.id] : [leftCollege.id]}
        />
      )}
    </div>
  );
}