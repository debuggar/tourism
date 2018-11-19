import { RouterModule , Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HolidaysComponent } from './holidays/holidays.component';

const appRoutes: Routes = [
    { path : 'home', component : HomeComponent },
    { path : 'holidays', component : HolidaysComponent },
    { path: '', redirectTo: '/home' , pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
