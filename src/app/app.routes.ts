import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoreSectionComponent } from './lore-section/lore-section.component';
import { ArmageddonComponent } from './lore-section/armageddon/armageddon.component';
import { FirstWarComponent } from './lore-section/first-war/first-war.component';
import { ShameComponent } from './lore-section/shame/shame.component';
import { ChooseComponent } from './army/choose/choose.component';
import { ChaosArmyComponent } from './army/choose/chaos-army/chaos-army.component';



export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'lore', component: LoreSectionComponent },
    { path: 'armageddon', component: ArmageddonComponent },
    { path: 'firstWar', component: FirstWarComponent},
    { path: 'shame', component: ShameComponent },
    { path: 'choose', component: ChooseComponent},
    { path: 'chaos', component: ChaosArmyComponent},
];
