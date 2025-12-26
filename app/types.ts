export enum RegionId {
  DUBLIN = 'DUBLIN',
  SOUTH_WEST = 'SOUTH_WEST',
  WEST = 'WEST',
  MID_WEST = 'MID_WEST',
  SOUTH_EAST = 'SOUTH_EAST',
}

export interface University {
  name: string;
  type: 'University' | 'Technological University' | 'Private College';
  strengths: string[];
  admissionDifficulty: 'Hard' | 'Moderate' | 'Easy';
  indiaRequirements: string;
  campusInfo: string;
}

export interface RegionData {
  id: RegionId;
  name: string;
  counties: string[];
  gdp: string;
  keyIndustries: string[];
  topEmployers: string[];
  universities: University[];
  housingCost: 'Very High' | 'High' | 'Moderate';
  description: string;
  cityHighlight: string;
}

export interface VisaStep {
  id: string;
  title: string;
  description: string;
  criticalNote?: string;
}

export enum NavSection {
  ROAD_FROM_INDIA = 'road_from_india',
  DASHBOARD = 'dashboard',
  REGIONAL = 'regional',
  CALCULATOR = 'calculator',
  VISA = 'visa',
  ADMISSIONS = 'admissions',
  SPOUSE = 'spouse',
  PATHWAYS = 'pathways',
}