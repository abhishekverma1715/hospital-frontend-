import { NextResponse } from 'next/server';

export interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  qualification: string;
  experienceYears: string;
  location: string;
  coverNote?: string;
  submittedAt: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
}

const submittedApplications: JobApplication[] = [];

// POST: Submit a new job application from the Careers page
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name || !body.phone || !body.position) {
      return NextResponse.json(
        { success: false, message: 'Name, Phone number, and Position are required fields.' },
        { status: 400 }
      );
    }

    const newApp: JobApplication = {
      id: `APP-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: body.name,
      email: body.email || 'Not provided',
      phone: body.phone,
      position: body.position,
      qualification: body.qualification || 'Not provided',
      experienceYears: body.experienceYears || '1-2 Years',
      location: body.location || 'Kumbakonam',
      coverNote: body.coverNote || '',
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    submittedApplications.push(newApp);

    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been submitted successfully to Karunya Sugalaya HR & Admin team.',
        applicationId: newApp.id,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process application request.' },
      { status: 500 }
    );
  }
}

// GET: Fetch all submitted applications for the Admin Panel
export async function GET() {
  return NextResponse.json({
    success: true,
    total: submittedApplications.length,
    data: submittedApplications,
  });
}
