/**
 * File name: app-routing.module.ts
 * File description: Defines the routes used in the Angular application.
 * Author(s): Brock Hemsouvanh & Professor Richard Krasso https://www.youtube.com/watch?v=WDC2FvDTi_4
 * Date created: 2024-03-30
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/composer-list', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
