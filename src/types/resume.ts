export interface ContactInfo {
  Title: string
  Icon: string
  Info: string
  Url?: string
}

export interface BasicInfo {
  FirstName: string
  LastName: string
  Role: string
  Photo: string
  Contacts: ContactInfo[]
}

export interface Position {
  Title: string
  company: string
  company_details?: string
  location: string
  Date: string
  Details: string[]
  Badges: string[]
}

export interface Experience {
  Employer: string
  Positions: Position[]
}

export interface Project {
  ProjectTitle: string
  Description: string
  Badges: string[]
  AppUrl?: string
  GitHub?: string
  Post?: string
  Date: string
}

export interface Certificate {
  Course: string
  Year: string
  Certificate: string
  Platform: string
}

export interface Education {
  Diploma: string
  School: string
  Place: string
  Date: string
}

export interface TechnologyFamily {
  Family: string
  Items: string[]
}

export interface Language {
  Name: string
  Level: string
}

export interface ResumeData {
  BasicInfo: BasicInfo
  Profile: string
  Experience: Experience[]
  Projects: Project[]
  Certificates: Certificate[]
  Education: Education[]
  Skills: string[]
  Technologies: TechnologyFamily[]
  Languages: Language[]
  Diplomas: string[]
  Interests: string[]
  SoftSkills: string[]
}
