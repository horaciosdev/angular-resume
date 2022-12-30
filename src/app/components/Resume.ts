export interface Resume {
  id?: number;
  name: string;
  photoUrl: string;
  role: string;
  about: string;
  contacts: Contact[];
  follows: Follow[];
  workExperiences: Career[];
  educationArr: Career[];
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

export interface Career {
  institution: string;
  description: string;
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
