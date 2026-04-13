"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  CalendarDays,
  BookOpen,
  GraduationCap,
  Laptop,
  DollarSign,
  BarChart2,
  Tv2,
  Newspaper,
  Globe,
  Users,
  FlaskConical,
  Briefcase,
} from "lucide-react";

// ─── EXPERTS DATA ────────────────────────────────────────────────────────────
const experts = [
  { name: "Varun Sharma", languages: "Speaks Hindi & english", experience: "5+", rating: "4.5", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Vikash Dagar", languages: "Speaks Hindi & english", experience: "5+", rating: "4.5", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Sumit Saroha", languages: "Speaks Hindi & english", experience: "5+", rating: "4.5", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Rupal Singh", languages: "Speaks Hindi & english", experience: "5+", rating: "4.5", img: "https://i.pravatar.cc/150?img=4" },
  { name: "Prashant Kishor", languages: "Speaks Hindi & english", experience: "5+", rating: "4.5", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Ananya Mehta", languages: "Speaks Hindi & english", experience: "6+", rating: "4.8", img: "https://i.pravatar.cc/150?img=6" },
  { name: "Rohit Verma", languages: "Speaks Hindi & english", experience: "7+", rating: "4.7", img: "https://i.pravatar.cc/150?img=7" },
];

// ─── COURSES DATA ─────────────────────────────────────────────────────────────
const courses = [
  { name: "Online MBA", specializations: "20+ Specializations", icon: <Briefcase size={28} />, badge: null },
  { name: "Online BCA", specializations: "20+ Specializations", icon: <Laptop size={28} />, badge: null },
  { name: "MCA", specializations: "20+ Specializations", icon: <Laptop size={28} />, badge: "Most Opted" },
  { name: "Online MBA", specializations: "20+ Specializations", icon: <Briefcase size={28} />, badge: null },
  { name: "Online B.Com", specializations: "20+ Specializations", icon: <DollarSign size={28} />, badge: "Popular" },
  { name: "Online PGDM", specializations: "20+ Specializations", icon: <GraduationCap size={28} />, badge: null },
  { name: "Online BA", specializations: "20+ Specializations", icon: <BookOpen size={28} />, badge: null },
  { name: "Executive MBA", specializations: "20+ Specializations", icon: <Users size={28} />, badge: null },
  { name: "Global MBA", specializations: "20+ Specializations", icon: <Globe size={28} />, badge: "Trending" },
  { name: "Online B.Com+MBA", specializations: "20+ Specializations", icon: <DollarSign size={28} />, badge: null },
  { name: "Online B.Sc", specializations: "20+ Specializations", icon: <FlaskConical size={28} />, badge: null },
  { name: "Online M.Com", specializations: "20+ Specializations", icon: <BarChart2 size={28} />, badge: null },
  { name: "MAJMC", specializations: "20+ Specializations", icon: <Tv2 size={28} />, badge: null },
  { name: "BAJMC", specializations: "20+ Specializations", icon: <Newspaper size={28} />, badge: "Trending" },
  { name: "Online MA", specializations: "20+ Specializations", icon: <BookOpen size={28} />, badge: null },
  { name: "M.Sc", specializations: "20+ Specializations", icon: <FlaskConical size={28} />, badge: null },
  { name: "Online BCA+MCA", specializations: "20+ Specializations", icon: <Laptop size={28} />, badge: "Popular" },
  { name: "Online BBA+MBA", specializations: "20+ Specializations", icon: <Briefcase size={28} />, badge: null },
];

const badgeConfig: Record<string, { label: string; color: string }> = {
  "Most Opted": { label: "Most Opted", color: "bg-teal-500" },
  Popular: { label: "Popular", color: "bg-green-500" },
  Trending: { label: "Trending", color: "bg-orange-400" },
};

const VISIBLE = 5;

// ─── EXPERT CARD ─────────────────────────────────────────────────────────────
function ExpertCard({ expert }: { expert: (typeof experts)[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center text-center gap-3 min-w-0 flex-1 shadow-sm hover:shadow-md transition-shadow">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-gray-200">
        <img
          src={expert.img}
          alt={expert.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement!;
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">${expert.name[0]}</div>`;
          }}
        />
      </div>

      {/* Name + verified */}
      <div>
        <p className="font-bold text-gray-900 text-sm flex items-center justify-center gap-1">
          {expert.name}
          <CheckCircle2 size={14} className="text-green-500 fill-green-500" />
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{expert.languages}</p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-6 w-full">
        <div className="text-center">
          <p className="text-sm font-bold text-gray-800">{expert.experience} years</p>
          <p className="text-xs text-gray-400">Experience</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-gray-800 flex items-center justify-center gap-1">
            <Star size={13} className="text-yellow-400 fill-yellow-400" />
            {expert.rating}
          </p>
          <p className="text-xs text-gray-400">Ratings</p>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
        <CalendarDays size={13} />
        Book a Free Session
      </button>
    </div>
  );
}

// ─── COURSE CARD ─────────────────────────────────────────────────────────────
function CourseCard({ course }: { course: (typeof courses)[0] }) {
  const badge = course.badge ? badgeConfig[course.badge] : null;

  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-between p-5 overflow-hidden cursor-pointer group">
      {/* Badge ribbon */}
      {badge && (
        <div
          className={`absolute top-3 right-[-22px] ${badge.color} text-white text-[9px] font-bold px-6 py-0.5 rotate-45 shadow-sm`}
        >
          {badge.label}
        </div>
      )}

      {/* Icon */}
      <div className="text-orange-400 mb-3 mt-1 group-hover:scale-110 transition-transform duration-200">
        {course.icon}
      </div>

      {/* Name */}
      <p className="text-sm font-bold text-gray-800 text-center leading-snug mb-3">
        {course.name}
      </p>

      {/* Specializations pill */}
      <span className="bg-orange-50 text-orange-500 text-[11px] font-semibold px-3 py-1 rounded-full">
        {course.specializations}
      </span>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ExpertsAndCourses() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(experts.length - VISIBLE, i + 1));

  const visible = experts.slice(startIndex, startIndex + VISIBLE);

  return (
    <div className="bg-[#e6f2fb] pt-10 pb-6">
      {/* ── EXPERTS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <p className="text-sm text-orange-500 font-semibold mb-1">Get Guided by the bests</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Connect with our <span className="text-orange-500">Edtech Experts</span>
        </h2>

        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="shrink-0 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
          <div className="flex gap-4 flex-1 overflow-hidden">
            {visible.map((expert, i) => (
              <ExpertCard key={startIndex + i} expert={expert} />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            disabled={startIndex >= experts.length - VISIBLE}
            className="shrink-0 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* ── COURSES SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <p className="text-sm text-orange-500 font-semibold mb-1">Choose Your Field of study</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Explore Some <span className="text-orange-500">Popular Courses</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-10">
          <Link
            href="/courses"
            className="bg-[#1e3a5f] hover:bg-[#162d4a] transition-colors text-white font-semibold px-10 py-3 rounded-xl text-sm"
          >
            View All
          </Link>
        </div>
      </section>
    </div>
  );
}