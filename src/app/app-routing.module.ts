import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { FinishedDashboardComponent } from './finished-dashboard/finished-dashboard.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { Containers1Component } from './containers1/containers1.component';
import { Containers2Component } from './containers2/containers2.component';
import { AddingContentComponent } from './adding-content/adding-content.component';
import { ContainersWithContentComponent } from './containers-with-content/containers-with-content.component';
import { AddingAssetsComponent } from './adding-assets/adding-assets.component';
import { ThemingComponent } from './theming/theming.component';

export const routes: Routes = [
  { path: '', redirectTo: 'finished-dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'finished-dashboard', component: FinishedDashboardComponent, data: { text: 'Finished Dashboard' } },
  { path: 'master-page', component: MasterPageComponent, data: { text: 'Master Page' } },
  { path: 'containers1', component: Containers1Component, data: { text: 'Containers 1' } },
  { path: 'containers2', component: Containers2Component, data: { text: 'Containers 2' } },
  { path: 'adding-content', component: AddingContentComponent, data: { text: 'Adding Content' } },
  { path: 'containers-with-content', component: ContainersWithContentComponent, data: { text: 'Containers with content' } },
  { path: 'adding-assets', component: AddingAssetsComponent, data: { text: 'Adding Assets' } },
  { path: 'theming', component: ThemingComponent, data: { text: 'Theming' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
