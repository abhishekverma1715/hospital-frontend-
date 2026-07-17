import { NextResponse } from 'next/server';

export interface CareerPosition {
  id: number;
  title: string;
  department: string;
  qualification: string;
  experience: string;
  ageLimit: string;
  type: string;
  openings: number;
  description: string;
  preferable: string;
  salary: string;
  accommodation: string;
  status: 'active' | 'closed';
  createdAt: string;
}

// Initial seed data exactly according to analyzed recruitment poster
let careersData: CareerPosition[] = [
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

// GET: Fetch all careers (compatible with both frontend & admin panel)
export async function GET() {
  return NextResponse.json({
    success: true,
    total: careersData.length,
    data: careersData,
  });
}

// POST: Add a new job opening (Admin panel endpoint)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newId = careersData.length > 0 ? Math.max(...careersData.map((item) => item.id)) + 1 : 1;
    const newCareer: CareerPosition = {
      id: newId,
      title: body.title || 'New Position',
      department: body.department || 'General',
      qualification: body.qualification || 'Degree / Diploma',
      experience: body.experience || 'Minimum 1 or 2 Yrs Experience Must',
      ageLimit: body.ageLimit || '20 - 40 Years',
      type: body.type || 'Full Time',
      openings: Number(body.openings) || 1,
      description: body.description || '',
      preferable: body.preferable || 'All candidates in and around Kumbakonam preferable',
      salary: body.salary || 'Salary Negotiable',
      accommodation: body.accommodation || 'Accommodation Provided (Other Districts & State Candidates)',
      status: body.status || 'active',
      createdAt: new Date().toISOString(),
    };
    careersData.push(newCareer);
    return NextResponse.json({ success: true, message: 'Career position created', data: newCareer }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid data format' }, { status: 400 });
  }
}

// PUT: Update an existing position (Admin panel endpoint)
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const index = careersData.findIndex((item) => item.id === Number(body.id));
    if (index === -1) {
      return NextResponse.json({ success: false, message: 'Position not found' }, { status: 404 });
    }
    careersData[index] = { ...careersData[index], ...body };
    return NextResponse.json({ success: true, message: 'Position updated', data: careersData[index] });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update position' }, { status: 400 });
  }
}

// DELETE: Delete a position (Admin panel endpoint)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, message: 'ID required' }, { status: 400 });
    }
    careersData = careersData.filter((item) => item.id !== Number(id));
    return NextResponse.json({ success: true, message: 'Position deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete position' }, { status: 400 });
  }
}
