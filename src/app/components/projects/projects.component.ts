import { Component } from '@angular/core';
import {CommonModule, NgClass, NgFor, NgIf} from '@angular/common';
import {TranslatePipe} from "@ngx-translate/core";

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack';

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  activeCategory: ProjectCategory = 'all';

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout.',
      image: 'https://placehold.co/400x300/png',
      category: 'fullstack',
      technologies: ['Angular', 'TypeScript', 'Java', 'Bootstrap'],
      liveUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality and user authentication.',
      image: 'https://placehold.co/400x300/png',
      category: 'frontend',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
      liveUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Data Processing API',
      description: 'A robust backend API for processing and analyzing large datasets with efficient algorithms.',
      image: 'https://placehold.co/400x300/png',
      category: 'backend',
      technologies: ['Java', 'C', 'RESTful API'],
      githubUrl: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing skills and projects with modern design.',
      image: 'https://placehold.co/400x300/png',
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS'],
      liveUrl: 'https://example.com/project4',
      githubUrl: 'https://github.com/yourusername/project4',
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive system for tracking inventory, managing orders, and generating reports.',
      image: 'https://placehold.co/400x300/png',
      category: 'fullstack',
      technologies: ['Angular', 'TypeScript', 'Java', 'Bootstrap'],
      liveUrl: 'https://example.com/project5',
      githubUrl: 'https://github.com/yourusername/project5',
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time messaging application with private and group chat functionality.',
      image: 'https://placehold.co/400x300/png',
      category: 'fullstack',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Java'],
      liveUrl: 'https://example.com/project6',
      githubUrl: 'https://github.com/yourusername/project6',
    },
  ];

  get filteredProjects(): Project[] {
    return this.activeCategory === 'all'
      ? this.projects
      : this.projects.filter(project => project.category === this.activeCategory);
  }

  setCategory(category: ProjectCategory): void {
    this.activeCategory = category;
  }
}
