
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blinking-cursor',
  template: `<span class="blinking-cursor">_</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlinkingCursorComponent {}
