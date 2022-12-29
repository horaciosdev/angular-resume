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
      return 'Especialista';
    }
    if (level >= 90) {
      return 'Master';
    }
    if (level >= 70) {
      return 'Senior';
    }
    if (level >= 50) {
      return 'Pleno';
    }
    if (level >= 30) {
      return 'Junior';
    }
    if (level < 30) {
      return 'Iniciante';
    }
    
    
    
    
    

    return 'Iniciante';
  }

  getInfo(skillLevel: string): string {
    switch (skillLevel) {
      case 'Iniciante':
        return 'Iniciante: Refere-se a uma pessoa que está começando a aprender sobre uma determinada área e ainda está adquirindo conhecimentos e habilidades básicas.';
      case 'Junior':
        return 'Junior: Refere-se a uma pessoa que está no início de sua carreira e ainda está aprendendo as habilidades e conhecimentos básicos da área de trabalho. É comum que os profissionais juniores sejam supervisionados de perto e tenham menos responsabilidades do que os profissionais mais experientes.';
      case 'Pleno':
        return 'Pleno: Refere-se a uma pessoa que já possui um bom nível de conhecimento e experiência na área de trabalho, mas ainda não é considerada uma autoridade ou especialista. Os profissionais plenos geralmente têm mais responsabilidades do que os juniores e são capazes de trabalhar de forma mais independente.';
      case 'Senior':
        return 'Senior: Refere-se a uma pessoa que possui uma ampla experiência e habilidades em sua área de trabalho e é considerada uma autoridade ou especialista. Os profissionais seniores geralmente têm uma grande responsabilidade e são capazes de liderar equipes e tomar decisões importantes.';
      case 'Master':
        return 'Master: Refere-se a uma pessoa que possui um alto nível de experiência e habilidades em sua área de trabalho e é considerada uma autoridade máxima ou especialista. Os profissionais master são geralmente muito experientes e possuem uma ampla compreensão da área de trabalho e de como ela se relaciona com outras áreas.';
      case 'Especialista':
        return 'Especialista: Refere-se a uma pessoa que possui um nível muito alto de conhecimento e experiência em uma área muito específica ou em um assunto muito específico. Os especialistas geralmente têm uma grande profundidade de conhecimento em sua área de especialização e são capazes de fornecer orientação e aconselhamento detalhado sobre assuntos específicos.';
      default:
        return '';
    }
  }
}

/*
Junior, pleno, senior, master e especialista são termos comumente usados para designar diferentes níveis de experiência e habilidade em uma determinada área de trabalho ou conhecimento. A designação de cada nível pode variar de acordo com a empresa ou organização, mas geralmente são usados de forma bastante similar em diferentes contextos.
Aqui estão algumas definições gerais para cada um desses termos:

Junior: Refere-se a uma pessoa que está no início de sua carreira e ainda está aprendendo as habilidades e conhecimentos básicos da área de trabalho. É comum que os profissionais juniores sejam supervisionados de perto e tenham menos responsabilidades do que os profissionais mais experientes.
Pleno: Refere-se a uma pessoa que já possui um bom nível de conhecimento e experiência na área de trabalho, mas ainda não é considerada uma autoridade ou especialista. Os profissionais plenos geralmente têm mais responsabilidades do que os juniores e são capazes de trabalhar de forma mais independente.
Senior: Refere-se a uma pessoa que possui uma ampla experiência e habilidades em sua área de trabalho e é considerada uma autoridade ou especialista. Os profissionais seniores geralmente têm uma grande responsabilidade e são capazes de liderar equipes e tomar decisões importantes.
Master: Refere-se a uma pessoa que possui um alto nível de experiência e habilidades em sua área de trabalho e é considerada uma autoridade máxima ou especialista. Os profissionais master são geralmente muito experientes e possuem uma ampla compreensão da área de trabalho e de como ela se relaciona com outras áreas.
Especialista: Refere-se a uma pessoa que possui um nível muito alto de conhecimento e experiência em uma área muito específica ou em um assunto muito específico. Os especialistas geralmente têm uma grande profundidade de conhecimento em sua área de especialização e são capazes de fornecer orientação e aconselhamento detalhado sobre assuntos específicos.
*/
