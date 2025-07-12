import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  userName: string = '';
  names: string[] = [];

  saveName() {
    if (this.userName.trim()) {
      this.names.push(this.userName.trim());
      this.userName = "";
    }
  }

}
