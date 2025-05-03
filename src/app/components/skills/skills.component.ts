import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

type SkillCategory = 'frontend' | 'backend' | 'all';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe
  ],
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  constructor(private translate: TranslateService) {
  }

  activeCategory: SkillCategory = 'all';

  frontendSkills: Skill[] = [
    {name: 'Angular', level: 90},
    {name: 'JavaScript', level: 85},
    {name: 'HTML5', level: 95},
    {name: 'CSS3', level: 90},
    {name: 'Bootstrap', level: 85},
    {name: 'TailwindCSS', level: 80},
    {name: 'TypeScript', level: 85},
  ];

  backendSkills: Skill[] = [
    {name: 'Java', level: 90},
    {name: 'C#', level: 65},
    {name: 'RESTful APIs', level: 90},
    {name: 'Database Design', level: 80},
    {name: 'Springboot', level: 90},
  ];

  additionalSkills: string[] = [
    'git',
    'gitlab',
    'intellij',
    'agile/scrum',
    'problem_solving',
    'team_collaboration'
  ];


  get displaySkills(): Skill[] {
    return this.activeCategory === 'all'
      ? [...this.frontendSkills, ...this.backendSkills]
      : this.activeCategory === 'frontend'
        ? this.frontendSkills
        : this.backendSkills;
  }

  setCategory(category: SkillCategory): void {
    this.activeCategory = category;
  }
}
