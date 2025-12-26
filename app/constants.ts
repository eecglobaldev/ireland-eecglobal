import { RegionData, RegionId, VisaStep } from './types';

export const MINIMUM_WAGE_2026 = 14.50; // Based on Ireland's legal transition to the Living Wage by 2026
export const INR_EXCHANGE_RATE = 107;
export const COURSE_SEARCH_URL = "https://courses.eecglobal.com/ireland";

export const REGIONS: RegionData[] = [
  {
    id: RegionId.DUBLIN,
    name: "Dublin City",
    counties: ["Dublin"],
    gdp: "€262.1 Billion (2026 Est)",
    keyIndustries: ["Software & IT", "Banking & Finance", "Accounting"],
    topEmployers: ["Google", "Meta", "Pfizer", "Citibank", "Big 4 Firms"],
    housingCost: "Very High",
    description: "The main business city. Highest pay but very expensive rent. Best for Tech and Finance students.",
    cityHighlight: "Dublin is a global tech capital. You can work for the world's biggest companies while living in a city full of history and fun.",
    universities: [
      { 
        name: "Trinity College Dublin (TCD)", 
        type: "University", 
        strengths: ["Computer Science", "Law", "Arts"],
        admissionDifficulty: 'Hard',
        indiaRequirements: "CBSE/ICSE: 85-90% in 12th. Masters: 1st Class degree from top Indian college.",
        campusInfo: "A very old, historic campus in the city center. Famous for the Book of Kells library."
      },
      { 
        name: "University College Dublin (UCD)", 
        type: "University", 
        strengths: ["Business", "Science", "Engineering"],
        admissionDifficulty: 'Hard',
        indiaRequirements: "CBSE: 80%+. Masters: 65% in Bachelors. High IELTS needed (7.0).",
        campusInfo: "Huge campus with over 30,000 students. Has a very famous business school called Smurfit."
      },
      { 
        name: "Dublin City University (DCU)", 
        type: "University", 
        strengths: ["Tech", "Business", "Communications"],
        admissionDifficulty: 'Moderate',
        indiaRequirements: "CBSE: 75%+. Masters: 60% in degree. Focus on relevant work experience.",
        campusInfo: "Modern campus. Famous for helping students find internships (INTRA program)."
      },
      { 
        name: "TU Dublin", 
        type: "Technological University", 
        strengths: ["Engineering", "Cooking", "Applied Arts"],
        admissionDifficulty: 'Moderate',
        indiaRequirements: "12th: 70%+. Masters: 55-60% in relevant degree.",
        campusInfo: "Many locations across the city. Very practical learning with hands-on work."
      },
      { 
        name: "National College of Ireland (NCI)", 
        type: "Private College", 
        strengths: ["Data Science", "Cloud Computing"],
        admissionDifficulty: 'Easy',
        indiaRequirements: "Masters: 50% in degree. Popular with IT professionals.",
        campusInfo: "Located right in the financial district (IFSC). Small classes and very career-focused."
      }
    ]
  },
  {
    id: RegionId.SOUTH_WEST,
    name: "Cork City",
    counties: ["Cork", "Kerry"],
    gdp: "€131.5 Billion",
    keyIndustries: ["Medicine & Pharma", "Tech Support", "Cyber Security"],
    topEmployers: ["Apple", "Pfizer", "Novartis", "Trend Micro"],
    housingCost: "High",
    description: "The world's pharma hub and home to Apple's main Europe office. A great city that is slightly cheaper than Dublin.",
    cityHighlight: "Cork is famous for its friendly people and great food. It is the best place in the world for a career in making life-saving medicine.",
    universities: [
      { 
        name: "University College Cork (UCC)", 
        type: "University", 
        strengths: ["Food Science", "Medicine", "Engineering"],
        admissionDifficulty: 'Hard',
        indiaRequirements: "12th: 80%+. Masters: 60-65% in Bachelors. Strong SOP required.",
        campusInfo: "Beautiful riverside campus. Ranked highly for sustainability and medicine."
      },
      { 
        name: "Munster Technological University (MTU)", 
        type: "Technological University", 
        strengths: ["Chemical Engineering", "Biology"],
        admissionDifficulty: 'Moderate',
        indiaRequirements: "12th: 65-70%. Masters: 55%+. Good for engineering students.",
        campusInfo: "Close links to big factories. Students often get jobs in the local pharma companies."
      }
    ]
  },
  {
    id: RegionId.WEST,
    name: "Galway City",
    counties: ["Galway", "Mayo", "Roscommon"],
    gdp: "Global MedTech Hub",
    keyIndustries: ["Medical Tools", "IT Services"],
    topEmployers: ["Medtronic", "Boston Scientific", "Cisco"],
    housingCost: "High",
    description: "A beautiful, creative city and the world leader in making medical tools like heart stents.",
    cityHighlight: "Galway is the most artistic city in Ireland. It is small, friendly, and perfect for students who love culture and medical science.",
    universities: [
      { 
        name: "University of Galway", 
        type: "University", 
        strengths: ["Medical Engineering", "Marine Science"],
        admissionDifficulty: 'Hard',
        indiaRequirements: "12th: 80%+. Masters: 60%+. Requires high English scores.",
        campusInfo: "Vibrant city-center campus. Very famous for Biomedical research."
      },
      { 
        name: "Atlantic Technological University (ATU)", 
        type: "Technological University", 
        strengths: ["Medical Tech", "Hotel Management"],
        admissionDifficulty: 'Moderate',
        indiaRequirements: "12th: 60%+. Masters: 50-55%+. Focus on skill-based entry.",
        campusInfo: "Practical labs. Very popular for students who want to work in local MedTech firms."
      }
    ]
  },
  {
    id: RegionId.MID_WEST,
    name: "Limerick",
    counties: ["Limerick", "Clare", "Tipperary"],
    gdp: "Industrial Leader",
    keyIndustries: ["Aviation", "Manufacturing", "Pharma"],
    topEmployers: ["Analog Devices", "Dell", "Regeneron", "Shannon Aviation"],
    housingCost: "Moderate",
    description: "Famous for aviation and large factories. Rent is more affordable here.",
    cityHighlight: "Limerick is a great city for engineering and aviation. It is affordable and has a very strong sports and student community.",
    universities: [
      { 
        name: "University of Limerick (UL)", 
        type: "University", 
        strengths: ["Aero Engineering", "Work Placements"],
        admissionDifficulty: 'Moderate',
        indiaRequirements: "12th: 75%+. Masters: 60%. Good for those with sports interest too.",
        campusInfo: "Massive green campus. Every student gets a long work placement (Co-op) as part of the degree."
      },
      { 
        name: "Technological University of the Shannon (TUS)", 
        type: "Technological University", 
        strengths: ["Software", "Plastic Engineering"],
        admissionDifficulty: 'Easy',
        indiaRequirements: "12th: 60%. Masters: 50%+. Very welcoming to international students.",
        campusInfo: "Focus on industry needs. Located in Limerick and Athlone."
      }
    ]
  },
  {
    id: RegionId.SOUTH_EAST,
    name: "Waterford",
    counties: ["Waterford", "Carlow", "Wexford", "Kilkenny"],
    gdp: "New Tech Growth",
    keyIndustries: ["Pharma", "Software"],
    topEmployers: ["Teva", "Sanofi", "NearForm"],
    housingCost: "Moderate",
    description: "A growing area for science and tech. Very friendly for students on a budget.",
    cityHighlight: "Waterford is the oldest city in Ireland and is very sunny. It is a peaceful place to study with a fast-growing tech scene.",
    universities: [
      { 
        name: "South East Technological University (SETU)", 
        type: "Technological University", 
        strengths: ["IT", "Science", "Farming Tech"],
        admissionDifficulty: 'Easy',
        indiaRequirements: "12th: 60%. Masters: 50%+. Lower tuition fees than Dublin universities.",
        campusInfo: "Newest university in Ireland. Fast-growing and close to the sunny coast."
      }
    ]
  }
];

export const VISA_STEPS: VisaStep[] = [
  {
    id: '1',
    title: 'Get an Offer Letter',
    description: 'Apply to a college. Make sure they have the "TrustEd Ireland" mark for 2026. This proves they are a good school.',
  },
  {
    id: '2',
    title: 'Show Your Money (€10k)',
    description: '2026 Living Standard: You must show you have €10,000 for your first year to cover high inflation and rent.',
    criticalNote: 'Tip: Use an "Education Bond" (like EduStep) to store the €10k. Visa officers love this because it is easy to check.'
  },
  {
    id: '3',
    title: 'Pay Tuition Fees',
    description: 'Pay at least €6,000 or half of your total fee before you apply for the visa.',
  },
  {
    id: '4',
    title: 'Get Health Insurance',
    description: 'You must buy private medical insurance. It needs to cover at least €25k for accidents and illness.',
  },
  {
    id: '5',
    title: 'Police Clearance (PCC)',
    description: 'Get a PCC from the Passport Seva Kendra (PSK) in India. Do not get it from a local police station.',
  }
];