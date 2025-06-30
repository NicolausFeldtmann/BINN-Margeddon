import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ArmySectionComponent } from './army/army-section/army-section.component';
import { LoreSectionComponent } from './lore-section/lore-section.component';
import { ArmageddonComponent } from './lore-section/armageddon/armageddon.component';
import { FirstWarComponent } from './lore-section/first-war/first-war.component';
import { ShameComponent } from './lore-section/shame/shame.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'army', component: ArmySectionComponent },
    { path: 'lore', component: LoreSectionComponent },
    { path: 'armageddon', component: ArmageddonComponent },
    { path: 'firstWar', component: FirstWarComponent},
    { path: 'shame', component: ShameComponent },
];
