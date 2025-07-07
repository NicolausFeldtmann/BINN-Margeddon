import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  @Input()leaderList!: any;
  @Input()opList!: any;

  inputData = "";

  @Output()unit = new EventEmitter<string>();

  sendInputData() {
    this.unit.emit(this.inputData);
    this.inputData = "";
  }
}
