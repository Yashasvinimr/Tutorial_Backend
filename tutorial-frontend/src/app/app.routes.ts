import { Routes } from '@angular/router';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './tutorials-details/tutorials-details.component';

export const routes: Routes = [
    { path:'', redirectTo: 'tutprials', pathMatch:'full'},
    { path: 'tutorials', component: TutorialsListComponent},
    {path: 'tutorials/:id', component: TutorialsDetailsComponent}
];
