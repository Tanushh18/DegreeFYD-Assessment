"use client";

const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
`;

import Link from "next/link";
import { RefreshCw, Scale, Target, GraduationCap } from "lucide-react";

const marqueeItems = [
  { icon: <RefreshCw size={18} />, text: "Simple Process, No Chaos" },
  { icon: <Scale size={18} />, text: "Side-by-Side College Comparison Tools" },
  { icon: <Target size={18} />, text: "Choose Courses That Match Your Goals" },
  { icon: <GraduationCap size={18} />, text: "Degrees That Actually Add Value" },
  { icon: <RefreshCw size={18} />, text: "Your Future Starts With One Right Choice" },
  { icon: <Scale size={18} />, text: "Compare. Decide. Succeed." },
  { icon: <Target size={18} />, text: "Find the College That Fits You" },
  { icon: <GraduationCap size={18} />, text: "Knowledge Is the Best Investment" },
];

const universities = [
  { name: "LPU Online", badge: "12 Courses", badgeColor: "gray", domain: "lpu.in" },
  { name: "Sastra University Online", badge: "#3 NIRF Rank", badgeColor: "green", domain: "sastra.edu" },
  { name: "Amity University Online", badge: "12 Courses", badgeColor: "gray", domain: "amity.edu" },
  { name: "GLA University Online", badge: "250+ Recruiters", badgeColor: "orange", domain: "gla.ac.in" },
  { name: "Uttaranchal University", badge: "12 Courses", badgeColor: "gray", domain: "uttaranchaluniversity.ac.in" },
  { name: "Sharda University Online", badge: "#3 NIRF Rank", badgeColor: "green", domain: "sharda.ac.in" },

  { name: "Chandigarh University Online", badge: "15 Courses", badgeColor: "gray", domain: "cuchd.in" },
  { name: "Manipal University Jaipur", badge: "#15 NIRF Rank", badgeColor: "green", domain: "jaipur.manipal.edu" },
  { name: "Jain University Online", badge: "10 Courses", badgeColor: "gray", domain: "jainuniversity.ac.in" },
  { name: "NMIMS Online", badge: "Top B-School", badgeColor: "orange", domain: "nmims.edu" },
  { name: "ICFAI University", badge: "8 Courses", badgeColor: "gray", domain: "icfaiuniversity.in" },
  { name: "Symbiosis Centre for Distance Learning", badge: "#1 Ranking", badgeColor: "green", domain: "scdl.net" },

  { name: "Lovely Professional University", badge: "Top Private", badgeColor: "orange", domain: "lpu.in" },
  { name: "Delhi University School of Open Learning", badge: "Govt University", badgeColor: "gray", domain: "sol.du.ac.in" },
  { name: "IGNOU", badge: "Largest University", badgeColor: "green", domain: "ignou.ac.in" },
  { name: "Annamalai University", badge: "Distance Learning", badgeColor: "gray", domain: "annamalaiuniversity.ac.in" },
  { name: "Bharathiar University", badge: "NAAC A+", badgeColor: "green", domain: "b-u.ac.in" },
  { name: "Alagappa University", badge: "Accredited", badgeColor: "orange", domain: "alagappauniversity.ac.in" },
];

const badgeStyles: Record<string, string> = {
  gray: "bg-gray-100 text-gray-600",
  green: "bg-green-50 text-green-700",
  orange: "bg-orange-50 text-orange-500",
};

function UniversityCard({
  name,
  badge,
  badgeColor,
  domain,
}: {
  name: string;
  badge: string;
  badgeColor: string;
  domain: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden">
      <div className="p-3 pb-0">
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]}`}
        >
          {badge}
        </span>
      </div>
      <div className="flex items-center justify-center h-28 px-4">
        <img
          src={`https://logos.hunter.io/${domain}`}
          alt={name}
          className="max-h-16 max-w-full object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&size=128`;
          }}
        />
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold text-gray-800 truncate">{name}</p>
      </div>
    </div>
  );
}

export default function PopularUniversities() {
  return (
    <>
      <style>{marqueeStyle}</style>
      <section className="bg-[#f0f4f9] pb-16">
      {/* Marquee Ticker */}
      <div className="bg-white border-b border-t border-gray-200 overflow-hidden">
        <div className="flex whitespace-nowrap py-3 animate-[marquee_20s_linear_infinite]">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 mx-8 text-sm text-gray-600 font-medium shrink-0"
            >
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <p className="text-sm text-gray-500 mb-1">Choose your Favorite College</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Explore Some{" "}
          <span className="text-orange-500">Popular Universities</span>
        </h2>
      </div>

      {/* University Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {universities.map((uni, i) => (
            <UniversityCard key={i} {...uni} />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/universities"
          className="bg-[#1e3a5f] hover:bg-[#162d4a] transition-colors text-white font-semibold px-10 py-3 rounded-xl text-sm"
        >
          View All
        </Link>
      </div>
      </section>
    </>
  );
}