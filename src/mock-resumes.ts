import { Resume } from './app/components/Resume';

export const RESUMES: Resume[] = [
  {
    id: 1,
    name: 'Horacio Schumann',
    photoUrl: 'http://localhost:4200/assets/image/horacio.png',
    role: 'Angular Front-end',
    about: `Olá! Meu nome é Horácio e sou programador.
            Desde pequeno, sempre fui muito curioso e gostava de aprender coisas novas.
            Isso me levou a ter interesse em diversas áreas, como tecnologia, ciência e arte.
            Além disso, sou bastante dedicado e comprometido com tudo o que faço.
            Acredito que o aprendizado, a experiência e o senso crítico são fundamentais para o crescimento pessoal e profissional, e estou sempre aberto a novas oportunidades de crescimento.`,
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
      { icon: 'brush', interest: '2D Art' },
      { icon: 'cube', interest: '3D Art' },
      { icon: 'pcmusic', interest: 'Music / SFX' },
      { icon: 'joystick', interest: 'Game Dev' },
      { icon: 'camera', interest: 'Photography' },
      { icon: 'phi', interest: 'Philosophy' },
    ],
  },
];
