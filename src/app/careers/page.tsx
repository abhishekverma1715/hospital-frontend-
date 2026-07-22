import React from 'react';
import type { Metadata } from 'next';
import CareersClient from './CareersClient';
import { CareerPosition } from '../api/careers/route';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Careers & Job Openings — Karunya Sugalaya, Kumbakonam',
  description:
    'Join our team at Karunya Sugalaya Diabetes Centre in Kumbakonam. Openings for Duty Doctors, Staff Nurses, Lab Technicians, Receptionists, and Billing Assistants.',
};

const DEFAULT_CAREERS: CareerPosition[] = [
  {
    id: 1,
    title: 'Duty Doctor',
    department: 'Medical & Clinical',
    qualification: 'MBBS / MD',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '22 - 45 Years',
    type: 'Full Time / Rotational Shifts',
    openings: 3,
    description: 'Provide round-the-clock clinical care, manage acute diabetes & metabolic stabilization, conduct ward rounds, and coordinate with senior consultant diabetologists for inpatient and day-care protocols.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable based on clinical acumen',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
  {
    id: 2,
    title: 'Staff Nurses',
    department: 'Nursing & Inpatient Care',
    qualification: 'ANM / GNM / B.Sc Nursing',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '20 - 35 Years',
    type: 'Full Time / Shifts',
    openings: 6,
    description: 'Administer intravenous insulin infusion protocols, manage continuous glucose monitoring (CGM) devices, handle diabetic foot wound dressings, and ensure compassionate bedside care.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable & competitive industry standards',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
  {
    id: 3,
    title: 'Receptionist',
    department: 'Front Office & Patient Relations',
    qualification: 'Any Degree',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '20 - 32 Years',
    type: 'Full Time',
    openings: 2,
    description: 'Warmly greet patients, manage appointment schedules via Dialog EMR, coordinate outpatient queue flow, handle patient inquiries, and ensure a seamless, professional hospitality experience.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
  {
    id: 4,
    title: 'Lab Technician',
    department: 'Diagnostic Laboratory (ACCURA DIAGNOSTICS)',
    qualification: 'DMLT / B.Sc MLT',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '20 - 38 Years',
    type: 'Full Time',
    openings: 3,
    description: 'Operate fully automated hematology (Swelab Alfa) and biochemistry (TurboChem 100) analyzers, perform HPLC HbA1c screening, conduct sample collection, and uphold CMC Vellore EQAS quality standards.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable based on technical expertise',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
  {
    id: 5,
    title: 'Billing Assistant',
    department: 'Finance & Administration',
    qualification: 'Any Degree / B.Com',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '21 - 35 Years',
    type: 'Full Time',
    openings: 2,
    description: 'Handle outpatient and inpatient billing procedures, computerized accounting entries, insurance documentation support, and maintain accurate daily financial verification records.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
  {
    id: 6,
    title: 'Physician Assistant',
    department: 'Medical Support & Clinical Operations',
    qualification: 'Any Science Graduate / B.Sc Physician Assistant',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '21 - 35 Years',
    type: 'Full Time',
    openings: 2,
    description: 'Assist consultant diabetologists during clinical evaluations, perform biothesiometry & neuropathy assessments, support patient health counseling, and prepare clinical summaries.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
  {
    id: 7,
    title: 'Marketing Executive',
    department: 'Outreach & Public Relations',
    qualification: 'Any Degree / Graduate (With Two Wheeler Must)',
    experience: 'Minimum 1 or 2 Yrs Experience Must',
    ageLimit: '21 - 40 Years',
    type: 'Full Time / Field Operations',
    openings: 2,
    description: 'Drive community diabetes screening camps, build physician network relations, coordinate regional awareness initiatives, and expand healthcare outreach across Thanjavur and Kumbakonam districts.',
    preferable: 'Candidates in and around Kumbakonam preferable',
    salary: 'Salary Negotiable + Travel Allowance',
    accommodation: 'Accommodation Provided (Other Districts & State Candidates)',
    status: 'active',
    createdAt: '2026-07-17T10:00:00Z',
  },
];

async function getCareers(): Promise<CareerPosition[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/careers`, { cache: 'no-store' });
    if (!res.ok) {
      return DEFAULT_CAREERS;
    }
    const json = await res.json();
    return json.data || DEFAULT_CAREERS;
  } catch (err) {
    return DEFAULT_CAREERS;
  }
}

export default async function CareersPage() {
  const careers = await getCareers();
  return <CareersClient initialCareers={careers} />;
}
