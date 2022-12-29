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
  programmingSkills: Skill[];
  softwareSkills: Skill[];
  interests: Interest[];
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

export interface Skill {
  icon: string;
  skillName: string;
  level: number;
}

export interface Interest {
  icon: string;
  interest: string;
}
