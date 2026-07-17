'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  GraduationCap,
  Clock,
  Calendar,
  MapPin,
  Phone,
  CheckCircle2,
  Building2,
  UserPlus,
  Search,
  Filter,
  ArrowRight,
  X,
  Sparkles,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Home,
  DollarSign
} from 'lucide-react';
import { CareerPosition } from '../api/careers/route';

interface CareersClientProps {
  initialCareers: CareerPosition[];
}

export default function CareersClient({ initialCareers }: CareersClientProps) {
  const [careers, setCareers] = useState<CareerPosition[]>(initialCareers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '',
    experienceYears: '1-2 Years',
    location: 'Kumbakonam',
    coverNote: '',
  });

  // Extract unique departments
  const departments = useMemo(() => {
    const depts = new Set<string>(['All']);
    careers.forEach((c) => depts.add(c.department));
    return Array.from(depts);
  }, [careers]);

  // Filtered careers
  const filteredCareers = useMemo(() => {
    return careers.filter((job) => {
      const matchesDept = selectedDept === 'All' || job.department === selectedDept;
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [careers, selectedDept, searchQuery]);

  const handleApplyClick = (job: CareerPosition) => {
    setSelectedJob(job);
    setFormData((prev) => ({
      ...prev,
      qualification: job.qualification,
    }));
    setApplicationStatus({ type: 'idle' });
  };

  const handleModalClose = () => {
    setSelectedJob(null);
    setApplicationStatus({ type: 'idle' });
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setApplicationStatus({ type: 'loading' });

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          position: selectedJob.title,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setApplicationStatus({
          type: 'success',
          message: data.message || 'Your application has been received. Our HR team will reach out soon!',
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          qualification: '',
          experienceYears: '1-2 Years',
          location: 'Kumbakonam',
          coverNote: '',
        });
      } else {
        setApplicationStatus({
          type: 'error',
          message: data.message || 'Failed to submit application. Please try again or call us directly.',
        });
      }
    } catch (err) {
      setApplicationStatus({
        type: 'error',
        message: 'Network error. Please try calling our HR desk directly at +91 94434 02885.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans overflow-x-hidden">
      {/* ===== 1. OFFICIAL RECRUITMENT POSTER 16:9 WIDESCREEN HERO SECTION ===== */}
      <section className="w-full aspect-[16/9] max-h-[82vh] bg-[#0F172A] relative overflow-hidden flex items-center justify-center">
        {/* Ambient Widescreen 16:9 Background Fill */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/careers-hiring-poster.jpg"
            alt="ambient background"
            className="w-full h-full object-cover blur-3xl opacity-45 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-transparent to-[#0F172A]/80" />
        </div>

        {/* Uncropped Official Poster Centered Inside 16:9 Frame */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-1 sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/careers-hiring-poster.jpg"
            alt="Karunya Sugalaya Official Recruitment Notice - We Are Hiring!"
            className="w-auto h-full max-w-full object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.65)] block"
          />
        </div>
      </section>

      {/* ===== 3. FILTER & SEARCH SECTION (Dynamic Controls) ===== */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-2">
              <Briefcase className="w-7 h-7 text-[#0088CC]" />
              Current Job Openings ({filteredCareers.length})
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Review qualifications, mandatory experience, and age limits below. Apply directly or visit us during interview hours.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by position or qualification..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC] focus:bg-white transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Department Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 overflow-x-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Filter Department:
          </span>
          {departments.map((dept) => {
            const isSelected = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 shadow-sm ${isSelected
                  ? 'bg-[#422884] text-white shadow-md shadow-[#422884]/20 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* ===== 4. CURRENT OPENINGS CARDS GRID (Symmetric, Structured & Responsive) ===== */}
        {filteredCareers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">No matching positions found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              We couldn&apos;t find any openings matching your search criteria. Try selecting &apos;All&apos; departments or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSelectedDept('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#422884] text-white font-bold rounded-xl text-sm hover:bg-[#331e67] transition-colors shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredCareers.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0088CC]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0088CC] via-[#10B981] to-[#422884] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header Badge & Openings Count */}
                  <div className="flex items-start justify-between gap-3 mb-4 pt-1">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#0088CC]/10 text-[#0088CC] text-xs font-bold uppercase tracking-wider mb-2">
                        {job.department}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] group-hover:text-[#0088CC] transition-colors leading-tight">
                        {job.title}
                      </h3>
                    </div>
                    <span className="shrink-0 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {job.openings} {job.openings === 1 ? 'Opening' : 'Openings'}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {job.description}
                  </p>

                  {/* ===== SYMMETRIC DETAILS BOX (Exact columns from user request: Position, Qualification, Experience, Age limit) ===== */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200/80 mb-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
                    {/* Qualification */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase text-gray-400 block">Qualification</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight block">
                          {job.qualification}
                        </span>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase text-gray-400 block">Experience</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight block">
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    {/* Age Limit */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase text-gray-400 block">Age Limit</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight block">
                          {job.ageLimit}
                        </span>
                      </div>
                    </div>

                    {/* Employment Type */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase text-gray-400 block">Job Type</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight block">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer / Perks & Apply CTA */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex flex-col text-xs text-gray-500">
                    <span className="font-semibold text-gray-700 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#0088CC]" />
                      {job.preferable}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold mt-0.5">
                      ✨ {job.salary} · {job.accommodation}
                    </span>
                  </div>

                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-5 py-2.5 bg-[#422884] hover:bg-[#331e67] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 transform group-hover:scale-102"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===== 5. WHY JOIN US & HOSPITAL VALUES (Symmetric Grid) ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200 mt-8">
        <div className="max-w-container-max-width mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0088CC] block mb-2">Our Work Culture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">Why Build Your Career With Us?</h2>
            <p className="text-gray-600 mt-3 text-base">
              At Karunya Sugalaya, we foster a collaborative, knowledge-driven, and supportive clinical atmosphere where every team member is valued.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 bg-[#F8FAFC] rounded-3xl border border-gray-200/80 hover:border-[#0088CC]/40 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#0088CC] flex items-center justify-center mb-5 shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Advanced Digital EMR &amp; AI Tools</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Work alongside sophisticated clinical decision systems like DiaX.AI, Dialog EMR, and Continuous Glucose Monitoring (CGM) protocols that elevate your daily diagnostic capabilities.
              </p>
            </div>

            <div className="p-7 bg-[#F8FAFC] rounded-3xl border border-gray-200/80 hover:border-emerald-400/40 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Ethical &amp; Patient-Centered Focus</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We believe in unhurried, thorough consultations and preventive limb salvage over aggressive intervention. Experience the fulfillment of genuine medical service.
              </p>
            </div>

            <div className="p-7 bg-[#F8FAFC] rounded-3xl border border-gray-200/80 hover:border-purple-400/40 transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-[#422884] flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Stability &amp; Continuous Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy steady employment, negotiable remuneration, staff accommodation, and ongoing educational workshops led by renowned diabetologists and specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. INTERACTIVE APPLICATION MODAL FORM ===== */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-200 my-8 animate-scaleUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0F172A] to-[#0D5C75] text-white p-6 relative">
              <button
                onClick={handleModalClose}
                className="absolute right-5 top-5 text-gray-300 hover:text-white bg-white/10 rounded-full p-2 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                Job Application Form
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Apply for: {selectedJob.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Department: {selectedJob.department} · {selectedJob.qualification}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
              {applicationStatus.type === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-2">Application Submitted!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6 leading-relaxed">
                    {applicationStatus.message}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-left text-xs space-y-1 mb-6">
                    <p><strong className="text-gray-700">Position:</strong> {selectedJob.title}</p>
                    <p><strong className="text-gray-700">Interview Hours:</strong> Monday to Saturday (10.00 AM - 07.00 PM)</p>
                    <p><strong className="text-gray-700">HR Contact:</strong> +91 94434 02885 / 0435-2430333</p>
                  </div>
                  <button
                    onClick={handleModalClose}
                    className="w-full py-3 bg-[#422884] text-white font-bold rounded-2xl text-sm shadow-md hover:bg-[#331e67] transition-colors"
                  >
                    Done &amp; Return to Openings
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  {applicationStatus.type === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold">
                      ⚠️ {applicationStatus.message}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your complete name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9443402885"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Qualification *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. MBBS, DMLT, B.Sc"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Total Experience *
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC] bg-white font-medium"
                      >
                        <option value="Fresher / Intern">Fresher / Intern</option>
                        <option value="1-2 Years">1 - 2 Years (Minimum Must)</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years Senior</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Current Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kumbakonam, Thanjavur, Chennai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Brief Note / Relevant Experience
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your medical/hospital experience or attach notes..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                    />
                  </div>

                  <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100 text-[11px] text-blue-800 leading-normal">
                    📌 <strong>Walk-in Option available:</strong> You may also bring your updated resume and certificates directly to our hospital for a Walk-in Interview Monday to Saturday (10.00 AM to 07.00 PM).
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleModalClose}
                      className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={applicationStatus.type === 'loading'}
                      className="px-6 py-2.5 rounded-xl bg-[#422884] hover:bg-[#331e67] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {applicationStatus.type === 'loading' ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
