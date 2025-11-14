import { Injectable } from '@angular/core';

export interface ContentData {
  title: string;
  lines: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getAboutData(): ContentData {
    return {
      title: 'SUMMARY',
      lines: [
        'Mainframe Developer with 4+ years of progressive experience in Business',
        'Analysis, Design, Development, Maintenance, Production Support, Testing,',
        'Documentation, and Implementation on IBM Mainframe technologies (COBOL,',
        'JCL, DB2, SQL, VSAM, CICS, FTP).',
        '',
        'Experienced with SDLC (Agile & Waterfall), requirement gathering, impact',
        'analysis, coding, debugging, RCA, unit & integration testing. Worked in',
        'the insurance domain (UNUM).',
        '',
        'Energetic, hardworking, self-motivated with strong problem-solving skills.'
      ]
    };
  }

  getExperienceData(): ContentData {
    return {
      title: 'PROFESSIONAL EXPERIENCE',
      lines: [
        'Company   : Cognizant Technology Solutions',
        'Role      : Mainframe AD/AMS - Jr. Software Engineer',
        'Duration  : Oct 2021 - Present',
        'Location  : Coimbatore, India',
        '',
        'Responsibilities:',
        '- Full SDLC experience (Agile/Waterfall)',
        '- Created High-Level & Low-Level Technical Design documents',
        '- Performed Impact Analysis for business requirements',
        '- Coded COBOL-DB2 modules and batch programs',
        '- Created/Maintained JCL, PROCs, PARMs',
        '- Used DFSORT, IEBGENER, IDCAMS utilities for file manipulation',
        '- Wrote and optimized DB2 queries using SPUFI',
        '- Completed comprehensive Unit & Integration Testing',
        '- Debugged programs using XPEDITOR and other tools',
        '- Performed Root Cause Analysis (RCA) & defect resolution',
        '- Supported production abends and critical incidents'
      ]
    };
  }
  
  getProjectsData(): ContentData {
    return {
      title: 'PROJECT HIGHLIGHTS',
      lines: [
        '1. Insurance Batch Processing System',
        '   - Technology: COBOL, DB2, JCL, VSAM',
        '   - Description: Developed and maintained batch modules for daily policy',
        '     processing, claims validation, and report generation for a major',
        '     insurance client. Optimized several long-running jobs, reducing',
        '     batch window time by 15%.',
        '',
        '2. VSAM to DB2 Data Migration Utility',
        '   - Technology: COBOL, JCL, DB2, DFSORT',
        '   - Description: Created a reusable utility to migrate legacy data from',
        '     VSAM KSDS files to new DB2 tables. The process included data',
        '     validation, transformation, and reconciliation reporting.',
        '',
        '3. Automated JCL Batch Stream Optimization',
        '   - Technology: JCL, Control-M, REXX (conceptual)',
        '   - Description: Analyzed and re-structured complex batch job streams',
        '     to improve dependency management and parallel processing, leading',
        '     to more resilient and efficient nightly cycles.'
      ]
    };
  }

  getEducationData(): ContentData {
    return {
      title: 'EDUCATION & CERTIFICATIONS',
      lines: [
        'EDUCATION:',
        '- MCA: Bharathiar University - CGPA 6.5',
        '- BCA: Nehru Arts & Science College - CGPA 7.0 (Distinction)',
        '- HSC: State Board - 60%',
        '- SSLC: State Board - 70%',
        '',
        'CERTIFICATIONS:',
        '- Microsoft Azure Fundamentals (AZ-900)',
        '- Microsoft AI Fundamentals (AI-900)',
        '- Microsoft GitHub Copilot Certification'
      ]
    };
  }

  getContactData(): ContentData {
    return {
      title: 'CONTACT INFORMATION',
      lines: [
        'Name      : Sridhar G',
        'Role      : Mainframe Developer / Jr. Software Engineer',
        '',
        'Mobile    : +91 XXXXX-XXXXX',
        'Email     : sridharg@myyahoo.com',
        'Location  : Coimbatore, India',
        '',
        'Languages : English, Tamil'
      ]
    };
  }
}
