
import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalFooterComponent } from '../terminal-footer/terminal-footer.component';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  imports: [CommonModule, TerminalFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPanelComponent {
  exit = output<void>();

  skillsCol1 = ['COBOL', 'JCL', 'DB2', 'SQL', 'VSAM', 'CICS'];
  skillsCol2 = ['FTP', 'TSO / ISPF', 'Changeman', 'File Manager', 'FILEDB2', 'SPUFI'];
  skillsCol3 = ['Control-M', 'XPEDITOR', 'INSYNC', 'TRACEMASTER', 'DUMPMASTER', 'TERADATA'];
  utilities = ['DFSORT', 'SYNCSORT', 'IEBGENER', 'IDCAMS'];

  onExit() {
    this.exit.emit();
  }
}
