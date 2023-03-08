import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputWrapperComponent {
  @Input() label: string;

  constructor() {}
}
