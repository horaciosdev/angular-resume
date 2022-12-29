import { Resume } from './app/components/Resume';

export const RESUMES: Resume[] = [
  {
    id: 1,
    name: 'Horacio Schumann',
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
      { icon: 'html', skillName: 'HTML', level: 10 },
      { icon: 'css', skillName: 'CSS', level: 20 },
      { icon: 'sass', skillName: 'SASS / SCSS', level: 30 },
      { icon: 'javacript', skillName: 'JavaScript', level: 40 },
      { icon: 'typescript', skillName: 'TypeScript', level: 50 },
      { icon: 'jquery', skillName: 'jQuery', level: 60 },
      { icon: 'react', skillName: 'REACT', level: 70 },
      { icon: 'angular', skillName: 'Angular', level: 80 },
      { icon: 'php', skillName: 'PHP', level: 90 },
      { icon: 'mysql', skillName: 'MySQL', level: 100 },
    ],
    softwareSkills: [
      { icon: 'vscode', skillName: 'VS Code', level: 60 },
      { icon: 'photoshop', skillName: 'Photoshop', level: 70 },
      { icon: 'blender', skillName: 'Blender', level: 80 },
      { icon: 'inkscape', skillName: 'Inkscape', level: 60 },
      { icon: 'lmms', skillName: 'LMMS', level: 90 },
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
