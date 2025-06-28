import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ArmySectionComponent } from './army-section/army-section.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'army', component: ArmySectionComponent },
];
