import { Resume } from './app/components/Resume';

export const RESUMES: Resume[] = [
  {
    id: 1,
    name: 'Horacio Schumann',
    photoUrl: 'https://avatars.githubusercontent.com/u/29050661?v=4',
    role: 'Angular Front-end',
    about: `My name is Horacio and I'm a programmer.
            From an early age, I was always curious and enjoyed learning new things.
            This led me to explore various areas such as technology, science, and art.
            I am dedicated and committed to everything I do and believe that continuous learning, experience, and critical thinking are fundamental for personal and professional growth.
            I am always looking for new opportunities to grow and evolve.`,
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
    experiences: [
      {
        icon: 'suitcase',
        title: 'Work Experience',
        history: [
          {
            institution: 'SplashScreen',
            description: 'Game Maker',
            period: '2021-2022',
          },
          {
            institution: 'Update',
            description: 'Full Stack Developer',
            period: '2018-2021',
          },
          {
            institution: 'Fortune',
            description: 'Full Stack Developer',
            period: '2015-2018',
          },
        ],
      },
      {
        icon: 'education',
        title: 'Education',
        history: [
          {
            institution: 'FADERGS',
            description: 'Sistemas para Internet',
            period: '2018-2020',
          },
          {
            institution: 'UNISINOS',
            description: 'Jogos Digitais',
            period: '2010-2012',
          },
          {
            institution: 'QI',
            description: 'Técnico em Informática',
            period: '2006-2008',
          },
        ],
      },
    ],
    skills: [
      {
        icon: 'code',
        title: 'Programming Skills',
        skillList: [
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
      },
      {
        icon: 'software',
        title: 'Software Skills',
        skillList: [
          { icon: 'vscode', skillName: 'VS Code', level: 65 },
          { icon: 'gamemaker', skillName: 'GameMaker', level: 70 },
          { icon: 'photoshop', skillName: 'Photoshop', level: 50 },
          { icon: 'blender', skillName: 'Blender', level: 65 },
          { icon: 'inkscape', skillName: 'Inkscape', level: 40 },
          { icon: 'lmms', skillName: 'LMMS', level: 50 },
        ],
      },
    ],
    interests: [
      { icon: 'brush', interest: '2D Art', url: '' },
      {
        icon: 'cube',
        interest: '3D Art',
        url: 'https://www.deviantart.com/hor4cles',
      },
      { icon: 'pcmusic', interest: 'Music / SFX', url: '' },
      { icon: 'joystick', interest: 'Game Dev', url: '' },
      { icon: 'camera', interest: 'Photography', url: '' },
      { icon: 'phi', interest: 'Philosophy', url: '' },
    ],
  },
];
