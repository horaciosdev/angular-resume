import { Component, Input } from '@angular/core';
import { Skill } from '../Resume';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent {
  @Input() skillList: Skill[] = [];

  getLevelTitle(level: number): string {
    if (level < 0) {
      level = 0;
    }
    if (level > 100) {
      level = 100;
    }

    if (level >= 95) {
      return 'Specialist';
    }
    if (level >= 90) {
      return 'Master';
    }
    if (level >= 70) {
      return 'Senior';
    }
    if (level >= 50) {
      return 'Full';
    }
    if (level >= 30) {
      return 'Junior';
    }
    if (level < 30) {
      return 'Beginner';
    }

    return 'Beginner';
  }

  getInfo(skillLevel: string): string {
    switch (skillLevel) {
      case 'Beginner':
        return 'Beginner: refers to someone who is just starting to learn about a particular area and is still acquiring basic knowledge and skills.';
      case 'Junior':
        return 'Junior: refers to someone who is at the beginning of their career and is still learning the basic skills and knowledge of their field of work. It is common for junior professionals to be closely supervised and have fewer responsibilities than more experienced professionals.';
      case 'Full':
        return 'Full: refers to someone who already has a good level of knowledge and experience in their field of work, but is not yet considered an authority or specialist. Full professionals typically have more responsibilities than juniors and are able to work more independently.';
      case 'Senior':
        return 'Senior: refers to someone who has a wide range of experience and skills in their field of work and is considered an authority or specialist. Senior professionals generally have a great deal of responsibility and are able to lead teams and make important decisions.';
      case 'Master':
        return 'Master: refers to someone who has a high level of experience and skills in their field of work and is considered the highest authority or specialist. Master professionals are generally very experienced and have a broad understanding of their field of work and how it relates to other areas.';
      case 'Specialist':
        return 'Specialist: refers to someone who has a very high level of knowledge and experience in a very specific area or subject. Specialists typically have a great depth of knowledge in their area of specialization and are able to provide detailed guidance and advice on specific subjects.';
      default:
        return '';
    }
  }
}

// Beginner: Refere-se a uma pessoa que est?? come??ando a aprender sobre uma determinada ??rea e ainda est?? adquirindo conhecimentos e habilidades b??sicas.
// Junior: Refere-se a uma pessoa que est?? no in??cio de sua carreira e ainda est?? aprendendo as habilidades e conhecimentos b??sicos da ??rea de trabalho. ?? comum que os profissionais juniores sejam supervisionados de perto e tenham menos responsabilidades do que os profissionais mais experientes.
// Full: Refere-se a uma pessoa que j?? possui um bom n??vel de conhecimento e experi??ncia na ??rea de trabalho, mas ainda n??o ?? considerada uma autoridade ou especialista. Os profissionais plenos geralmente t??m mais responsabilidades do que os juniores e s??o capazes de trabalhar de forma mais independente.
// Senior: Refere-se a uma pessoa que possui uma ampla experi??ncia e habilidades em sua ??rea de trabalho e ?? considerada uma autoridade ou especialista. Os profissionais seniores geralmente t??m uma grande responsabilidade e s??o capazes de liderar equipes e tomar decis??es importantes.
// Master: Refere-se a uma pessoa que possui um alto n??vel de experi??ncia e habilidades em sua ??rea de trabalho e ?? considerada uma autoridade m??xima ou especialista. Os profissionais master s??o geralmente muito experientes e possuem uma ampla compreens??o da ??rea de trabalho e de como ela se relaciona com outras ??reas.
// Specialist: Refere-se a uma pessoa que possui um n??vel muito alto de conhecimento e experi??ncia em uma ??rea muito espec??fica ou em um assunto muito espec??fico. Os especialistas geralmente t??m uma grande profundidade de conhecimento em sua ??rea de especializa????o e s??o capazes de fornecer orienta????o e aconselhamento detalhado sobre assuntos espec??ficos.
