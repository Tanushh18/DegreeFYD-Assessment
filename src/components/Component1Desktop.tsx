import Link from "next/link";
import { Search, ArrowRight, Users, PhoneCall, Building2, Star } from "lucide-react";

const stats = [
  {
    icon: <Users size={22} className="text-white" />,
    value: "10k+ Students",
    label: "Active learners in India",
  },
  {
    icon: <PhoneCall size={22} className="text-white" />,
    value: "100+",
    label: "Expert Mentors",
  },
  {
    icon: <Building2 size={22} className="text-white" />,
    value: "12+ Top Universities",
    label: "Our Official Partners",
  },
  {
    icon: <Star size={22} className="text-white" />,
    value: "4.9",
    label: "Google Ratings",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center overflow-hidden bg-[#1a3a6b]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#1a3a6b]/80" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left: Text + Search */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Unlock Your Future<br />With Right Degree
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
            Explore Top Colleges &amp; Online Degrees for a Brighter Tomorrow.
            Your educational journey starts here.
          </p>

          {/* Search Box */}
          <div className="bg-[#e8862a] rounded-2xl p-3 shadow-lg">
            <div className="flex items-center bg-white rounded-xl overflow-hidden">
              <Search size={18} className="ml-4 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search Colleges, Courses..."
                className="flex-1 px-3 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 bg-transparent"
              />
              <button className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] transition-colors text-white text-sm font-semibold px-5 py-3.5 m-1 rounded-lg whitespace-nowrap">
                Search <ArrowRight size={15} />
              </button>
            </div>

            {/* View All Colleges */}
            <div className="flex justify-center mt-3 pb-1">
              <Link
                href="#"
                className="flex items-center gap-1.5 text-white font-semibold text-sm hover:underline"
              >
                View All Colleges <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Stats Card */}
        <div className="w-full md:w-auto md:min-w-[360px]">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-3 p-6">
                  {/* Icon box */}
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a5f] flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[#1e3a5f] font-bold text-base leading-snug">
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-sm leading-snug mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}