import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ArmySectionComponent } from './army/army-section/army-section.component';
import { LoreSectionComponent } from './lore-section/lore-section.component';
import { ArmageddonComponent } from './lore-section/armageddon/armageddon.component';
import { HiveCityComponent } from './lore-section/hive-city/hive-city.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'army', component: ArmySectionComponent },
    { path: 'lore', component: LoreSectionComponent },
    { path: 'armageddon', component: ArmageddonComponent },
    { path: 'hive', component: HiveCityComponent },
];
