import { Component, ChangeDetectionStrategy, output, signal, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalFooterComponent } from '../terminal-footer/terminal-footer.component';
import { BlinkingCursorComponent } from '../blinking-cursor/blinking-cursor.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  imports: [CommonModule, TerminalFooterComponent, BlinkingCursorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements AfterViewInit {
  optionSelected = output<string>();
  exit = output<void>();

  @ViewChild('optionInput') optionInput!: ElementRef<HTMLInputElement>;

  selectedOption = signal('');

  ngAfterViewInit() {
    // Use a timeout to ensure the element is fully rendered and focusable in the next browser cycle.
    setTimeout(() => this.optionInput.nativeElement.focus(), 0);
  }

  onInput(event: Event) {
    this.selectedOption.set((event.target as HTMLInputElement).value);
  }

  submitSelection() {
    const option = this.selectedOption().trim().toUpperCase();
    if (option) {
      this.optionSelected.emit(option);
      this.selectedOption.set('');
    }
  }

  onExit() {
    this.exit.emit();
  }
}
