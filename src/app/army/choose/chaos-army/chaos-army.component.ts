import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ChaoslistdataService } from './chaoslist.service';
import { TemplateComponent } from './template/template.component';



@Component({
  selector: 'app-chaos-army',
  standalone: true,
  imports: [
    CommonModule,
    TemplateComponent,
  ],
  templateUrl: './chaos-army.component.html',
  styleUrl: './chaos-army.component.scss'
})
export class ChaosArmyComponent {

  chaoslistdata = inject(ChaoslistdataService);
}
