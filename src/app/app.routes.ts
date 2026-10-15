import { Routes } from '@angular/router';
// Update this line to match your class export name exactly:
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard';
import { UserDashboardComponent } from './features/user-dashboard/user-dashboard';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'admin', component: AdminDashboardComponent },

    { path: 'user', component: UserDashboardComponent }
];
