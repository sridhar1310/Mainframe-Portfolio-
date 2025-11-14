
import { Component, ChangeDetectionStrategy, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal-footer',
  templateUrl: './terminal-footer.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalFooterComponent {
  onExit = output<void>();
  showScroll = input<boolean>(false);

  exit() {
    this.onExit.emit();
  }
}
