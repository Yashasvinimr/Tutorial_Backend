import { Routes } from '@angular/router';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';

export const routes: Routes = [
    { path:'', redirectTo: 'tutprials', pathMatch:'full'},
    { path: 'tutorials', component: TutorialsListComponent}
    
];
