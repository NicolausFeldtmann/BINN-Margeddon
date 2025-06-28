import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-army-section',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './army-section.component.html',
  styleUrl: './army-section.component.scss'
})
export class ArmySectionComponent {

}
