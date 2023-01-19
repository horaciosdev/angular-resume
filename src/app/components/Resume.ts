export interface Resume {
  id?: number;
  name: string;
  image: string;
  role: string;
  about?: string;
  contacts: Contact[];
  follows: Follow[];
  experiences: Experience[];
  skills: Skills[];
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

export interface Experience {
  icon: string;
  title: string;
  history: History[];
}

export interface History {
  institution: string;
  description: string;
  period: string;
}

export interface Skill {
  icon: string;
  skillName: string;
  level: number;
}

export interface Skills {
  icon: string;
  title: string;
  skillList: Skill[];
}

export interface Interest {
  icon: string;
  interest: string;
  url: string;
}
