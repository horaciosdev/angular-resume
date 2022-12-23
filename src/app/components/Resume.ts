export interface Resume {
  id?: number;
  name: string;
  photoUrl: string;
  role: string;
  about: string;
  contacts: Contact[];
  follows: Follow[];
  workExperiences: WorkExperience[];
  educationArr: Education[];
  programmingSkills: ProgrammingSkills[];
  softwareSkills: SoftwareSkills[];
  interests: Interests[];
}

export interface Contact {
  icon: string;
  title: string;
  contact: string;
}

export interface Follow {
  icon: string;
  title: string;
  link: string;
}

export interface WorkExperience {
  company: string;
  period: string;
}

export interface Education {
  institution: string;
  course: string;
  period: string;
}

export interface ProgrammingSkills {
  icon: string;
  language: string;
  level: number;
}

export interface SoftwareSkills {
  icon: string;
  software: string;
  level: number;
}

export interface Interests {
  icon: string;
  interest: string;
}
