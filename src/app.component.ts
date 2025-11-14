
import { Component, ChangeDetectionStrategy, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioDataService, ContentData } from './portfolio-data.service';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ContentPanelComponent } from './components/content-panel/content-panel.component';
import { SkillsPanelComponent } from './components/skills-panel/skills-panel.component';

type View = 'login' | 'menu' | 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    LoginScreenComponent,
    MainMenuComponent,
    ContentPanelComponent,
    SkillsPanelComponent
  ],
})
export class AppComponent {
  private dataService = inject(PortfolioDataService);
  
  currentView = signal<View>('login');
  contentData = signal<ContentData | null>(null);

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'F3' || event.key === 'Escape') {
      event.preventDefault();
      this.goBack();
    }
  }
  
  onLoginSuccess() {
    this.currentView.set('menu');
  }

  onOptionSelected(option: string) {
    switch(option) {
      case '1':
        this.contentData.set(this.dataService.getAboutData());
        this.currentView.set('about');
        break;
      case '2':
        this.currentView.set('skills');
        break;
      case '3':
        this.contentData.set(this.dataService.getExperienceData());
        this.currentView.set('experience');
        break;
      case '4':
        this.contentData.set(this.dataService.getProjectsData());
        this.currentView.set('projects');
        break;
      case '5':
        this.contentData.set(this.dataService.getEducationData());
        this.currentView.set('education');
        break;
      case '6':
        this.contentData.set(this.dataService.getContactData());
        this.currentView.set('contact');
        break;
      case 'X':
      case 'x':
        this.currentView.set('login');
        break;
    }
  }

  goBack() {
    if (this.currentView() !== 'login' && this.currentView() !== 'menu') {
      this.currentView.set('menu');
      this.contentData.set(null);
    } else if (this.currentView() === 'menu') {
      this.currentView.set('login');
    }
  }
}
