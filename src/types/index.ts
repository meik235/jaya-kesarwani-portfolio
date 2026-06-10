export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  groups: ExperienceGroup[]
  tags: string[]
}

export interface ExperienceGroup {
  heading: string
  bullets: string[]
}

export interface Project {
  number: string
  title: string
  description: string
  tags: string[]
  featured?: boolean
  github?: string
}

export interface ContactMethod {
  label: string
  value: string
  href: string
  icon: string
}

export interface ResumeData {
  name: string
  role: string
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
  summary: string
  stats: Stat[]
  skills: SkillCategory[]
  experience: ExperienceItem[]
  projects: Project[]
  contact: ContactMethod[]
  education: {
    degree: string
    university: string
    year: string
  }
  techStack: string[]
}
