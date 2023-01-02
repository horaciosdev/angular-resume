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

// Beginner: Refere-se a uma pessoa que está começando a aprender sobre uma determinada área e ainda está adquirindo conhecimentos e habilidades básicas.
// Junior: Refere-se a uma pessoa que está no início de sua carreira e ainda está aprendendo as habilidades e conhecimentos básicos da área de trabalho. É comum que os profissionais juniores sejam supervisionados de perto e tenham menos responsabilidades do que os profissionais mais experientes.
// Full: Refere-se a uma pessoa que já possui um bom nível de conhecimento e experiência na área de trabalho, mas ainda não é considerada uma autoridade ou especialista. Os profissionais plenos geralmente têm mais responsabilidades do que os juniores e são capazes de trabalhar de forma mais independente.
// Senior: Refere-se a uma pessoa que possui uma ampla experiência e habilidades em sua área de trabalho e é considerada uma autoridade ou especialista. Os profissionais seniores geralmente têm uma grande responsabilidade e são capazes de liderar equipes e tomar decisões importantes.
// Master: Refere-se a uma pessoa que possui um alto nível de experiência e habilidades em sua área de trabalho e é considerada uma autoridade máxima ou especialista. Os profissionais master são geralmente muito experientes e possuem uma ampla compreensão da área de trabalho e de como ela se relaciona com outras áreas.
// Specialist: Refere-se a uma pessoa que possui um nível muito alto de conhecimento e experiência em uma área muito específica ou em um assunto muito específico. Os especialistas geralmente têm uma grande profundidade de conhecimento em sua área de especialização e são capazes de fornecer orientação e aconselhamento detalhado sobre assuntos específicos.
