
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentData } from '../../portfolio-data.service';
import { TerminalFooterComponent } from '../terminal-footer/terminal-footer.component';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  imports: [CommonModule, TerminalFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPanelComponent {
  data = input.required<ContentData | null>();
  exit = output<void>();

  onExit() {
    this.exit.emit();
  }
}
