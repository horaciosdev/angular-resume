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
        icon: 'whatsapp',
        title: 'Whatsapp',
        contact: '+55 (51) 98404-1938',
      },
      {
        icon: 'email',
        title: 'Email',
        contact: 'horacio.schumann@gmail.com',
      },
      {
        icon: 'location',
        title: 'Location',
        contact: 'Porto Alegre/RS',
      },
    ],
    follows: [
      {
        icon: 'github',
        title: 'Github',
        link: 'https://github.com/horaciosdev',
      },
      {
        icon: 'linkedin',
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/horaciosdev/',
      },
      {
        icon: 'instagram',
        title: 'Instagram',
        link: 'https://www.instagram.com/bagreheads/',
      },
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
      { icon: 'html', language: 'HTML', level: 90 },
      { icon: 'css', language: 'CSS', level: 90 },
      { icon: 'sass', language: 'SASS / SCSS', level: 90 },
      { icon: 'javacript', language: 'JavaScript', level: 90 },
      { icon: 'typescript', language: 'TypeScript', level: 90 },
      { icon: 'jquery', language: 'jQuery', level: 90 },
      { icon: 'react', language: 'REACT', level: 90 },
      { icon: 'angular', language: 'Angular', level: 90 },
      { icon: 'php', language: 'PHP', level: 90 },
      { icon: 'mysql', language: 'MySQL', level: 90 },
    ],
    softwareSkills: [
      { icon: 'vscode', software: 'VS Code', level: 60 },
      { icon: 'photoshop', software: 'Photoshop', level: 60 },
      { icon: 'blender', software: 'Blender', level: 60 },
      { icon: 'inkscape', software: 'Inkscape', level: 60 },
      { icon: 'lmms', software: 'LMMS', level: 60 },
    ],
    interests: [
      { icon: 'brush', interest: '2D Art' },
      { icon: 'cube', interest: '3D Art' },
      { icon: 'pcmusic', interest: 'Music / SFX' },
      { icon: 'joystick', interest: 'Game Dev' },
      { icon: 'camera', interest: 'Photography' },
      { icon: 'phi', interest: 'Philosophy' },
    ],
  },
];
