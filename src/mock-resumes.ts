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
      { institution: 'SplashScreen', description: 'Game Dev', period: '2020-2022' },
      { institution: 'Fortune', description: 'Full Stack Developer', period: '2015-2020' },
      { institution: 'Update', description: 'Full Stack Developer', period: '2010-2015' },
    ],
    educationArr: [
      {
        institution: 'FADERGS',
        description: 'Sistemas para Internet',
        period: '2018-2020',
      },
      {
        institution: 'UNISINOS',
        description: 'Jogos Digitais',
        period: '2016-2018',
      },
      {
        institution: 'QI',
        description: 'Técnico em Informática',
        period: '2010-2012',
      },
    ],
    programmingSkills: [
      { icon: 'html', skillName: 'HTML', level: 85 },
      { icon: 'css', skillName: 'CSS', level: 85 },
      { icon: 'sass', skillName: 'SASS / SCSS', level: 60 },
      { icon: 'javacript', skillName: 'JavaScript', level: 85 },
      { icon: 'typescript', skillName: 'TypeScript', level: 65 },
      { icon: 'jquery', skillName: 'jQuery', level: 70 },
      { icon: 'react', skillName: 'REACT', level: 40 },
      { icon: 'angular', skillName: 'Angular', level: 60 },
      { icon: 'php', skillName: 'PHP', level: 80 },
      { icon: 'mysql', skillName: 'MySQL', level: 80 },
    ],
    softwareSkills: [
      { icon: 'vscode', skillName: 'VS Code', level: 65 },
      { icon: 'gamemaker', skillName: 'GameMaker', level: 70 },
      { icon: 'photoshop', skillName: 'Photoshop', level: 50 },
      { icon: 'blender', skillName: 'Blender', level: 65 },
      { icon: 'inkscape', skillName: 'Inkscape', level: 40 },
      { icon: 'lmms', skillName: 'LMMS', level: 50 },
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
