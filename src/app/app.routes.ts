import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { PropertyListComponent } from './modules/property-list/property-list.component';
import { PropertyDetailsComponent } from './modules/property-details/property-details.component';
import { BrokerProfileComponent } from './modules/broker-profile/broker-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  {
    path: 'property-list',
    component: PropertyListComponent,
  },
  {
    path: 'details',
    component: PropertyDetailsComponent,
  },
  {
    path: 'profile',
    component: BrokerProfileComponent,
  },
];
