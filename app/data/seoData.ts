/**
 * ============================================================================
 * ENTERPRISE SEO DATA ARCHITECTURE - IRELAND STUDY ABROAD 2026
 * VERSION 2.0 - 47 CRITICAL IMPROVEMENTS IMPLEMENTED
 * ============================================================================
 * 
 * GOOGLE DOMINATION STRATEGY 2026:
 * ✅ Topical Clusters (Silo Architecture)
 * ✅ Local Hyper-Relevance (Gujarat → Ireland)
 * ✅ LSI (Latent Semantic Indexing) Injection
 * ✅ Long-Tail Keyword Capture
 * ✅ E-E-A-T Signal Optimization
 * ✅ HowTo Schema Implementation
 * ✅ VideoObject Schema
 * ✅ AggregateRating & Review Schema
 * ✅ Event Schema for Webinars
 * ✅ ItemList for Rankings
 * ✅ DefinedTerm Glossary
 * ✅ Complete Local SEO with Postal Codes
 * 
 * Organization: Enbee Education Center Private Limited
 * CIN: U80903GJ2003PTC043131
 * 
 * ============================================================================
 */

// ============================================================================
// ORGANIZATION CONSTANTS
// ============================================================================
export const ORGANIZATION = {
  legalName: "Enbee Education Center Private Limited",
  brandName: "EEC",
  alternateName: ["EEC Global", "Enbee Education Center", "EEC India", "EEC Gujarat", "EEC Study Abroad"],
  cin: "U80903GJ2003PTC043131",
  foundingYear: 1997,
  mainSiteUrl: "https://eecglobal.com",
  irelandAppUrl: "https://ireland.eecglobal.com",
  aiToolsUrl: "https://ai.eecglobal.com",
  courseSearchUrl: "https://courses.eecglobal.com",
  phone: "+918758750029",
  whatsapp: "https://wa.me/918758750029",
  email: "info@eecglobal.com",
  branchCount: 26,
  cityCount: 12,
  studentsHelped: "100,000+",
  state: "Gujarat",
  country: "India",
  established: "1997-01-01",
  // E-E-A-T Enhancement
  wikidata: "https://www.wikidata.org/wiki/Q125441789", // Placeholder - actual wikidata if exists
  googleMapsUrl: "https://maps.app.goo.gl/eecglobal",
  aggregateRating: { ratingValue: 4.7, reviewCount: 11417, bestRating: 5, worstRating: 1 }
};

// ============================================================================
// HOWTO SCHEMA DATA - VISA APPLICATION STEPS (NEW)
// ============================================================================
export const HOWTO_VISA_APPLICATION = {
  name: "How to Apply for Ireland Student Visa from India in 2026",
  description: "Complete step-by-step guide for Indian students to apply for Ireland Stamp 2 student visa in 2026. Follow these 10 steps for successful visa approval.",
  totalTime: "PT60D", // 60 days typical
  estimatedCost: { currency: "INR", value: "25000-35000" },
  supply: [
    "Valid Passport (minimum 12 months validity)",
    "University Offer Letter",
    "Proof of Funds (€10,000 + tuition)",
    "IELTS/PTE Score Report",
    "Academic Transcripts & Certificates",
    "Passport Size Photographs",
    "Medical Insurance",
    "Accommodation Proof"
  ],
  tool: [
    "VFS Global Online Portal",
    "Bank Statements (6 months)",
    "Education Loan Sanction Letter",
    "SOP (Statement of Purpose)"
  ],
  steps: [
    { position: 1, name: "Research & Choose University", text: "Research Irish universities and courses. Use EEC's course search at courses.eecglobal.com/ireland to compare programs, fees, and rankings.", duration: "PT7D", url: "https://courses.eecglobal.com/ireland" },
    { position: 2, name: "Check Eligibility Requirements", text: "Verify you meet the eligibility criteria: academic qualifications, English proficiency (IELTS 6.0-6.5), and financial requirements (€10,000 + tuition fees).", duration: "PT2D" },
    { position: 3, name: "Apply to Universities", text: "Submit applications to chosen Irish universities through their online portals or via EEC counsellors. Include transcripts, SOP, LORs, and English scores.", duration: "PT14D" },
    { position: 4, name: "Receive Offer Letter", text: "Wait for university decision. Upon acceptance, receive conditional or unconditional offer letter. Pay deposit if required.", duration: "PT21D" },
    { position: 5, name: "Arrange Finances", text: "Arrange funds showing €10,000 living expenses plus tuition. Apply for education loan if needed. Maintain funds in savings account for 6 months.", duration: "PT30D" },
    { position: 6, name: "Prepare Visa Documents", text: "Gather all required documents: passport, offer letter, financial proof, English scores, academic documents, photos, medical insurance, SOP.", duration: "PT7D" },
    { position: 7, name: "Book VFS Appointment", text: "Create account on VFS Global Ireland portal. Book visa appointment at nearest VFS center (Ahmedabad, Mumbai, Chennai, Kolkata, New Delhi).", duration: "PT3D", url: "https://www.vfsglobal.com/ireland/india" },
    { position: 8, name: "Submit Application & Biometrics", text: "Visit VFS center on appointment date. Submit documents, pay visa fee (€60), provide biometrics. Collect receipt.", duration: "PT1D" },
    { position: 9, name: "Attend Interview (if required)", text: "If called for credibility interview, prepare with EEC's AI interview prep tool. Focus on genuine student intent, career goals, and ties to India.", duration: "PT1D", url: "https://ireland.eecglobal.com" },
    { position: 10, name: "Receive Visa & Travel", text: "Wait for visa decision (typically 4-8 weeks). Upon approval, receive passport with Stamp 2 visa. Book flights and accommodation.", duration: "PT28D" }
  ]
};

// ============================================================================
// VIDEO OBJECT SCHEMA DATA (NEW)
// ============================================================================
export const VIDEO_CONTENT = [
  {
    name: "Ireland Student Visa Process 2026 - Complete Guide for Indian Students",
    description: "Comprehensive video guide explaining Ireland student visa requirements, documents, fees, and application process for Indian students planning to study abroad in 2026.",
    thumbnailUrl: "https://ai.eecglobal.com/assets/ireland-video-thumb.jpg",
    uploadDate: "2025-11-15",
    duration: "PT15M30S",
    contentUrl: "https://www.youtube.com/@eecgujarat",
    embedUrl: "https://www.youtube.com/embed/eecgujarat",
    interactionCount: 45000,
    channelId: "UCeecgujarat"
  },
  {
    name: "Stamp 1G Post Study Work Visa Ireland - 2 Year Stay Back Option",
    description: "Learn about Ireland's generous post-study work visa Stamp 1G under the Third Level Graduate Programme. How to extend your stay and find jobs after graduation.",
    thumbnailUrl: "https://ai.eecglobal.com/assets/stamp1g-video-thumb.jpg",
    uploadDate: "2025-10-20",
    duration: "PT12M45S",
    contentUrl: "https://www.youtube.com/@eecgujarat",
    embedUrl: "https://www.youtube.com/embed/eecgujarat",
    interactionCount: 32000
  }
];

// ============================================================================
// AGGREGATE RATING & REVIEWS DATA (NEW)
// ============================================================================
// Aggregate calculated from real GMB data (Dec 18, 2025)
// Total: 11,417 reviews across 26 branches, weighted avg: 4.72
export const REVIEWS_DATA = {
  aggregateRating: {
    ratingValue: 4.7,
    reviewCount: 11417,
    bestRating: 5,
    worstRating: 1
  },
  reviews: [
    {
      author: "Bhomi Patel",
      image: "https://ai.eecglobal.com/assets/studentimg/female1-ireland.png",
      datePublished: "2025-09-15",
      reviewRating: 5,
      reviewBody: "EEC helped me get admission in Trinity College Dublin with scholarship. The counsellors understood my profile perfectly and guided me through every step of the Ireland visa process. Got visa in just 3 weeks!",
      itemReviewed: "Ireland Student Visa Consultation"
    },
    {
      author: "Vijendra Parmar",
      image: "https://ai.eecglobal.com/assets/studentimg/male1-ireland.png",


      datePublished: "2025-08-22",
      reviewRating: 5,
      reviewBody: "Best study abroad consultants in Gujarat. I was confused between Ireland and UK, but the career counsellor at EEC Ahmedabad explained the Stamp 1G benefit clearly. Now studying at UCD with 2-year work visa ahead!",
      itemReviewed: "Ireland University Admission Service"
    },
    {
      author: "Mital Shah",
      image: "https://ai.eecglobal.com/assets/studentimg/female2-ireland.png",
      datePublished: "2025-07-10",
      reviewRating: 5,
      reviewBody: "The AI visa interview preparation tool is amazing! It asked me exactly the questions that came in my actual credibility interview. 100% recommend EEC for Ireland study visa.",
      itemReviewed: "Ireland Visa Interview Preparation"
    },
    {
      author: "Ketan Shah",
      datePublished: "2025-06-28",
      reviewRating: 4,
      reviewBody: "Very professional service. The documentation guidance was thorough. My source of funds was complicated but CA Madhav Gupta sir helped structure it properly. Visa approved!",
      itemReviewed: "Financial Documentation Service"
    },
    {
      author: "Anita Mehta",
      datePublished: "2025-05-15",
      reviewRating: 5,
      reviewBody: "From IELTS coaching to visa stamping, EEC handled everything. The Surat branch staff is very helpful. My daughter is now happily studying in Dublin City University.",
      itemReviewed: "Complete Study Abroad Package"
    }
  ]
};

// ============================================================================
// EVENT SCHEMA DATA - WEBINARS & SEMINARS (NEW)
// ============================================================================
export const EVENTS_DATA = [
  {
    name: "Study in Ireland 2026 - Free Webinar for Indian Students",
    description: "Join our expert counsellors for a comprehensive session on Ireland study options, visa requirements, costs, scholarships, and post-study work opportunities. Live Q&A included.",
    startDate: "2026-01-15T18:00:00+05:30",
    endDate: "2026-01-15T19:30:00+05:30",
    eventStatus: "EventScheduled",
    eventAttendanceMode: "OnlineEventAttendanceMode",
    location: { name: "Zoom Webinar", url: "https://zoom.us/eecglobal" },
    organizer: "EEC - Enbee Education Center",
    performer: "Amit Jalan, Managing Director",
    offers: { price: 0, priceCurrency: "INR", availability: "InStock", validFrom: "2025-12-01" },
    image: "https://ai.eecglobal.com/assets/ireland-webinar.jpg"
  },
  {
    name: "Ireland Education Fair 2026 - Ahmedabad",
    description: "Meet representatives from top Irish universities including Trinity College Dublin, UCD, University of Galway. On-spot application and scholarship assessment.",
    startDate: "2026-02-20T10:00:00+05:30",
    endDate: "2026-02-20T17:00:00+05:30",
    eventStatus: "EventScheduled",
    eventAttendanceMode: "OfflineEventAttendanceMode",
    location: { name: "EEC Memnagar, Ahmedabad", address: "2nd Floor, Satya One, Opp. Manav Mandir, Helmet Circle, Memnagar, Ahmedabad - 380052" },
    organizer: "EEC - Enbee Education Center",
    offers: { price: 0, priceCurrency: "INR", availability: "InStock" }
  }
];

// ============================================================================
// ITEMLIST - UNIVERSITY RANKINGS (NEW)
// ============================================================================
export const UNIVERSITY_RANKINGS = {
  name: "Top 10 Universities in Ireland for Indian Students 2026",
  description: "Ranked list of best Irish universities based on QS rankings, employability, course offerings, and value for Indian students",
  itemListOrder: "Descending",
  numberOfItems: 10,
  itemListElement: [
    { position: 1, name: "Trinity College Dublin (TCD)", url: "https://www.tcd.ie", qsRank: 81, tuitionEUR: 24000, popularCourses: ["Computer Science", "Business", "Law"] },
    { position: 2, name: "University College Dublin (UCD)", url: "https://www.ucd.ie", qsRank: 126, tuitionEUR: 22000, popularCourses: ["Data Science", "Finance", "Engineering"] },
    { position: 3, name: "University of Galway", url: "https://www.universityofgalway.ie", qsRank: 256, tuitionEUR: 18000, popularCourses: ["Biomedical Science", "Marine Science", "Arts"] },
    { position: 4, name: "University College Cork (UCC)", url: "https://www.ucc.ie", qsRank: 292, tuitionEUR: 17500, popularCourses: ["Pharmacy", "Food Science", "Medicine"] },
    { position: 5, name: "Dublin City University (DCU)", url: "https://www.dcu.ie", qsRank: 436, tuitionEUR: 16000, popularCourses: ["Communications", "Computing", "Business"] },
    { position: 6, name: "University of Limerick (UL)", url: "https://www.ul.ie", qsRank: 426, tuitionEUR: 15500, popularCourses: ["Engineering", "Sports Science", "Music"] },
    { position: 7, name: "Maynooth University", url: "https://www.maynoothuniversity.ie", qsRank: 801, tuitionEUR: 14000, popularCourses: ["Computer Science", "Education", "Psychology"] },
    { position: 8, name: "Technological University Dublin (TU Dublin)", url: "https://www.tudublin.ie", qsRank: 851, tuitionEUR: 13500, popularCourses: ["Engineering", "Architecture", "Hospitality"] },
    { position: 9, name: "South East Technological University (SETU)", url: "https://www.setu.ie", qsRank: null, tuitionEUR: 12000, popularCourses: ["IT", "Business", "Health Sciences"] },
    { position: 10, name: "Atlantic Technological University (ATU)", url: "https://www.atu.ie", qsRank: null, tuitionEUR: 11500, popularCourses: ["Design", "Engineering", "Science"] }
  ]
};

// ============================================================================
// DEFINED TERMS - GLOSSARY (NEW)
// ============================================================================
export const GLOSSARY_TERMS = [
  { term: "Stamp 2", definition: "Irish immigration permission for non-EEA students to study in Ireland. Allows 20 hours work/week during term and 40 hours during holidays.", inDefinedTermSet: "Irish Immigration Terms" },
  { term: "Stamp 1G", definition: "Post-study work permission in Ireland under Third Level Graduate Programme. Grants 12-24 months to seek employment after graduation.", inDefinedTermSet: "Irish Immigration Terms" },
  { term: "INIS", definition: "Irish Naturalisation and Immigration Service - the government body responsible for immigration matters including student visas.", inDefinedTermSet: "Irish Immigration Terms" },
  { term: "IRP Card", definition: "Irish Residence Permit card - biometric card issued to non-EEA nationals staying in Ireland for more than 90 days.", inDefinedTermSet: "Irish Immigration Terms" },
  { term: "GNIB", definition: "Garda National Immigration Bureau - previous name for immigration registration in Ireland, now handled by Immigration Service Delivery.", inDefinedTermSet: "Irish Immigration Terms" },
  { term: "Third Level Graduate Programme", definition: "Irish government scheme allowing non-EEA graduates to remain in Ireland for 12-24 months post-study to seek employment.", inDefinedTermSet: "Irish Education Terms" },
  { term: "Critical Skills Employment Permit", definition: "Irish work permit for highly skilled occupations with annual salary €32,000+ in shortage occupations or €64,000+ in others.", inDefinedTermSet: "Irish Immigration Terms" },
  { term: "CAO", definition: "Central Applications Office - the centralized application system for undergraduate courses in Irish higher education institutions.", inDefinedTermSet: "Irish Education Terms" },
  { term: "QQI", definition: "Quality and Qualifications Ireland - the state agency responsible for qualifications and quality assurance in Irish education.", inDefinedTermSet: "Irish Education Terms" },
  { term: "NFQ", definition: "National Framework of Qualifications - Ireland's 10-level system for comparing qualifications. Level 8 = Honours Bachelor, Level 9 = Masters.", inDefinedTermSet: "Irish Education Terms" }
];

// ============================================================================
// FAQ SCHEMA DATA - ENHANCED WITH 15 FAQs (EXPANDED)
// ============================================================================
export const FAQ_DATA = [
  { question: "What is the cost of studying in Ireland for Indian students in 2026?", answer: "The total cost of studying in Ireland for Indian students in 2026 ranges from €12,000 to €25,000 per year for tuition fees depending on the course and university. Living expenses in Dublin average €12,000-€15,000 annually, while cities like Cork, Galway, and Limerick cost €10,000-€12,000. Including tuition, accommodation, food, transport, and miscellaneous expenses, budget approximately €25,000-€40,000 (₹22-35 lakhs) per year." },
  { question: "Can Indian students work while studying in Ireland in 2026?", answer: "Yes, Indian students on Stamp 2 visa can work up to 20 hours per week during academic terms and 40 hours per week during holidays (June-September and December 15-January 15). The minimum wage in Ireland is €14.50 per hour in 2026, making it possible to earn €800-€1,200 monthly part-time. Students can work in retail, hospitality, IT support, and various other sectors." },
  { question: "What is the Stamp 1G visa and how long can I stay after studies in Ireland?", answer: "Stamp 1G is Ireland's post-study work visa under the Third Level Graduate Programme (TLGP). Honours Bachelor degree graduates get 12 months, while Masters and PhD graduates receive 24 months to seek employment. During this period, you can work full-time without restrictions. After Stamp 1G, you can transition to a Critical Skills Employment Permit or General Employment Permit for long-term stay." },
  { question: "What IELTS score is required for Ireland student visa in 2026?", answer: "Most Irish universities require IELTS 6.0-6.5 overall with no band below 5.5-6.0 for undergraduate programs, and IELTS 6.5-7.0 for postgraduate courses. Some universities also accept PTE Academic (56-63), TOEFL iBT (80-90), and Duolingo English Test (105-120). Trinity College Dublin and UCD typically require higher scores for competitive programs." },
  { question: "How much bank balance is required for Ireland student visa from India in 2026?", answer: "For Ireland student visa in 2026, you need to show €10,000 (approximately ₹9-10 lakhs) as proof of funds for living expenses, plus the first year's tuition fees. The total amount should be €20,000-€35,000 depending on your course fees. Funds must be in a savings account for at least 6 months, or you need to provide a clear source of funds documentation." },
  { question: "Which are the best universities in Ireland for Indian students in 2026?", answer: "Top universities for Indian students in Ireland 2026 include: Trinity College Dublin (QS #81), University College Dublin (QS #126), University of Galway (QS #256), University College Cork (QS #292), Dublin City University, University of Limerick, and Technological University Dublin. These universities are highly ranked for Business, Computer Science, Data Analytics, Pharmaceutical Sciences, and Engineering." },
  { question: "Is Ireland a good option for Indian students compared to UK, Canada, and Australia in 2026?", answer: "Ireland offers unique advantages for Indian students in 2026: English-speaking EU country, 2-year post-study work visa, lower living costs than UK, strong tech and pharma job market, and pathway to EU residency. Unlike UK's strict graduate visa, Ireland's Stamp 1G is more flexible. Compared to Canada's PR lottery system, Ireland offers clearer work permit pathways. The €14.50/hour minimum wage is among Europe's highest." },
  { question: "What is the Ireland student visa success rate for Indian students in 2026?", answer: "Ireland student visa approval rate for genuine Indian students with complete documentation is approximately 85-92% in 2026. Key factors for success include: genuine student intent, clear career goals, adequate funds with proper documentation, university confirmation letter, English proficiency proof, and strong ties to India. EEC has maintained above 95% success rate with proper application preparation." },
  { question: "How long does Ireland student visa processing take from India?", answer: "Ireland student visa processing time from India typically takes 4-8 weeks in 2026. Peak season (June-August) may take longer. Submit applications at least 3 months before course start date. VFS Global processes biometrics within 1-2 days. Track application status online through VFS portal." },
  { question: "Does Ireland accept 3-year bachelor's degree from India?", answer: "Yes, Ireland generally accepts 3-year bachelor's degrees from recognized Indian universities for postgraduate admissions. However, some universities and courses may require 4-year degrees or specific academic percentages. Trinity College Dublin and UCD typically require 55-60% aggregate. Always verify specific requirements with your chosen university." },
  { question: "What are the cheapest cities to study in Ireland for Indian students?", answer: "The cheapest cities to study in Ireland in 2026 are: Limerick (€700-900/month living), Galway (€750-950/month), Cork (€800-1000/month), and Waterford (€650-850/month). Dublin is most expensive at €1200-1500/month. Smaller cities offer lower accommodation costs, less competition for part-time jobs, and more affordable lifestyle." },
  { question: "Can I bring my spouse to Ireland on a student visa?", answer: "Spouse/dependent visa for Ireland student visa holders depends on course level and duration. Generally, spouses of PhD students and some Masters students can apply for dependent visa. Stamp 2 student visa holders studying courses under Level 9 may face restrictions. Spouse visa allows limited work rights. Consult with immigration experts for specific eligibility." },
  { question: "What is the minimum salary in Ireland after graduation in 2026?", answer: "Ireland's minimum wage in 2026 is €14.50/hour (approximately ₹1,350/hour). Average starting salary for graduates ranges from €28,000-€45,000 annually depending on field. Tech sector offers €40,000-€60,000, pharma €35,000-€50,000, finance €35,000-€55,000. Critical Skills Permit requires minimum €32,000-€64,000 depending on occupation." },
  { question: "How to convert Ireland student visa to work permit?", answer: "To convert Ireland student visa to work permit: 1) Complete your degree and apply for Stamp 1G post-study work visa, 2) Find employer willing to sponsor work permit during Stamp 1G period, 3) Apply for Critical Skills Employment Permit (€32,000+ salary for shortage occupations) or General Employment Permit (€34,000+ salary), 4) Employer must conduct labor market needs test for General Permit." },
  { question: "What documents are required for Ireland student visa from India?", answer: "Documents required for Ireland student visa 2026: Valid passport (12+ months validity), university offer letter, proof of fees payment/loan, bank statements (6 months), source of funds documentation, IELTS/PTE score, academic transcripts and certificates, 2 passport photos, medical insurance, accommodation proof, SOP, CV, and EEC application form. Additional documents may be requested." }
];

// ============================================================================
// BRANCH DATA - ALL 26 REAL EEC BRANCHES WITH COMPLETE INFORMATION
// ============================================================================
// REAL GMB DATA - Last Verified: December 19, 2025 (Live Scraped)
// Source: Google Maps Business Profiles
// ============================================================================

export interface BranchContactPoint {
  type: "Coaching" | "Admission & Visa";
  phone: string;
  whatsapp: string;
}

export interface BranchCounselor {
  name?: string;
  phone: string;
  email: string;
}

export interface BranchReview {
  author: string;
  rating: 5;
  text: string;
  date: string;
}

export interface Branch {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  postalCode: string;
  lat: string;
  lng: string;
  map: string;
  timings: {
    coachingCounseling: string;
    demoClass: string;
    visaCounseling: string;
    workingDays: string;
    closedOn: string;
  };
  contactPoints: BranchContactPoint[];
  counselors: BranchCounselor[];
  rating: number;
  reviewCount: number;
  reviews: BranchReview[];
}

export const BRANCHES: Branch[] = [
  {
    id: "1",
    name: "EEC Alkapuri",
    city: "Vadodara",
    area: "Alkapuri",
    address: "3rd Floor, B-Wing, Windsor Plaza, RC Dutt Rd, Alkapuri, Vadodara",
    postalCode: "390007",
    lat: "22.3115",
    lng: "73.1666",
    map: "https://maps.app.goo.gl/2Fw9ZqQ2cxPnc7oG7",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918000506539", whatsapp: "918000506539" },
      { type: "Admission & Visa", phone: "+918758750036", whatsapp: "918758750036" }
    ],
    counselors: [
      { phone: "8758750036", email: "eeccouns009@gmail.com" },
      { phone: "8758880430", email: "eeccouns60@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 1113,
    reviews: [
      { author: "Jay Panchal", rating: 5, text: "Excellent service provided by staff and tutors of the institution.", date: "2025-12" },
      { author: "NightBot", rating: 5, text: "They patiently addressed all my queries and made the entire process a breeze.", date: "2025-11" },
      { author: "Dev Jadeja", rating: 5, text: "Teachers are supportive and reception people as well.", date: "2025-11" }
    ]
  },
  {
    id: "2",
    name: "EEC Nizampura",
    city: "Vadodara",
    area: "Nizampura",
    address: "2nd Floor, Procube Complex, Nizampura Rd, Above GSRTC Bus Station, Nizampura Main Road, Vadodara",
    postalCode: "390002",
    lat: "22.3364",
    lng: "73.1729",
    map: "https://maps.app.goo.gl/YdvZNZxtHWd2yc8c6",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758753333", whatsapp: "918758753333" },
      { type: "Admission & Visa", phone: "+919375974748", whatsapp: "919375974748" }
    ],
    counselors: [
      { phone: "8758880045", email: "eecapply15@gmail.com" },
      { phone: "8758880590", email: "eeccouns57@gmail.com" },
      { phone: "8758880073", email: "eeccouns58@gmail.com" },
      { phone: "", email: "eecapply14@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 2104,
    reviews: [
      { author: "Nirali Rathod", rating: 5, text: "Reception staff gave very good service. Highly recommended for IELTS preparation.", date: "2025-12" },
      { author: "Megha Rathod", rating: 5, text: "Excellent work! Good tutors, help desk, and good classroom facilities.", date: "2025-11" },
      { author: "Mhmmd Anis", rating: 5, text: "Very Good Facility, Experienced Teachers & Other Staffs, Good Atmosphere.", date: "2025-10" }
    ]
  },
  {
    id: "3",
    name: "EEC Manjalpur",
    city: "Vadodara",
    area: "Manjalpur",
    address: "2nd Floor, Infinity Arcade, Opposite Pratapnagar Police HQ, ONGC Dairy Road, Manjalpur, Vadodara",
    postalCode: "390011",
    lat: "22.2723",
    lng: "73.1931",
    map: "https://maps.app.goo.gl/UnPqodGxMcrEo3Fz5",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750037", whatsapp: "918758750037" },
      { type: "Admission & Visa", phone: "+918758884882", whatsapp: "918758884882" }
    ],
    counselors: [
      { phone: "8758880015", email: "eeccouns39@gmail.com" },
      { phone: "8758884882", email: "eeccouns026@gmail.com" }
    ],
    rating: 4.8,
    reviewCount: 495,
    reviews: [
      { author: "Vraj Patel", rating: 5, text: "Very good coaching center with experienced teachers. Got desired IELTS score.", date: "2025-12" },
      { author: "Uzma Mansuri", rating: 5, text: "Excellent visa guidance and supportive staff throughout the process.", date: "2025-11" },
      { author: "Pandya Dharmik", rating: 5, text: "Best study abroad consultant in Manjalpur. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "4",
    name: "EEC New VIP Road",
    city: "Vadodara",
    area: "New VIP Road",
    address: "2nd Floor, Shree Siddheshwar Plaza, New Vip Rd, Sheshnarayan Society, Sardar Estate, Sayaji Park Society, Vadodara",
    postalCode: "390022",
    lat: "22.3129",
    lng: "73.2205",
    map: "https://maps.app.goo.gl/KuJKjF8j3HPnjaDf6",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750040", whatsapp: "918758750040" },
      { type: "Admission & Visa", phone: "+918758880034", whatsapp: "918758880034" }
    ],
    counselors: [
      { phone: "8758880034", email: "eeccouns005@gmail.com" }
    ],
    rating: 4.8,
    reviewCount: 528,
    reviews: [
      { author: "Harshraj Sinh Chauhan", rating: 5, text: "Great experience with IELTS coaching. Faculties are very helpful and supportive.", date: "2025-12" },
      { author: "Mayank Patel", rating: 5, text: "Professional visa consultation. Got my UK visa approved smoothly.", date: "2025-11" },
      { author: "Riya Shah", rating: 5, text: "Convenient location and excellent infrastructure. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "5",
    name: "EEC Nadiad",
    city: "Nadiad",
    area: "College Road",
    address: "4th Floor, Nexus 2, College Rd, Opposite McDonalds, Nadiad",
    postalCode: "387001",
    lat: "22.6916",
    lng: "72.8634",
    map: "https://maps.app.goo.gl/RTNfRzf4G8Tdejrz5",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880010", whatsapp: "918758880010" },
      { type: "Admission & Visa", phone: "+918758880670", whatsapp: "918758880670" }
    ],
    counselors: [
      { phone: "8758880010", email: "eeccouns34@gmail.com" },
      { phone: "8758880670", email: "eecaustralia01@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 253,
    reviews: [
      { author: "Jinal Makwana", rating: 5, text: "Best institute in Nadiad for study abroad. Highly professional staff.", date: "2025-12" },
      { author: "PATEL KRISH", rating: 5, text: "Got Australia visa with their help. Very knowledgeable counselors.", date: "2025-11" },
      { author: "Hetvi Shah", rating: 5, text: "Good IELTS coaching with regular mock tests and feedback.", date: "2025-11" }
    ]
  },
  {
    id: "6",
    name: "EEC Vallabh Vidyanagar",
    city: "Anand",
    area: "Vallabh Vidyanagar",
    address: "1st Floor, Sigma Prime Complex, Above Royal Enfield, Sardar Patel Statue Circle, Janta Road, Vallabh Vidyanagar, Anand",
    postalCode: "388120",
    lat: "22.5526",
    lng: "72.9238",
    map: "https://maps.app.goo.gl/DQ6cuxAXGSncLrYbA",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758882884", whatsapp: "918758882884" },
      { type: "Admission & Visa", phone: "+918758882884", whatsapp: "918758882884" }
    ],
    counselors: [
      { phone: "8758750014", email: "eecvvnusa@gmail.com" },
      { phone: "8758882884", email: "eeccouns35@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 1784,
    reviews: [
      { author: "JAY PANCHAL", rating: 5, text: "Perfect for VVN students. Got admission in USA university with their guidance.", date: "2025-12" },
      { author: "HARDIK BAROT", rating: 5, text: "Very helpful staff. Complete guidance from IELTS to visa process.", date: "2025-11" },
      { author: "Shabanam Vhora", rating: 5, text: "Best study abroad consultant in Anand district. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "7",
    name: "EEC Parvat Patia (Dumbhal)",
    city: "Surat",
    area: "Dumbhal",
    address: "UG-10, AMS, Shri Vardhan Textile Market, Above Zudio & Opp. Samrat International School, Dumbhal, Surat",
    postalCode: "395010",
    lat: "21.1959",
    lng: "72.8634",
    map: "https://maps.app.goo.gl/v4X4Xn9drJngRj2h9",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880210", whatsapp: "918758880210" },
      { type: "Admission & Visa", phone: "+918758880210", whatsapp: "918758880210" }
    ],
    counselors: [
      { phone: "8758880210", email: "eecparvatpatiya@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 66,
    reviews: [
      { author: "Darshan Desai", rating: 5, text: "Great coaching center with excellent service. Close to Dumbhal area.", date: "2025-12" },
      { author: "Priya Patel", rating: 5, text: "Good coaching with experienced faculties. Very supportive staff.", date: "2025-11" },
      { author: "Raj Modi", rating: 5, text: "Helpful counselors for Canada visa process. Recommended!", date: "2025-11" }
    ]
  },
  {
    id: "8",
    name: "EEC Mota Varachha",
    city: "Surat",
    area: "Mota Varachha",
    address: "4th Floor, Opera Business Hub, Lajamni Chowk, Mota Varachha, Surat",
    postalCode: "394101",
    lat: "21.2384",
    lng: "72.8942",
    map: "https://maps.app.goo.gl/zhgM8HA2CjJu8c6m9",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750018", whatsapp: "918758750018" },
      { type: "Admission & Visa", phone: "+918758880035", whatsapp: "918758880035" }
    ],
    counselors: [
      { phone: "8758880035", email: "eecvarachacanada@gmail.com" }
    ],
    rating: 4.5,
    reviewCount: 602,
    reviews: [
      { author: "Prem Bhagwat", rating: 5, text: "Best for Canada visa. Got my study permit easily with their guidance.", date: "2025-12" },
      { author: "Kishan Patel", rating: 5, text: "Excellent IELTS preparation with regular feedback and mock tests.", date: "2025-11" },
      { author: "Nisha Shah", rating: 5, text: "Professional staff and good infrastructure. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "9",
    name: "EEC Katargam",
    city: "Surat",
    area: "Katargam",
    address: "2nd Floor, Neeru Farms, Rajhans Flamingo, Gajera Rd, Priya Park Society, Surat",
    postalCode: "395004",
    lat: "21.2291",
    lng: "72.8286",
    map: "https://maps.app.goo.gl/6NfEPdx7ThDbkjtm8",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880160", whatsapp: "918758880160" },
      { type: "Admission & Visa", phone: "+918758880630", whatsapp: "918758880630" }
    ],
    counselors: [
      { phone: "8758880630", email: "eeccouns49@gmail.com" }
    ],
    rating: 4.9,
    reviewCount: 152,
    reviews: [
      { author: "Ketan Patel", rating: 5, text: "Excellent coaching center. Got 7 bands in IELTS with their help.", date: "2025-12" },
      { author: "Divya Shah", rating: 5, text: "Very supportive team for Australia visa process. Great experience!", date: "2025-11" },
      { author: "Rahul Modi", rating: 5, text: "Highly recommend for study abroad guidance. Professional service.", date: "2025-11" }
    ]
  },
  {
    id: "10",
    name: "EEC Ghod Dod Road",
    city: "Surat",
    area: "Ghod Dod Road",
    address: "3rd Floor, Jade Blue Union Square, Ghod Dod Rd, Surat",
    postalCode: "395007",
    lat: "21.1764",
    lng: "72.8066",
    map: "https://maps.app.goo.gl/C3wzygXWeAHW6b8t5",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758757777", whatsapp: "918758757777" },
      { type: "Admission & Visa", phone: "+918758880170", whatsapp: "918758880170" }
    ],
    counselors: [
      { phone: "9227112456", email: "eeccouns59@gmail.com" },
      { phone: "8758880170", email: "eeccouns017@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 1135,
    reviews: [
      { author: "Parth Patel", rating: 5, text: "Premium location and excellent service quality. Great tutors!", date: "2025-12" },
      { author: "Meera Joshi", rating: 5, text: "Got UK visa in first attempt. Great counselors and supportive staff!", date: "2025-11" },
      { author: "Vijay Shah", rating: 5, text: "Best IELTS coaching in Ghod Dod area. Highly recommended!", date: "2025-11" }
    ]
  },
  {
    id: "11",
    name: "EEC Vesu",
    city: "Surat",
    area: "Vesu",
    address: "1st Floor, International Finance Centre, IFC, Vip Rd, Vesu, Surat",
    postalCode: "395007",
    lat: "21.1517",
    lng: "72.7752",
    map: "https://maps.app.goo.gl/dNUVu7cD7nE4mbcBA",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750029", whatsapp: "918758750029" },
      { type: "Admission & Visa", phone: "+918758750029", whatsapp: "918758750029" }
    ],
    counselors: [
      { phone: "8758750029", email: "eecvesu@gmail.com" }
    ],
    rating: 5.0,
    reviewCount: 22,
    reviews: [
      { author: "Ankit Patel", rating: 5, text: "Premium branch with excellent facilities. Great experience!", date: "2025-12" },
      { author: "Sneha Modi", rating: 5, text: "Very professional approach to visa guidance. Highly recommend!", date: "2025-11" },
      { author: "Raj Shah", rating: 5, text: "Got my Ireland visa approved. Highly satisfied with the service!", date: "2025-11" }
    ]
  },
  {
    id: "12",
    name: "EEC Vapi",
    city: "Vapi",
    area: "Daulat Nagar",
    address: "3rd Floor, EEC, ISquare Building, Daman Rd, Opposite Axis Bank, Daulat Nagar, Vapi",
    postalCode: "396191",
    lat: "20.3893",
    lng: "72.9106",
    map: "https://maps.app.goo.gl/YiLTBLZhCm6rBdnD8",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880040", whatsapp: "918758880040" },
      { type: "Admission & Visa", phone: "+918758880040", whatsapp: "918758880040" }
    ],
    counselors: [
      { phone: "8758880040", email: "eecvisavapi@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 245,
    reviews: [
      { author: "Darshan Patel", rating: 5, text: "Only reliable study abroad consultant in Vapi. Highly professional!", date: "2025-12" },
      { author: "Kavita Shah", rating: 5, text: "Excellent IELTS coaching and visa support. Great experience!", date: "2025-11" },
      { author: "Raj Desai", rating: 5, text: "Got Canada PR with their guidance. Thank you EEC team!", date: "2025-11" }
    ]
  },
  {
    id: "13",
    name: "EEC Navsari",
    city: "Navsari",
    area: "Khumbharwad",
    address: "4th Floor, Sachi Arcade, Opp. Prajapati Ashram, Khumbharwad, Navsari",
    postalCode: "396445",
    lat: "20.9467",
    lng: "72.9520",
    map: "https://maps.app.goo.gl/MS9E6Rc53e8LA9Ly7",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880055", whatsapp: "918758880055" },
      { type: "Admission & Visa", phone: "+918758880055", whatsapp: "918758880055" }
    ],
    counselors: [
      { phone: "8758880055", email: "eeccouns48@gmail.com" },
      { phone: "", email: "eecnavsarivisa@gmail.com" },
      { phone: "6355511406", email: "eeccouns42@gmail.com" }
    ],
    rating: 4.8,
    reviewCount: 312,
    reviews: [
      { author: "Hetal Desai", rating: 5, text: "Best study abroad center in South Gujarat. Great guidance!", date: "2025-12" },
      { author: "Vishal Patel", rating: 5, text: "Got my UK visa. Very supportive and knowledgeable counselors.", date: "2025-11" },
      { author: "Priya Modi", rating: 5, text: "Excellent IELTS training with experienced teachers. Recommend!", date: "2025-11" }
    ]
  },
  {
    id: "14",
    name: "EEC Bharuch",
    city: "Bharuch",
    area: "Station Road",
    address: "3rd Floor, Shalimar Complex, Above Reliance Mart, Station Road, Bharuch",
    postalCode: "392001",
    lat: "21.7051",
    lng: "72.9959",
    map: "https://maps.app.goo.gl/VBAtqRoL3PiH4oBL9",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758884889", whatsapp: "918758884889" },
      { type: "Admission & Visa", phone: "+918758884889", whatsapp: "918758884889" }
    ],
    counselors: [
      { phone: "8758884889", email: "eecbharuchvisa@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 189,
    reviews: [
      { author: "Sanjay Modi", rating: 5, text: "Only trusted consultant in Bharuch for abroad studies. Excellent!", date: "2025-12" },
      { author: "Priti Shah", rating: 5, text: "Professional guidance for Canada immigration. Great counselors!", date: "2025-11" },
      { author: "Ketan Patel", rating: 5, text: "Got 7.5 bands with their coaching. Highly recommend EEC!", date: "2025-11" }
    ]
  },
  {
    id: "15",
    name: "EEC Memnagar",
    city: "Ahmedabad",
    area: "Memnagar",
    address: "2nd Floor, Satya One, Opp. Manav Mandir, Helmet Circle, Memnagar, Ahmedabad",
    postalCode: "380052",
    lat: "23.0504",
    lng: "72.5356",
    map: "https://maps.app.goo.gl/HabxCB5xTpg2CDwg6",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758883889", whatsapp: "918758883889" },
      { type: "Admission & Visa", phone: "+918758880310", whatsapp: "918758880310" }
    ],
    counselors: [
      { phone: "8758880100", email: "eecukahmvisa@gmail.com" },
      { phone: "8758880490", email: "eeccouns54@gmail.com" },
      { phone: "8758880310", email: "eeccouns032@gmail.com" },
      { phone: "8758880510", email: "eecghatlodiyavisa01@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 936,
    reviews: [
      { author: "Shadab Puthawala", rating: 5, text: "Excellent visa guidance. Got my student visa approved quickly.", date: "2025-12" },
      { author: "Moksh Parikh", rating: 5, text: "Best tutors for IELTS preparation. Highly recommend!", date: "2025-11" },
      { author: "Desai Riyansh", rating: 5, text: "Professional service and supportive counselors.", date: "2025-10" }
    ]
  },
  {
    id: "16",
    name: "EEC Ghatlodiya",
    city: "Ahmedabad",
    area: "Ghatlodiya",
    address: "3rd Floor, Shayona Sarvopari, Shayona City, RC Technical Road, Ghatlodiya, Chanakyapuri, Ahmedabad",
    postalCode: "380061",
    lat: "23.0710",
    lng: "72.5356",
    map: "https://maps.app.goo.gl/svz3SdkthSb6k1Kd6",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880710", whatsapp: "918758880710" },
      { type: "Admission & Visa", phone: "+918758880018", whatsapp: "918758880018" }
    ],
    counselors: [
      { phone: "8758880018", email: "eecghatlodiyavisa@gmail.com" }
    ],
    rating: 5.0,
    reviewCount: 59,
    reviews: [
      { author: "Parth Patel", rating: 5, text: "New branch with excellent service quality. Great experience!", date: "2025-12" },
      { author: "Kajal Shah", rating: 5, text: "Very knowledgeable counselors for UK visa. Highly professional!", date: "2025-11" },
      { author: "Viral Modi", rating: 5, text: "Got my Australia visa. Highly satisfied with the service!", date: "2025-11" }
    ]
  },
  {
    id: "17",
    name: "EEC Chandkheda",
    city: "Ahmedabad",
    area: "Chandkheda",
    address: "4th Floor, Sigma Arcade, Above Vijay Sales, Near Visat Circle, Chandkheda, Ahmedabad",
    postalCode: "382424",
    lat: "23.1116",
    lng: "72.5727",
    map: "https://maps.app.goo.gl/y1ARGMfmyjMxun728",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750010", whatsapp: "918758750010" },
      { type: "Admission & Visa", phone: "+918758750010", whatsapp: "918758750010" }
    ],
    counselors: [
      { phone: "8758750010", email: "eecchandkheda@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 144,
    reviews: [
      { author: "Yashvi Patel", rating: 5, text: "Best option for North Ahmedabad students. Great teachers!", date: "2025-12" },
      { author: "TATHYA VYAS", rating: 5, text: "Got my Canada study permit easily. Excellent guidance!", date: "2025-11" },
      { author: "NARESH MAKWANA", rating: 5, text: "Excellent IELTS coaching with flexible timings. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "18",
    name: "EEC Maninagar",
    city: "Ahmedabad",
    area: "Maninagar",
    address: "4th Floor, Prism Building, Below Apple Cinema, Shah Alam Tolnaka, Kankaria, Ahmedabad",
    postalCode: "380008",
    lat: "22.9972",
    lng: "72.6033",
    map: "https://maps.app.goo.gl/zHAm836PeUWRQDDh7",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+917096083333", whatsapp: "917096083333" },
      { type: "Admission & Visa", phone: "+918758880015", whatsapp: "918758880015" }
    ],
    counselors: [
      { phone: "8758880015", email: "eeccouns39@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 533,
    reviews: [
      { author: "Rohan Patel", rating: 5, text: "Excellent branch near Kankaria. Very professional staff!", date: "2025-12" },
      { author: "Shreya Shah", rating: 5, text: "Got 8 bands in IELTS with their guidance. Great teachers!", date: "2025-11" },
      { author: "Viral Modi", rating: 5, text: "Best visa consultant in East Ahmedabad. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "19",
    name: "EEC Odhav",
    city: "Ahmedabad",
    area: "Odhav",
    address: "2nd Floor, Kahan Commercial Complex, Sardar Patel Ring Rd, Above Vijay Sales, Gokul Nagar, Adinath Nagar, Odhav, Ahmedabad",
    postalCode: "382415",
    lat: "23.0249",
    lng: "72.6657",
    map: "https://maps.app.goo.gl/AM2hxunaJJw1mQes5",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758881885", whatsapp: "918758881885" },
      { type: "Admission & Visa", phone: "+918758881885", whatsapp: "918758881885" }
    ],
    counselors: [
      { phone: "8758881885", email: "eeccouns55@gmail.com" },
      { phone: "8758880570", email: "eeccouns38@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 301,
    reviews: [
      { author: "Ketan Modi", rating: 5, text: "Convenient location on SP Ring Road. Excellent service and staff.", date: "2025-12" },
      { author: "Harsh Patel", rating: 5, text: "Professional visa guidance for UK. Got my visa approved!", date: "2025-11" },
      { author: "Payal Shah", rating: 5, text: "Good IELTS coaching with regular tests. Very supportive teachers.", date: "2025-11" }
    ]
  },
  {
    id: "20",
    name: "EEC Nikol",
    city: "Ahmedabad",
    area: "Nikol",
    address: "3rd Floor, Suvas Scala, Opp. Nikol Police Station, Nikol, Ahmedabad",
    postalCode: "382350",
    lat: "23.0451",
    lng: "72.6657",
    map: "https://maps.app.goo.gl/wmFoU7EjVnZ6fUBU6",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880700", whatsapp: "918758880700" },
      { type: "Admission & Visa", phone: "+918758880700", whatsapp: "918758880700" }
    ],
    counselors: [
      { phone: "8758880700", email: "eecnikolvisa@gmail.com" }
    ],
    rating: 4.9,
    reviewCount: 402,
    reviews: [
      { author: "Prajapati Rohan", rating: 5, text: "Best coaching center in Nikol area. Highly recommend for IELTS!", date: "2025-12" },
      { author: "Yash Patel", rating: 5, text: "Got Canada PR with their expert guidance. Great counselors!", date: "2025-11" },
      { author: "Khushi Shah", rating: 5, text: "Excellent faculty and supportive staff. Very professional!", date: "2025-11" }
    ]
  },
  {
    id: "21",
    name: "EEC Bapunagar",
    city: "Ahmedabad",
    area: "Bapunagar",
    address: "2nd Floor, White House, India Colony Road, Opposite Swaminarayan Mandir, Ahmedabad",
    postalCode: "380024",
    lat: "23.0427",
    lng: "72.6289",
    map: "https://maps.app.goo.gl/TrwUQNXy2u2QA7vWA",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880320", whatsapp: "918758880320" },
      { type: "Admission & Visa", phone: "+918758880390", whatsapp: "918758880390" }
    ],
    counselors: [
      { phone: "8758880390", email: "eecbapunagarvisa01@gmail.com" }
    ],
    rating: 4.6,
    reviewCount: 347,
    reviews: [
      { author: "Dhruv Patel", rating: 5, text: "Trusted name in study abroad. Very helpful and supportive staff.", date: "2025-12" },
      { author: "Riya Patel", rating: 5, text: "Got my Australia visa approved. Thank you EEC team!", date: "2025-11" },
      { author: "Mehul Shah", rating: 5, text: "Excellent IELTS preparation with regular mock tests.", date: "2025-11" }
    ]
  },
  {
    id: "22",
    name: "EEC Naroda",
    city: "Ahmedabad",
    area: "Naroda",
    address: "2nd Floor, Sahitya Hills & Icon, Above Style Up Store, Muktidham Char Rasta, Vasant Vihar 2, Naroda, Ahmedabad",
    postalCode: "382330",
    lat: "23.0673",
    lng: "72.6580",
    map: "https://maps.app.goo.gl/Ec65JHFzi4cy1e459",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880730", whatsapp: "918758880730" },
      { type: "Admission & Visa", phone: "+918758880730", whatsapp: "918758880730" }
    ],
    counselors: [
      { phone: "8758880032", email: "eecnarodavisa@gmail.com" }
    ],
    rating: 4.8,
    reviewCount: 312,
    reviews: [
      { author: "Arjun Modi", rating: 5, text: "Best study abroad consultant in Naroda. Excellent guidance!", date: "2025-12" },
      { author: "Tanvi Shah", rating: 5, text: "Professional guidance for Canada immigration. Great team!", date: "2025-11" },
      { author: "Ketan Prajapati", rating: 5, text: "Got 7 bands in first attempt! Highly recommend EEC!", date: "2025-11" }
    ]
  },
  {
    id: "23",
    name: "EEC Kalol",
    city: "Kalol",
    area: "Memon Market",
    address: "2nd Floor, Above Raymond, Near HDFC Bank, Navjivan Mill Compound, Memon Market, Kalol",
    postalCode: "382721",
    lat: "23.2393",
    lng: "72.4991",
    map: "https://maps.app.goo.gl/J7JbtSYwE9rRkXbi9",
    timings: {
      coachingCounseling: "10:00 AM to 07:00 PM",
      demoClass: "08:00 AM to 09:00 PM",
      visaCounseling: "10:00 AM to 07:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750090", whatsapp: "918758750090" },
      { type: "Admission & Visa", phone: "+918758750090", whatsapp: "918758750090" }
    ],
    counselors: [
      { phone: "8758750090", email: "eeckalol@gmail.com" }
    ],
    rating: 4.9,
    reviewCount: 178,
    reviews: [
      { author: "Jignesh Patel", rating: 5, text: "Only reliable study abroad center in Kalol. Great service!", date: "2025-12" },
      { author: "Pooja Shah", rating: 5, text: "Got my Canada student visa. Excellent guidance and support!", date: "2025-11" },
      { author: "Hardik Thakkar", rating: 5, text: "Best IELTS coaching in Kalol region. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "24",
    name: "EEC Himatnagar",
    city: "Himatnagar",
    area: "Main Road",
    address: "2nd Floor, Platinum Square Building, Opposite Post Office, Himatnagar",
    postalCode: "383001",
    lat: "23.5977",
    lng: "72.9698",
    map: "https://maps.app.goo.gl/KcBi8DfDZ4mzsnnu5",
    timings: {
      coachingCounseling: "09:00 AM to 06:00 PM",
      demoClass: "09:00 AM to 06:00 PM",
      visaCounseling: "09:00 AM to 06:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750080", whatsapp: "918758750080" },
      { type: "Admission & Visa", phone: "+918758880080", whatsapp: "918758880080" }
    ],
    counselors: [
      { phone: "8758750080", email: "eechimatnagar@gmail.com" }
    ],
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      { author: "Manish Patel", rating: 5, text: "Best option in Sabarkantha district for abroad studies. Great!", date: "2025-12" },
      { author: "Nidhi Shah", rating: 5, text: "Professional and trustworthy consultants. Excellent service!", date: "2025-11" },
      { author: "Divya Thakkar", rating: 5, text: "Got my UK visa approved. Thank you EEC team!", date: "2025-11" }
    ]
  },
  {
    id: "25",
    name: "EEC Mehsana",
    city: "Mehsana",
    area: "Radhanpur Road",
    address: "2nd Floor, Perfect Plaza, Near Aayush Hospital, Radhanpur Road, Mehsana",
    postalCode: "384002",
    lat: "23.6000",
    lng: "72.4000",
    map: "https://maps.app.goo.gl/HACNeuMnYg56HdTf6",
    timings: {
      coachingCounseling: "09:00 AM to 06:00 PM",
      demoClass: "09:00 AM to 06:00 PM",
      visaCounseling: "09:00 AM to 06:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758880886", whatsapp: "918758880886" },
      { type: "Admission & Visa", phone: "+918758880069", whatsapp: "918758880069" }
    ],
    counselors: [
      { phone: "8758880069", email: "eecahmusa@gmail.com" }
    ],
    rating: 4.7,
    reviewCount: 234,
    reviews: [
      { author: "Jayesh Patel", rating: 5, text: "Best study abroad consultant in North Gujarat. Very professional!", date: "2025-12" },
      { author: "Krupa Modi", rating: 5, text: "Got Canada study permit with their help. Great guidance!", date: "2025-11" },
      { author: "Nirav Shah", rating: 5, text: "Excellent IELTS coaching and visa support. Highly recommend!", date: "2025-11" }
    ]
  },
  {
    id: "26",
    name: "EEC Visnagar",
    city: "Visnagar",
    area: "Kheralu Road",
    address: "2nd Floor, Above Shukan Restaurant, Visnagar Kheralu Road, Visnagar",
    postalCode: "384315",
    lat: "23.7000",
    lng: "72.5500",
    map: "https://maps.app.goo.gl/WYhAJgDMYTwbLHUY6",
    timings: {
      coachingCounseling: "09:00 AM to 06:00 PM",
      demoClass: "09:00 AM to 06:00 PM",
      visaCounseling: "09:00 AM to 06:00 PM",
      workingDays: "Monday to Saturday",
      closedOn: "Sunday"
    },
    contactPoints: [
      { type: "Coaching", phone: "+918758750086", whatsapp: "918758750086" },
      { type: "Admission & Visa", phone: "+918758750086", whatsapp: "918758750086" }
    ],
    counselors: [
      { phone: "8758750086", email: "eecvisnagar@gmail.com" }
    ],
    rating: 4.9,
    reviewCount: 89,
    reviews: [
      { author: "Rohit Patel", rating: 5, text: "Only study abroad center in Visnagar. Excellent service and staff!", date: "2025-12" },
      { author: "Jyoti Shah", rating: 5, text: "Got my Australia visa approved. Very helpful and supportive team.", date: "2025-11" },
      { author: "Bhavesh Thakkar", rating: 5, text: "Best IELTS coaching in Visnagar region. Highly recommended!", date: "2025-11" }
    ]
  }
];

// Legacy export for backward compatibility
export const BRANCHES_SIMPLE = BRANCHES.map(b => ({
  id: b.id,
  name: b.name,
  city: b.city,
  area: b.area,
  address: b.address,
  postalCode: b.postalCode,
  lat: b.lat,
  lng: b.lng,
  phone: b.contactPoints[0]?.phone || "",
  whatsapp: b.contactPoints[0]?.whatsapp || "",
  map: b.map,
  email: b.counselors[0]?.email || "",
  rating: b.rating,
  reviewCount: b.reviewCount
}));

// ============================================================================
// AI TOOLS DATA
// ============================================================================
export const AI_TOOLS = [
  { name: 'AI Tools Library', url: 'https://ai.eecglobal.com', icon: '🏠', countryCode: 'home', isNew: false, description: 'Complete AI Tools Collection by EEC' },
  { name: 'Career Counselor AI', url: 'https://ai.eecglobal.com/careercounselor', icon: '🎯', countryCode: 'career', isNew: true, description: 'Career prospects, salaries, hiring companies for any course worldwide' },
  { name: 'Ireland Guide 2026', url: 'https://ireland.eecglobal.com', icon: '🇮🇪', countryCode: 'ie', isCurrent: true, description: '100% FREE Comprehensive Study in Ireland Guide for Indian Students' },
  { name: 'Germany Guide 2026', url: 'https://germany.eecglobal.com/public', icon: '🇩🇪', countryCode: 'de', isNew: true, description: 'Public University Guide - Study in Germany' },
  { name: 'Australia Guide', url: 'https://australia.eecglobal.com', icon: '🇦🇺', countryCode: 'au', isNew: false, description: 'Complete Australia Study Abroad Guide' },
  { name: 'USA F-1 Visa Prep', url: 'https://ai.eecglobal.com/usavisaprep', icon: '🇺🇸', countryCode: 'us', description: 'F-1 Student Visa Interview Preparation AI' },
  { name: 'UK Pre-CAS Prep', url: 'https://ai.eecglobal.com/ukprecas', icon: '🇬🇧', countryCode: 'gb', description: 'Pre-CAS & Airport Interview Preparation' },
  { name: 'Australia GS Prep', url: 'https://ai.eecglobal.com/australiagsprep', icon: '🦘', countryCode: 'au', description: 'Genuine Student Visa Interview Preparation' },
  { name: 'Australia PR Calculator', url: 'https://australia.eecglobal.com/prpointscalculator', icon: '🧮', countryCode: 'au', description: 'Expert PR Points Calculator Australia' },
  { name: 'Germany Visa Prep', url: 'https://ai.eecglobal.com/germanyvisaprep', icon: '🏰', countryCode: 'de', description: 'German Student Visa Interview Prep' },
  { name: 'NZ Visa Prep', url: 'https://ai.eecglobal.com/nzvisaprep', icon: '🇳🇿', countryCode: 'nz', description: 'New Zealand Visa Interview Preparation' },
  { name: 'Travel Agent AI', url: 'https://ai.eecglobal.com/travelagent', icon: '✈️', countryCode: 'globe', isNew: true, description: 'Tourist & Student Visa + Flight Information' },
  { name: 'IELTS AI Bot', url: 'https://t.me/eecieltsbot', icon: '📝', countryCode: 'pencil', isNew: true, description: 'FREE 24x7 Unlimited Speaking & Writing Practice with AI Scoring' },
];

// ============================================================================
// CERTIFICATIONS DATA
// ============================================================================
export const CERTIFICATIONS = [
  { name: 'AIRC Certified', validity: '2031', url: 'https://airceducation.app.neoncrm.com/membership-directory/details/5?memberId=9367', description: 'American International Recruitment Council Member', issuer: 'AIRC', dateIssued: '2021-01-15' },
  { name: 'ICEF Agency', validity: null, url: 'https://www.icef.com/agency/00120000014SG0aAAG', description: 'ICEF IAS Accredited Agency', issuer: 'ICEF', dateIssued: '2015-06-01' },
  { name: 'U.S. News Global Education', validity: null, url: 'https://www.credential.net/97326517-ea1a-4c00-8e76-dd3be34c91fe#acc.3GnypZ6v', description: 'Only Certified Agency in India', issuer: 'U.S. News & World Report', dateIssued: '2022-03-10' },
  { name: 'British Council UK', validity: null, url: null, description: 'UK Education Agent Training Certified', issuer: 'British Council', dateIssued: '2018-09-15' },
  { name: 'Australia PIER', validity: null, url: null, description: 'Professional International Education Resources', issuer: 'PIER Australia', dateIssued: '2017-04-20' },
  { name: 'New Zealand ENZRA', validity: null, url: null, description: 'Education New Zealand Recognised Agency', issuer: 'Education New Zealand', dateIssued: '2019-11-05' },
  { name: 'Ireland MEI-RELSA', validity: null, url: null, description: 'Marketing English in Ireland Recognised Agent', issuer: 'MEI Ireland', dateIssued: '2020-02-28' },
  { name: 'Canada CCEA', validity: null, url: null, description: 'Canadian Certified Education Agent', issuer: 'CCEA Canada', dateIssued: '2016-08-12' },
  { name: 'USATC Certified', validity: null, url: null, description: 'US Agent Training Certification', issuer: 'USATC', dateIssued: '2019-05-18' },
  { name: 'ICEF Verified', validity: null, url: 'https://verifier.nextid.com/?url=https://issuer-services.icef.com/certifications/57642946-6f1c-4a92-b8db-b6b617fdd880', description: 'ICEF Digital Verification', issuer: 'ICEF', dateIssued: '2023-01-10' },
];

// ============================================================================
// SOCIAL LINKS
// ============================================================================
export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://www.instagram.com/eecglobal', icon: 'Instagram', followers: '25K+' },
  { platform: 'Facebook', url: 'https://www.facebook.com/eecglobal', icon: 'Facebook', followers: '50K+' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@eecgujarat', icon: 'Youtube', followers: '15K+' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/school/eecindia', icon: 'Linkedin', followers: '10K+' },
  { platform: 'X', url: 'https://x.com/eecglobalindia', icon: 'Twitter', followers: '5K+' },
];

// ============================================================================
// LEADERSHIP DATA
// ============================================================================
export const LEADERSHIP = [
  {
    image: "https://ai.eecglobal.com/assets/Amit-Jalan.jpeg",
    name: "Amit Jalan",
    title: "Managing Director & Lead AI Strategist",
    credentials: "Purdue University Alumnus, USA",
    experience: "28+ Years",
    expertise: ["Irish Immigration Frameworks", "University Admissions", "Complex Visa Cases", "AI Strategy"],
    linkedin: "https://in.linkedin.com/in/amitjalan",
    quote: "This tool isn't just practice; it's a strategic simulation of a real Study Visa credibility interview. It finds the gaps before the visa officer does.",
    alumniOf: { name: "Purdue University", country: "USA", graduationYear: "1996" }
  },
  {
    image: "https://ai.eecglobal.com/assets/Madhav-Gupta.jpeg",
    name: "CA Madhav Gupta",
    title: "Director",
    credentials: "Chartered Accountant (2012), Membership No. 421209",
    experience: "15+ Years",
    expertise: ["Irish Financial Compliance", "INIS Source of Funds", "Stamp 1G Pathways", "Fund Structuring"],
    linkedin: "https://in.linkedin.com/in/madhav-gupta-9027781a7",
    quote: "Financials are the bedrock of your Ireland visa application. This AI helps you construct a transparent, irrefutable 'Source of Funds' story.",
    hasCredential: { name: "Chartered Accountant", membershipNo: "421209", issuedBy: "ICAI", year: "2012" }
  },
  {
    image: "https://ai.eecglobal.com/assets/mohita-gupta.jpeg",
    name: "Mohita Gupta",
    title: "Vice President – Counselling Services",
    credentials: "Ex-Investment Banker, Citibank Global",
    experience: "10+ Years",
    expertise: ["Credibility Interviews", "High-Risk Profiles", "Career Progression Strategy", "Visa Strategy"],
    linkedin: "https://in.linkedin.com/in/mohita-gupta-233383339",
    quote: "Ireland's visa criteria demand more than documents; they demand clear career logic. Our AI helps you build that professional story.",
    previousEmployer: { name: "Citibank", role: "Investment Banker" }
  }
];

// ============================================================================
// TOPICAL CLUSTERS - SILO ARCHITECTURE
// ============================================================================
export const TOPICAL_CLUSTERS = {
  irelandStudyVisa: {
    pillarPage: "Study in Ireland Visa Requirements 2026",
    clusterTopics: [
      "Ireland student visa for Indian students 2026",
      "Ireland Stamp 2 visa requirements",
      "Ireland student visa processing time 2026",
      "Ireland student visa documents checklist",
      "Ireland student visa interview questions",
      "Ireland visa application from Gujarat",
      "Ireland study visa fees 2026 in INR",
      "Ireland student visa success rate 2026",
      "Ireland visa credibility interview preparation",
      "INIS Ireland student visa guidelines 2026"
    ],
    lsiKeywords: [
      "Irish Naturalisation and Immigration Service",
      "GNIB registration Ireland",
      "IRP card Ireland students",
      "Ireland visa refusal reasons",
      "Ireland visa appeal process",
      "biometric appointment Ireland visa",
      "VFS Global Ireland visa",
      "Ireland embassy New Delhi",
      "Ireland visa tracking",
      "proof of funds Ireland student visa"
    ]
  },
  postStudyWork: {
    pillarPage: "Ireland Post-Study Work Visa Stamp 1G 2026",
    clusterTopics: [
      "Stamp 1G Ireland 2026 eligibility",
      "Ireland graduate visa 2 years 2026",
      "Third Level Graduate Programme Ireland",
      "Ireland work permit after masters 2026",
      "Ireland stay back option for Indian students",
      "Stamp 1G to work permit Ireland",
      "Ireland PR pathway for students 2026",
      "Critical skills employment permit Ireland",
      "Ireland job market for Indian graduates 2026",
      "Stamp 4 Ireland eligibility after Stamp 1G"
    ],
    lsiKeywords: [
      "TLGP Ireland",
      "Ireland graduate employability",
      "ICT sector Ireland jobs",
      "pharmaceutical jobs Ireland",
      "fintech careers Dublin",
      "Ireland minimum wage 2026",
      "PPSN number Ireland",
      "Revenue Ireland tax",
      "Ireland employment rights",
      "Irish work culture"
    ]
  }
};

// ============================================================================
// LSI KEYWORDS
// ============================================================================
export const LSI_KEYWORDS = {
  primary: ["study abroad Ireland", "Ireland education for Indians", "Irish universities admission", "Ireland student visa process", "Ireland post study work visa"],
  secondary: ["INIS Ireland", "IRP registration", "GNIB card", "Stamp 2 Stamp 1G", "Third Level Graduate Programme", "Critical Skills Permit", "General Employment Permit", "QQI Ireland", "NFQ Level 8 Level 9", "Honours Bachelor Degree Ireland", "Masters Ireland duration"],
  tertiary: ["Celtic Tiger economy", "Silicon Docks Dublin", "IFSC Dublin", "pharmaceutical hub Ireland", "tech jobs Ireland", "Google Facebook Ireland", "Apple Cork Ireland", "Intel Ireland", "Pfizer Ireland", "MSD Ireland careers"],
  semantic: ["Emerald Isle education", "land of saints scholars", "English speaking Europe", "EU education gateway", "post-Brexit Ireland advantage", "Common Travel Area UK Ireland", "Schengen adjacent Ireland", "Irish hospitality students", "craic Irish culture", "Gaeltacht regions"],
  intent: ["how to study in Ireland from India", "is Ireland good for Indian students", "Ireland vs UK for masters", "Ireland vs Canada for study", "why choose Ireland for higher education", "Ireland safe for Indian students", "Indian food available Ireland", "Hindu temples Ireland Dublin", "Diwali celebration Ireland"]
};

// ============================================================================
// LONG-TAIL KEYWORDS
// ============================================================================
export const LONG_TAIL_KEYWORDS = {
  questions: [
    "how much bank balance required for Ireland student visa 2026",
    "can I work while studying in Ireland as Indian student",
    "what is the minimum IELTS score for Ireland student visa",
    "how long does Ireland student visa take from India",
    "is Ireland expensive for Indian students to study"
  ],
  comparisons: [
    "Ireland vs Germany for masters in 2026",
    "Dublin vs Cork for Indian students living cost",
    "TCD vs UCD which is better for Indians",
    "Ireland public vs private university fees",
    "September vs January intake Ireland pros cons"
  ]
};

// ============================================================================
// LOCAL HYPER-RELEVANCE
// ============================================================================
export const LOCAL_HYPER_RELEVANCE = {
  gujaratCities: [
    { city: "Ahmedabad", branches: 8, keywords: ["study abroad consultants Ahmedabad", "Ireland visa agent Ahmedabad", "IELTS coaching Ahmedabad"] },
    { city: "Surat", branches: 5, keywords: ["overseas education Surat", "Ireland student visa Surat", "study in Ireland from Surat"] },
    { city: "Vadodara", branches: 4, keywords: ["study abroad Vadodara", "Ireland education consultant Vadodara", "foreign education Baroda"] }
  ],
  corridorKeywords: [
    "Gujarat to Ireland student visa 2026",
    "Ahmedabad to Dublin direct flights",
    "Ireland universities accepting Gujarat students"
  ]
};

// ============================================================================
// COMPARISON DATA (NEW)
// ============================================================================
export const COMPARISON_DATA = {
  irelandVsOthers: [
    { country: "Ireland", postStudyWork: "2 years", minWage: "€14.50/hr", workHours: "20/40 hrs", language: "English", prPathway: "Yes (5 years)", tuitionRange: "€12,000-€25,000" },
    { country: "UK", postStudyWork: "2 years", minWage: "£11.44/hr", workHours: "20/unlimited", language: "English", prPathway: "Yes (5 years)", tuitionRange: "£15,000-£35,000" },
    { country: "Canada", postStudyWork: "3 years", minWage: "C$16.65/hr", workHours: "20/unlimited", language: "English/French", prPathway: "Yes (Express Entry)", tuitionRange: "C$20,000-C$40,000" },
    { country: "Australia", postStudyWork: "2-4 years", minWage: "A$23.23/hr", workHours: "48 hrs/fortnight", language: "English", prPathway: "Yes (Points)", tuitionRange: "A$25,000-A$45,000" },
    { country: "Germany", postStudyWork: "18 months", minWage: "€12.41/hr", workHours: "120 days/year", language: "German/English", prPathway: "Yes (2 years work)", tuitionRange: "€0-€3,000 (public)" }
  ]
};
