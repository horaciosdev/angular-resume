import { Resume } from './app/components/Resume';
import { environment } from './app/environments/environment';

export const RESUMES: Resume[] = [
  {
    id: 1,
    name: 'Horacio',
    photoUrl: 'http://localhost:4200/assets/image/horacio.png',
    role: 'Angular Front-end',
    about:
      'Sou um cara legal, amet consectetur adipisicing elit. Rerum distinctio porro consectetur debitis accusamus consequuntur natus, quibusdam repellat placeat ipsum facilis sunt expedita facere, dicta incidunt? Autem molestiae temporibus vel.',
    contacts: [
      {
        icon: 'icon',
        title: '',
        contact: '(51) 9-84041938',
      },
      {
        icon: 'icon',
        title: '',
        contact: '(51) 9-84041938',
      },
      {
        icon: 'icon',
        title: '',
        contact: '(51) 9-84041938',
      },
    ],
    follows: [
      { icon: 'icon', title: 'github', link: 'https://github.com/horaciosdev' },
      {
        icon: 'Licon',
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/horaciosdev/',
      },
      { icon: 'icon', title: 'github', link: 'https://github.com/horaciosdev' },
    ],
    workExperiences: [
      { company: 'Update', period: '2010-2015' },
      { company: 'Fortune', period: '2015-2020' },
      { company: 'SplashScreen', period: '2020-2022' },
    ],
    educationArr: [
      {
        institution: 'FADERGS',
        course: 'Sistemas para Internet',
        period: '2018-2020',
      },
      {
        institution: 'UNISINOS',
        course: 'Jogos Digitais',
        period: '2018-2020',
      },
      {
        institution: 'QI',
        course: 'Técnico em Informática',
        period: '2018-2020',
      },
    ],
    programmingSkills: [
      { icon: 'icon', language: 'HTML', level: 90 },
      { icon: 'icon', language: 'CSS', level: 90 },
      { icon: 'icon', language: 'JavaScript', level: 90 },
      { icon: 'icon', language: 'Angular', level: 90 },
      { icon: 'icon', language: 'PHP', level: 90 },
    ],
    softwareSkills: [
      { icon: 'icon', software: 'Photoshop', level: 60 },
      { icon: 'icon', software: 'Photoshop', level: 60 },
      { icon: 'icon', software: 'Photoshop', level: 60 },
      { icon: 'icon', software: 'Photoshop', level: 60 },
      { icon: 'icon', software: 'Photoshop', level: 60 },
    ],
    interests: [
      { icon: 'icon', interest: 'Draw' },
      { icon: 'icon', interest: 'Draw' },
      { icon: 'icon', interest: 'Draw' },
      { icon: 'icon', interest: 'Draw' },
      { icon: 'icon', interest: 'Draw' },
    ],
  },
];
