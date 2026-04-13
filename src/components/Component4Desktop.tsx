"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  LocateFixed,
  Globe,
  ArrowRight,
} from "lucide-react";

// ─── COMPARE DATA ────────────────────────────────────────────────────────────
const comparePairs = [
  {
    a: { name: "Indira Gandhi National Open Unive...", location: "New Delhi, Delhi", logo: "/logos/ignou.png" },
    b: { name: "Lovely Professional University Online", location: "New Delhi, Delhi", logo: "/logos/lpu.png" },
  },
  {
    a: { name: "Indira Gandhi National Open Unive...", location: "New Delhi, Delhi", logo: "/logos/ignou.png" },
    b: { name: "Lovely Professional University Online", location: "New Delhi, Delhi", logo: "/logos/lpu.png" },
  },
  {
    a: { name: "Indira Gandhi National Open Unive...", location: "New Delhi, Delhi", logo: "/logos/ignou.png" },
    b: { name: "Lovely Professional University Online", location: "New Delhi, Delhi", logo: "/logos/lpu.png" },
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    text: `"The counsellor helped me a lot in finding my college. She suggested one of the best colleges and her way of talking was very nice. She helped me a lot during this process and reduced my burden of finding my dream college."`,
    name: "Nisha Sharma",
    tag: "LPU MBA Student",
    avatar: "/avatars/nisha.jpg",
  },
  {
    text: `"Avantika mam, provides a lot of information about college and courses that will help me move to the next step in my career. Thank you, mam and her way of speaking is very nice and friendly"`,
    name: "Ajay Nagpal",
    tag: "CU BBA Student",
    avatar: "/avatars/ajay.jpg",
  },
  {
    text: `"I am Abhishek Saroha and I was searching for a good college in Bengaluru. I was confused at that time and Yamini Sharma mam helped me from the side of degreefyd.com. Thank you, mam, for helping me and thanks to degreefyd.com"`,
    name: "Abhishek Saroha",
    tag: "Shoolini BA Student",
    avatar: "/avatars/abhishek.jpg",
  },
];

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is an Online MBA program?",
    a: "An online Master program is a 2-year postgraduate degree in Business Administration, recognized by UCC, AICTE and accredited universities.",
  },
  { q: "What is the course duration of an Online MBA?", a: "The duration of an Online MBA program is typically 2 years, divided into 4 semesters." },
  { q: "What is the eligibility for an Online MBA?", a: "Candidates must have a bachelor's degree with at least 50% marks from a recognized university." },
  { q: "What are the career options after an Online MBA?", a: "Graduates can pursue roles in management, finance, marketing, HR, operations, and entrepreneurship." },
  { q: "Is an Online MBA degree valid?", a: "Yes, Online MBA degrees from UGC-recognized universities are valid and accepted by employers across India." },
];

// ─── FOOTER LINKS ─────────────────────────────────────────────────────────────
const footerLinks = {
  "Quick Links": ["Home", "About us", "Contact us", "Careers", "Blogs", "FAQs", "Web stories"],
  "Tools & Research": ["Compare Colleges", "Career Counselling", "College Finder", "Scholarship Finder", "Regular", "Top Colleges", "Exams"],
  "Top Courses": ["Online BCA", "Online MA", "Online MCA", "Online MBA", "Online Global MBA", "Online BBA"],
  "Popular Universities": ["Amity University Online", "Manipal University Online", "Shoolini University Online", "GLA University Online", "Vivekananda Global Uni...", "Chandigarh University...", "Lovely Professional Univ..."],
};

// ─── STAR RATING ──────────────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── COMPARE CARD ─────────────────────────────────────────────────────────────
function CompareCard({ pair }: { pair: (typeof comparePairs)[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow min-w-0 flex-1">
      <div className="flex items-center gap-3">
        {/* College A */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="h-16 flex items-center justify-center bg-gray-50 rounded-xl px-2">
            <img src={pair.a.logo} alt={pair.a.name} className="max-h-12 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-xs font-semibold text-gray-800 leading-snug mt-1">{pair.a.name}</p>
          <p className="text-[11px] text-gray-400 flex items-center gap-1"><MapPin size={10} />{pair.a.location}</p>
        </div>

        {/* VS */}
        <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold shadow">Vs</div>

        {/* College B */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="h-16 flex items-center justify-center bg-gray-50 rounded-xl px-2">
            <img src={pair.b.logo} alt={pair.b.name} className="max-h-12 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-xs font-semibold text-gray-800 leading-snug mt-1">{pair.b.name}</p>
          <p className="text-[11px] text-gray-400 flex items-center gap-1"><MapPin size={10} />{pair.b.location}</p>
        </div>
      </div>

      <Link
        href="/compare"
        className="flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
      >
        Compare <ArrowRight size={13} />
      </Link>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CompareFaqFooter() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  const prevSlide = () => setSlideIndex((i) => Math.max(0, i - 1));
  const nextSlide = () => setSlideIndex((i) => Math.min(comparePairs.length - 3, i + 1));

  const visible = comparePairs.slice(slideIndex, slideIndex + 3);

  return (
    <div className="bg-[#f0f4f9]">

      {/* ── COMPARE SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <p className="text-sm text-orange-500 font-semibold mb-1">Compare best with best</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          <span className="text-orange-500">Compare Colleges</span> to get better clarity
        </h2>

        <div className="relative flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className="shrink-0 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-5 flex-1 overflow-hidden">
            {visible.map((pair, i) => (
              <CompareCard key={slideIndex + i} pair={pair} />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={slideIndex >= comparePairs.length - 3}
            className="shrink-0 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {comparePairs.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === slideIndex ? "bg-[#1e3a5f] w-4" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/compare"
            className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-2.5 rounded-xl text-sm transition-colors"
          >
            Compare More
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-14">
        <p className="text-sm text-orange-500 font-semibold mb-1">Listen From our Trusted Students</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          What Our <span className="text-orange-500">Students</span> are Saying About us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <Stars />
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                      el.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-sm font-bold text-gray-400">${t.name[0]}</div>`;
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{t.name}</p>
                  <span className="inline-block bg-green-50 text-green-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mt-0.5">{t.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <p className="text-sm text-orange-500 font-semibold mb-1">Got Questions?</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Frequently <span className="text-orange-500">Asked Questions</span>
        </h2>

        <div className="flex flex-col gap-3">
          {visibleFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-800">
                  {i + 1}. {faq.q}
                </span>
                {openFaq === i ? (
                  <ChevronUp size={18} className="text-gray-500 shrink-0 ml-4" />
                ) : (
                  <ChevronDown size={18} className="text-gray-400 shrink-0 ml-4" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAllFaqs((v) => !v)}
            className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-2.5 rounded-xl text-sm transition-colors"
          >
            {showAllFaqs ? "View less" : "View more"}
            <ChevronDown size={16} className={`transition-transform ${showAllFaqs ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1e3a5f] text-white pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10 border-b border-white/10">

            {/* Brand */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <span className="text-lg font-extrabold">Degree<span className="text-orange-400">FYD</span></span>
              </Link>
              <div className="flex flex-col gap-2.5 text-sm text-white/70">
                <a href="tel:9306508369" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={13} /> 9306508369
                </a>
                <a href="mailto:example@degreefyd.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={13} /> example@degreefyd.com
                </a>
                <p className="flex items-start gap-2">
                  <LocateFixed size={13} className="mt-0.5 shrink-0" />
                  Emaar The Palm Square, 309, Badshahpur, Sector 66, Gurugram, Haryana 122101
                </p>
              </div>
              <div className="flex gap-3 mt-1">
                {[Globe, Globe, Globe, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-sm font-bold mb-4 text-white">{heading}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© 2026 Nuvora Education Private Limited. All rights reserved.</p>
            <div className="flex gap-5">
              {["Terms & Conditions", "Privacy Policy", "Refund Policy", "Sitemap"].map((item) => (
                <Link key={item} href="#" className="hover:text-white/80 transition-colors underline underline-offset-2">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Missing import fix
function GraduationCap({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}