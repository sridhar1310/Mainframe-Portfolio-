import { Component, ChangeDetectionStrategy, output, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlinkingCursorComponent } from '../blinking-cursor/blinking-cursor.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  imports: [CommonModule, BlinkingCursorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginScreenComponent implements OnInit {
  loginSuccess = output<void>();
  
  typedText = signal('');
  showForm = signal(false);
  
  private fullText = 'CONNECTING TO SG MVS SYSTEM... CONNECTION ESTABLISHED. WELCOME TO TSO/E.';

  @HostListener('window:keydown.enter', ['$event'])
  onEnterPress(event: KeyboardEvent) {
    if (this.showForm()) {
      event.preventDefault();
      this.loginSuccess.emit();
    }
  }

  ngOnInit() {
    this.typeText();
  }
  
  typeText() {
    let index = 0;
    const interval = setInterval(() => {
      this.typedText.update(val => val + this.fullText[index]);
      index++;
      if (index === this.fullText.length) {
        clearInterval(interval);
        setTimeout(() => this.showForm.set(true), 500);
      }
    }, 50);
  }
  
  // This is for the clickable text
  onSubmitClick(event?: MouseEvent) {
    event?.preventDefault();
    this.loginSuccess.emit();
  }
}
